import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  var roomName: string = "";
  var username: string = "";
  var navigate = useNavigate();

  function connectToSocket(isGlobal: boolean = true): void {
    if (isGlobal) {
      navigate(`/chatroom?username=${username}`);
    } else {
      // créer un salon
      navigate(`/chatroom?username=${username}&room=${roomName}`);
    }
  }

  return (
    <LandingContainer>
      <LandingTitle>Welcome to Live Chat</LandingTitle>
      <Global>
        <GlobalTitle>
          Join the <span>global</span> chat
        </GlobalTitle>
        <Field>Username</Field>
        <GlobalInput
          type="text"
          onChange={(e) => (username = e.target.value)}
        />
        <GlobalButton onClick={() => connectToSocket(true)}>
          Join Global Room
        </GlobalButton>
      </Global>
      {/* <span>Or</span>
      <Room>
        <GlobalTitle>
          Create your <span>private</span> room
        </GlobalTitle>
        <Field>Username</Field>
        <GlobalInput onChange={(e) => (username = e.target.value)} />
        <Field>Room name</Field>
        <GlobalInput onChange={(e) => (roomName = e.target.value)} />
        <GlobalButton onClick={() => connectToSocket(false)}>
          Create Private Room
        </GlobalButton>
      </Room> */}
    </LandingContainer>
  );
};

const LandingContainer = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LandingTitle = styled.h1`
  color: #38bdf8;
  font-size: 4.5rem;
  letter-spacing: 1px;
  margin: 30px;
  text-align: center;
`;

const Global = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Room = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GlobalTitle = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin: 35px;
  & > span {
    color: #38bdf8;
    font-size: 2.5rem;
  }
`;

const Field = styled.p`
  color: #fff;
  font-size: 1.6rem;
  /* margin: 5px 0 0 15px; */
`;

const GlobalInput = styled.input`
  height: 30px;
  width: 300px;
  border: 3px solid #57575b;
  border-radius: 15px;
  padding: 0 15px;
  font-size: 1.6rem;
  color: #fff;
  background-color: #1f1f23;
  margin-bottom: 15px;
  &:focus {
    outline: none;
    border: 3px solid #38bdf8;
  }
`;

const GlobalButton = styled.button`
  height: 30px;
  border: 3px solid #57575b;
  border-radius: 15px;
  padding: 0 30px;
  font-size: 1.8rem;
  color: #38bdf8;
  background-color: #1f1f23;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: #38bdf8;
    color: #fff;
    border: none;
  }
`;

export default Landing;
