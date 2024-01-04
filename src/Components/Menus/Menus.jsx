import React from "react";
import styled from "styled-components";
import Classes from "/src/Components/Menus_Card/MenusCard.module.css";
import MenuCard from "../Menus_Card/MenuCard";
import all_product from "../../Data/All_Product";
import { Link } from "react-router-dom";

const Menu = styled.div({
  padding: "5% 2%",
});

const Key = styled.p({
  textAlign: "center",
  fontSize: "1.3rem",
  paddingBottom: "2%",
  color: "#34b96f",
});

const Title = styled.h1({
  fontSize: "3rem",
  paddingBottom: "5%",
  textAlign: "center",
  lineHeight: "3.5rem",
  color: "#222222",
});

const MenuLinksWripper = styled.div({
  textAlign: "center",
  paddingBottom: "6%",
  display: "flex",
  justifyContent: "center",
});

const AllProductsWripper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
  flexWrap: "wrap",
});

const Menus = () => {
  return (
    <>
      <Menu>
        <Key>Menu</Key>
        <Title>
          Choose your favoriate food <br /> & order now !
        </Title>

        <MenuLinksWripper>
          <Link
            to=""
            className={Classes.link}
            onClick={() => {
              all_product.filter((products) => products.category !== "Burger");
              console.log("CLick");
            }}
          >
            Burger
          </Link>
          <Link to="" className={Classes.link}>
            Pizza
          </Link>
          <Link to="" className={Classes.link}>
            Chicken
          </Link>
          <Link to="" className={Classes.link}>
            Coffee
          </Link>
          <Link to="" className={Classes.link}>
            Fruits
          </Link>
        </MenuLinksWripper>

        <AllProductsWripper>
          {all_product.map((product, i) => {
            return (
              <MenuCard
                key={i}
                Id={product.id}
                name={product.name}
                price={product.price}
                rating={product.rating}
                image={product.image}
                category={product.category}
                description={product.description}
              />
            );
          })}

          
        </AllProductsWripper>
      </Menu>
    </>
  );
};

export default Menus;
