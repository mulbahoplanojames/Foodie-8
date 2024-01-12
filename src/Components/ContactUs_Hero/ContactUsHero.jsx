import React from "react";
import styled from "styled-components";

const ContactUsHero_Wripper = styled.div({
  padding: "0px ",
});

const ContactWripper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(src/assets/Images/contact.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 10% 3%;
  margin-bottom: 2rem;
`;

const Title = styled.h1({
  fontSize: "4rem",
  fontWeight: "550",
  textTransform: "captilize",
  wordSpacing: "7px",
  color: "#fff",
});

const ContactUsHero = () => {
  return (
    <>
      <ContactUsHero_Wripper>
        <ContactWripper>
          <Title>Contact</Title>
        </ContactWripper>
      </ContactUsHero_Wripper>
    </>
  );
};

export default ContactUsHero;
