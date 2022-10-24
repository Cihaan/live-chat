import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const PORT: number = 3000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });
const userCount = io.engine.clientsCount;

io.on('connection', (socket) => {
    console.log("a new user just connected")
})

httpServer.listen(PORT, () => {
    console.log('server started on port 3000');
});