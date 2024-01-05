import React, { useContext } from "react";
import styled from "styled-components";
import Classes from "/src/Components/Menus_Card/MenusCard.module.css";
import MenuCard from "../Menus_Card/MenuCard";
import all_product from "../../Data/All_Product";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import ProductLinks from "../Product_Links/ProductLinks";

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

const AllProductsWripper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
  flexWrap: "wrap",
});

const Menus = () => {
  const { all_product } = useContext(ShopContext);

  return (
    <>
      <Menu>
        <Key>Menu</Key>
        <Title>
          Choose your favoriate food <br /> & order now !
        </Title>

        <ProductLinks />

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
