import React from "react";
import styled from "styled-components";

const Menu_Hero = styled.div({
  padding: "0px ",
});

const MenuWripper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(src/assets/Images/Coffee/coffee6.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 13% 3%;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 550;
  text-transform: captilize;
  word-spacing: 7px;
  color: #fff;

  @media screen and (max-width: 767px) {
    font-size: 2.3rem;
  }
`;

const MenuHero = () => {
  return (
    <>
      <Menu_Hero>
        <MenuWripper>
          <Title>Food Menu List</Title>
        </MenuWripper>
      </Menu_Hero>
    </>
  );
};

export default MenuHero;
