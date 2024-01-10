import React from "react";
import styled from "styled-components";

const Button = styled.button({
  width: "100%",
  height: "6.5vh",
  border: "2px solid transparent ",
  fontSize: "1.1rem",
  borderRadius: "10px",
  cursor: "pointer",
  background: "#34b96f",
  color: "#fff",
  marginBottom: "8%",
});

const SignUpButton = () => {
  return (
    <>
      <Button>Sign Up </Button>
    </>
  );
};

export default SignUpButton;
