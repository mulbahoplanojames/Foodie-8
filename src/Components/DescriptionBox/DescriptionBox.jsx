import React from "react";
import styled from "styled-components";

const Description_Box = styled.div({
  padding: "5%",
  // background: "gray",
});

const DescriptionBoxWripper = styled.div({
  display: "flex",
});

const DesRew = {
  border: "1px solid gray",
  padding: ".5% 3%",
};

const Description = styled.div({
  border: "1px solid gray",
  padding: "2% 4%",
});

const DescriptionBox = () => {
  return (
    <>
      <Description_Box>
        <DescriptionBoxWripper>
          <p style={DesRew}>Description</p>
          <p style={DesRew}>Reviews (122)</p>
        </DescriptionBoxWripper>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ipsam
          expedita et voluptates, ullam tempore modi quia quo cum id! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Magni facere
          reprehenderit, non provident aliquid voluptas corporis! Quidem,
          debitis dolor. Porro placeat repellat ex nihil, pariatur sed officia
          quidem illum. Officia accusamus dignissimos, quaerat quasi sequi
          provident ipsum ut, libero ullam doloribus optio doloremque voluptatem
          inventore quas architecto quidem nam impedit!
        </Description>
      </Description_Box>
    </>
  );
};

export default DescriptionBox;
