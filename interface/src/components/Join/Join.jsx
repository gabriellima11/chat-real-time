import { Input, Button, Container } from "./styles";

import { useRef } from "react";
import io from "socket.io-client";

export const Join = ({ setChatVisibility, setSocket }) => {
  const usernameRef = useRef();

  const handleSubmit = async () => {
    const username = usernameRef.current.value;
    if (!username.trim()) return;
    const socket = await io.connect("http://localhost:3001");
    socket.emit("set_username", username);
    setSocket(socket);

    setChatVisibility(true);
  };

  return (
    <Container>
      <h1>Acessar Chat</h1>
      <Input type="text" ref={usernameRef} placeholder="Nome de usuário" />
      <Button onClick={() => handleSubmit()}>Entrar</Button>
    </Container>
  );
};
