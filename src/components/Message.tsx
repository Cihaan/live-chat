import styled from "styled-components";

const Message: React.FC<{time:string, username: string, message: string}> = ({time, username, message}) => {
  return (
    <Msg>
      <Time>{ '(' + time + ')' }</Time>
      <Username>{ username }</Username>
      <MessageText>{ ': ' + message }</MessageText>
    </Msg>
  );
}

const Msg = styled.div`
  color: #fff;
  margin: 5px 0;
  display: flex;
  flex-direction: row;
`;

const Time = styled.span`
  color: rgba(255, 255, 255, 0.382);
  font-size: 1.6rem;
`;

const Username = styled.h2`
  margin-left: 3px;
  font-weight: 400;
  color: #38bdf8;
  font-size: 1.8rem;
`;

const MessageText = styled.p`
  margin-left: 5px;
  font-weight: 400;
  font-size: 1.7rem;
`;

export default Message;
