import Classes from "/src/Components/Menus_Card/MenusCard.module.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ShopContext } from "../../../Context/ShopContext";
import MenuCard from "../../Menus_Card/MenuCard";
import PizzaHero from "./Pizza_Hero/PizzaHero";
import ProductLinks from "../../Product_Links/ProductLinks";
import Promotion from "../../Promotion/Promotion";

const PizzaContentWripper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "40px",
  paddingBottom: "6%",
});

const Pizza = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <>
      <PizzaHero />

      <ProductLinks />

      <PizzaContentWripper>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <MenuCard
                key={i}
                Id={item.Id}
                name={item.name}
                price={item.price}
                rating={item.rating}
                image={item.image}
                category={item.category}
                description={item.description}
              />
            );
          } else {
            return null;
          }
        })}
      </PizzaContentWripper>

      <Promotion />
    </>
  );
};

export default Pizza;
