import { Application } from "express";
const express = require("express");
const cors = require("cors");
import { createServer } from "http";
import { Server } from "socket.io";
import { Socket } from "socket.io-client";

const PORT: number = 5000;
const app: Application = express();
app.use(cors());
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: any) => {
  console.log("user " + socket.id + " connected");

  socket.on("new_user", (data: any) => {
    socket.broadcast.emit("new_user", { username: data.username, message: data.message });
  });

  socket.on("send_message", (data: any) => {
    socket.broadcast.emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("user " + socket.id + " disconnected");
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
