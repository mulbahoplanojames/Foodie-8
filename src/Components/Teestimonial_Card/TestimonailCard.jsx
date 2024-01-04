import React from "react";
import styled from "styled-components";

const TestimonailCardWripper = styled.div({
  width: "500px",
  padding: "10% 2% 2% 2%",
  boxShadow: "2px 2px 2px 2px #000",
  borderRadius: "10px",
  textAlign: "center",
  position: "relative",
  margin: "9% 10px 2% 10px",
});

const ImageWripper = styled.div({
  width: "100px",
  height: "100px",
  borderRadius: "50px",
  border: "4px solid #000",
  position: "absolute",
  top: "-50px",
  right: "200px",
  overflow: "hidden",
});

const ClientName = styled.h2({
  fontSize: "1.7rem",
  paddingBottom: "4%",
});

const Description = styled.p({
  lineHeight: "1.4rem",
  opacity: ".8",
});
const TestimonailCard = (props) => {
  const { Name, Clientimage, description } = props;

  return (
    <>
      <TestimonailCardWripper>
        <ImageWripper>{Clientimage}</ImageWripper>
        <ClientName>{Name}</ClientName>
        <Description>{description}</Description>
      </TestimonailCardWripper>
    </>
  );
};

export default TestimonailCard;
