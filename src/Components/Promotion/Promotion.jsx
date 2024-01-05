import React from "react";
import styled from "styled-components";
import Promo1 from "/src/assets/Images/promo1.webp";
import Promo2 from "/src/assets/Images/promo2.webp";
import Promo3 from "/src/assets/Images/promo3.webp";
import PromotionContent from "./Promotion_Content/PromotionContent";
import { Link } from "react-router-dom";

const PromotionMain = styled.div({
  padding: "3% 1.5% 5% 1.5%",
});

const PromotionWripper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "50px",
});

const Promotion = () => {
  return (
    <>
      <PromotionMain>
        <PromotionWripper>
          <Link to="">
            <PromotionContent image={Promo1} />
          </Link>
          <Link to="">
            <PromotionContent image={Promo2} />
          </Link>
          <Link to="">
            <PromotionContent image={Promo3} />
          </Link>
        </PromotionWripper>
      </PromotionMain>
    </>
  );
};

export default Promotion;
