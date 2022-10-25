import Landing from "./components/Landing";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
      className="App"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chatroom" element={<ChatRoom />} />
        </Routes>
      </BrowserRouter>

      {/* <Landing></Landing> */}
    </div>
  );
}

export default App;
