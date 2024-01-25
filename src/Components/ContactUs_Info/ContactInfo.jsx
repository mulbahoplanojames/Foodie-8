import React from "react";
import styled from "styled-components";

const InfoWripper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  flexWrap: "wrap",
  padding: "3rem 1.3rem",
});

const InfoContent = styled.div({
  width: "300px",
  padding: "3rem 1.1rem",
  background: "red",
  borderRadius: "10px",
  boxShadow: "3px 2px 15px 2px lightgray",
});

const Title = styled.h1({
  fontSize: "2rem",
  paddingBottom: "1.1rem",
});

const ContactInfo = () => {
  return (
    <>
      <InfoWripper>
        <InfoContent>
          <Title>Contact Us</Title>
        </InfoContent>
      </InfoWripper>
    </>
  );
};

export default ContactInfo;
