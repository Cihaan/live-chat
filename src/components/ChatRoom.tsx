import Message from "./Message";
import styled from "styled-components";
import TextBar from "./TextBar";
import { useSearchParams } from "react-router-dom";
import useSocket from "../Socket";

function ChatRoom() {
  const { messages, sendMessage } = useSocket();

  const formatTime = () => {
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    return `${hour}:${minutes}:${seconds}`;
  };

  return (
    <ChatContainer>
      <ChatTitle>Live Chat</ChatTitle>
      <Chat >
        {messages.map((msg: any, index: number) => {
          return (
            <Message
              key={index}
              time={msg.time}
              message={msg.message}
              username={msg.username}
            />
          );
        })}
      </Chat>
      <TextBar time={formatTime} msg={sendMessage} />
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
