import React from "react";
import styled from "styled-components";

const Button = styled.button({
  width: "100%",
  height: "6.5vh",
  border: "2px solid #34b96f ",
  fontSize: "1.1rem",
  borderRadius: "10px",
  cursor: "pointer",
  background: "transparent",
  marginBottom: "8%",
});

const LoginButton = () => {
  return (
    <>
      <Button>Log In</Button>
    </>
  );
};

export default LoginButton;
