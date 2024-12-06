import { useState } from "react";
import "./App.css";
import { Join } from "./components/Join/Join";
import { Chat } from "./components/Chat/Chat";

function App() {
  const [chatVisibility, setChatVisibility] = useState(false);
  const [socket, setSocket] = useState();

  return (
    <>
      {chatVisibility ? (
        <Chat socket={socket} />
      ) : (
        <Join setChatVisibility={setChatVisibility} setSocket={setSocket} />
      )}
    </>
  );
}

export default App;
