import React from "react";
import popular_dishes from "../../Data/Popular_dishes";
import PopularDishesCard from "../PopularDisahes_Card/PopularDishesCard";
import styled from "styled-components";

const RelatedProductWripper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  flexWrap: "wrap",
  padding: "4% 1.2% 7% 1.2%",
});

const Title = styled.h1({
  paddingLeft: "5%",
  fontWeight: "400",
});

const RelatedProduct = () => {
  return (
    <>
      <Title>Related Products</Title>
      <RelatedProductWripper>
        {popular_dishes.map((item, i) => {
          return (
            <PopularDishesCard
              key={i}
              image={item.image}
              name={item.name}
              price={item.price}
              rating={item.rating}
            />
          );
        })}
      </RelatedProductWripper>
    </>
  );
};

export default RelatedProduct;
