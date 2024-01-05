import React from "react";
import styled from "styled-components";

const Fruits_Hero = styled.div({
  padding: "0px ",
});

const FruitsWripper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(src/assets/Images/Fruits/fruitHero.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 10% 3%;
  margin-bottom: 2rem;
`;

const Title = styled.h1({
  fontSize: "4rem",
  fontWeight: "550",
  textTransform: "captilize",
  wordSpacing: "7px",
  color: "#fff",
});

const FruitsHero = () => {
  return (
    <>
      {" "}
      <Fruits_Hero>
        <FruitsWripper>
          <Title>Fruits List</Title>
        </FruitsWripper>
      </Fruits_Hero>
    </>
  );
};

export default FruitsHero;
