import { Input, Button, Container, Text, Content } from "./styles";

import { useRef, useState, useEffect } from "react";

export const Chat = ({ socket }) => {
  const messageRef = useRef();
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((current) => [...current, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [socket]);

  const handleSubmit = () => {
    const message = messageRef.current.value;
    if (!message.trim()) return;

    socket.emit("message", message);
    clearInput();
    focusInput();
  };

  const clearInput = () => {
    messageRef.current.value = "";
  };

  const focusInput = () => {
    messageRef.current.focus();
  };

  return (
    <Container>
      <h1>Chat</h1>
      <Content>
        <div>
          {messageList.map((message, index) => (
            <Text key={index} authorId={message.authorId} socketId={socket.id}>
              <span>{message.author}:</span> <p>{message.text}</p>
            </Text>
          ))}
        </div>
      </Content>
      <div>
        <Input type="text" ref={messageRef} placeholder="Mensagem" />
        <Button onClick={() => handleSubmit()}>Enviar</Button>
      </div>
    </Container>
  );
};
