import React from "react";
import styled from "styled-components";

const PromotionContentWripper = styled.div`
  width: 340px;
  height: 35vh;
  background: red;
  border-radius: 10px;
  transition: 0.5s ease-in;
  cursor: pointer;
  over-flow: hidden;

  &:hover {
    transform: translateY(-20px);
  }
`;

const img = {
  width: "100%",
  height: "100%",
};

const PromotionContent = ({ image }) => {
  return (
    <>
      <PromotionContentWripper>
        <img src={image} alt="" style={img} />
      </PromotionContentWripper>
    </>
  );
};

export default PromotionContent;
