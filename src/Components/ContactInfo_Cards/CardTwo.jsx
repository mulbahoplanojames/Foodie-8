import React from "react";
import styled from "styled-components";
import { FaExpandArrowsAlt } from "react-icons/fa";

const CardTwoContent = styled.div({
  width: "350px",
  padding: "3.5rem 1.1rem",
  borderRadius: "5px",
  boxShadow: "3px 2px 15px 2px lightgray",
  textAlign: "center",
  cursor: "pointer",
  zIndex: "2",
});

const Description = styled.p({
  opacity: ".6",
  paddingBottom: ".4rem",
});

const Icon = styled.h1({
  fontSize: "3rem",
  paddingBottom: "1.5rem",
});

const Title = styled.h2({
  paddingBottom: "1.2rem",
  fontSize: "2rem",
});

const CardTwo = () => {
  return (
    <>
      <CardTwoContent>
        <Icon>
          <FaExpandArrowsAlt />
        </Icon>
        <Title>Get Direction</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          impedit.
        </Description>
      </CardTwoContent>
    </>
  );
};

export default CardTwo;
