import React from "react";
import styled from "styled-components";

function TextBar() {
  return (
    <ChatBar>
      {/* <Emoji>😂</Emoji> */}
      <TextZone placeholder="Chat message" />
      <SendButton>Send</SendButton>
    </ChatBar>
  );
}

const ChatBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

const Emoji = styled.span`
  font-size: 1.6rem;
  text-align: center;
  cursor: pointer;
`;

const TextZone = styled.textarea`
  flex-grow: 1;
  border: 3px solid #57575b;
  border-right: none;
  border-radius: 15px 0 0 15px;
  padding: 8px 0 8px 8px;
  font-size: 1.6rem;
  color: #fff;
  background-color: #1f1f23;
  resize: none;
  &:focus {
    outline: none;
    border: 3px solid #38bdf8;
  }
`;

const SendButton = styled.button`
  padding: 18px 5px 18px 5px;
  font-size: 1.6rem;
  cursor: pointer;
  text-align: center;
  color: #38bdf8;
  border: 3px solid #57575b;
  border-left: none;
  border-radius: 0 15px 15px 0;
  &:hover {
    background-color: #38bdf8;
    color: #fff;
    border: none;
  }
`;

export default TextBar;
