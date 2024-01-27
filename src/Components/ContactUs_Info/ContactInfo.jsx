import React from "react";
import styled from "styled-components";
import CardOne from "../ContactInfo_Cards/CardOne";
import CardTwo from "../ContactInfo_Cards/CardTwo";
import CardThree from "../ContactInfo_Cards/CardThree";

const InfoWripper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  flexWrap: "wrap",
  padding: "3rem 1.3rem",
});

const ContactInfo = () => {
  return (
    <>
      <InfoWripper>
        <CardOne></CardOne>
        <CardTwo></CardTwo>
        <CardThree></CardThree>
      </InfoWripper>
    </>
  );
};

export default ContactInfo;
