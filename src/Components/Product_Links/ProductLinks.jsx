import Classes from "/src/Components/Menus_Card/MenusCard.module.css";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductsLinksWripper = styled.div({
  textAlign: "center",
  paddingBottom: "6%",
  display: "flex",
  justifyContent: "center",
});

const ProductLinks = () => {
  return (
    <>
      <ProductsLinksWripper>
        <Link to="/burger" className={Classes.link}>
          Burger
        </Link>
        <Link to="/pizza" className={Classes.link}>
          Pizza
        </Link>
        <Link to="/chicken" className={Classes.link}>
          Chicken
        </Link>
        <Link to="/coffee" className={Classes.link}>
          Coffee
        </Link>
        <Link to="/fruits" className={Classes.link}>
          Fruits
        </Link>
      </ProductsLinksWripper>
    </>
  );
};

export default ProductLinks;
