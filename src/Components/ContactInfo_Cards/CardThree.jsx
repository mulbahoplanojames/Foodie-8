import React from "react";
import styled from "styled-components";

const CardThreeContent = styled.div`
  width: 350px;
  padding: 3.5rem 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    box-shadow: 3px 2px 15px 5px lightgray;
  }
`;

const Title = styled.h1({
  fontSize: "2rem",
  paddingBottom: "2rem",
  textAlign: "center",
});

const Open = styled.p({
  paddingBottom: "1.2rem",
  opacity: ".7",
  fontSize: "1.16rem",
});

const time = {
  paddingLeft: "4.5rem",
};

const CardThree = () => {
  return (
    <>
      <CardThreeContent>
        <Title>Opening Hour</Title>
        <Open>
          Monday-Friday <span style={time}>9:00 - 10:00</span>
        </Open>
        <Open>
          Saturday-Sunday <span style={time}>8:00 - 3:00</span>
        </Open>
      </CardThreeContent>
    </>
  );
};

export default CardThree;
