import { io, Socket } from "socket.io-client";
import Message from "./Message";
import styled from "styled-components";
import TextBar from "./TextBar";

function ChatRoom() {
  // const socket = io("http://localhost:3000");
  const messages: { time: string; username: string; message: string }[] = [
    {
      time: "12:00",
      username: "John",
      message: "Hello",
    },
    {
      time: "12:01",
      username: "Fu",
      message: "Hi !",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:02",
      username: "Ma",
      message: "What's up ?",
    },
    {
      time: "12:03",
      username: "Xi",
      message: "Shut up !",
    },
  ];

  return (
    <ChatContainer>
      <ChatTitle>Live Chat</ChatTitle>
      <Chat>
        {messages.map((msg) => {
          return (
            <Message
              time={msg.time}
              message={msg.message}
              username={msg.username}
            />
          );
        })}
      </Chat>
      <TextBar />
    </ChatContainer>
  );
}

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  height: 100%;
`;

const ChatTitle = styled.h1`
  font-size: 4.5rem;
  letter-spacing: 1px;
  margin: 25px;
  color: #38bdf8;
`;

const Chat = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 25px;
  border: 3px solid #57575b;
  border-radius: 15px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  /* margin-bottom: 100px; */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default ChatRoom;
