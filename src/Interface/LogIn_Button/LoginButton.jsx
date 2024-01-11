import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 6.5vh;
  border: 2px solid #34b96f;
  font-size: 1.1rem;
  border-radius: 10px;
  cursor: pointer;
  background: transparent;
  margin-bottom: 8%;
  transition: 0.3s ease-in;

  &:hover {
    background: #34b96f;
    border: 2px solid transparent;
    color: "#ffffff";
  }
`;

const LoginButton = () => {
  return (
    <>
      <Button>Log In</Button>
    </>
  );
};

export default LoginButton;
