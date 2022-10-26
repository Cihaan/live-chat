import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const useSocket = () => {
  var socket = useRef<any>();
  const [messages, setMessagse] = useState<any>([]);

  useEffect(() => {
    socket.current = io("http://localhost:5000");

    socket.current.on("receive_message", (message: any) => {
      const newMessage = {
        time: message.time,
        username: message.username,
        message: message.message
      };
      setMessagse((messages: any) => [...messages, newMessage]);
    });
  });

  const sendMessage = (username: string | null, message: string, time: string) => {
    socket.current?.emit("send_message", { username: username, message: message, time: time });
  };

  return { messages, sendMessage };
};

export default useSocket;
