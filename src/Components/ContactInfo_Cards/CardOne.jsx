import React from "react";
import styled from "styled-components";

const CardOneContent = styled.div`
  width: 350px;
  padding: 3.5rem 1.1rem;
  // background: #88bcb9;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    box-shadow: 3px 2px 15px 5px lightgray;
  }
`;

const Tel = styled.p({
  opacity: ".6",
  paddingBottom: ".4rem",
});

const Mail = styled.p({
  opacity: ".6",
});

const Title = styled.h1({
  fontSize: "2rem",
  paddingBottom: "2rem",
});

const TellMain = styled.h2({
  paddingBottom: "1.2rem",
  color: "#34b96f",
});

const CardOne = () => {
  return (
    <>
      <CardOneContent>
        <Title>Contact Us</Title>
        <TellMain>+250-791-676-207</TellMain>
        <Tel>Tel : +250-791-676-207</Tel>
        <Mail>Email : oplano8@hgmail.com</Mail>
      </CardOneContent>
    </>
  );
};

export default CardOne;
