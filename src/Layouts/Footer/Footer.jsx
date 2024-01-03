import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaInstagramSquare, FaFacebook, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const FooterWripper = styled.div({
  padding: "3% 1%",
  background: "#000",
});

const FooterContentWripper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  flexWrap: "wrap",
});

const FooterContent = styled.div({
  width: "280px",
  padding: "2% 1.5%",
});
const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 450;
  padding-bottom: 5%;
  color: #ffffff;

  &::after {
    content: "";
    width: 25%;
    height: 3px;
    display: block;
    background: #34b96f;
    margin-top: 3%;
  }
`;

const Description = styled.p({
  fontSize: "1.1rem",
  paddingBottom: "2%",
  lineHeight: "1.5rem",
  color: "#ffffff",
});

const FooterPageLinksWripper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "40px",
  padding: "1.3% 4%",
});

const PageLinkWripper = styled.div({
  width: "27rem",
});

const PageLinks = {
  display: "inline-block",
  padding: "0px 6% 0px 0px",
  textDecoration: "none",
  color: "#ffffff",
  fontSize: "1.2rem",
};

const IconLinksWripper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
});

const IconWripper = styled.div({
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  border: "3px solid #34b96f",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Icon = {
  fontSize: "1.4rem",
  color: "#fff",
  cursor: "pointer",
};

const Footer = () => {
  return (
    <>
      <FooterWripper>
        <FooterContentWripper>
          <FooterContent>
            <Title>Address</Title>
            <Description>490 8th KG</Description>
            <Description>Kigali Gisozi</Description>
            <Description>Rwande, East Africa</Description>
          </FooterContent>

          <FooterContent>
            <Title>Book a table</Title>
            <Description>
              We provide well sesson food rich in protein.
            </Description>
            <Description>(+250) - 791 - 676 - 207</Description>
          </FooterContent>

          <FooterContent>
            <Title>Opening Hour</Title>
            <Description>Monday - Friday</Description>
            <Description>9:00am - 10:00pm</Description>
            <Description>Healthy Food</Description>
          </FooterContent>

          <FooterContent>
            <Title>Food Menu</Title>
            <Description>
              <Link to="" style={{ textDecoration: "none", color: "#ffffff" }}>
                Our Menu
              </Link>
            </Description>
            <Description>
              <Link to="" style={{ textDecoration: "none", color: "#ffffff" }}>
                Popular Dishes
              </Link>
            </Description>
            <Description>
              <Link to="" style={{ textDecoration: "none", color: "#ffffff" }}>
                Join Us
              </Link>
            </Description>
          </FooterContent>
        </FooterContentWripper>
        <hr />

        <FooterPageLinksWripper>
          <PageLinkWripper>
            <a href="" style={PageLinks}>
              About
            </a>
            <a href="" style={PageLinks}>
              Menu
            </a>
            <a href="" style={PageLinks}>
              Order Now
            </a>
            <a href="" style={PageLinks}>
              Contact
            </a>
          </PageLinkWripper>

          <IconLinksWripper>
            <IconWripper>
              <FaInstagramSquare style={Icon} />
            </IconWripper>
            <IconWripper>
              <FaFacebook style={Icon} />
            </IconWripper>
            <IconWripper>
              <BsTwitterX style={Icon} />
            </IconWripper>
            <IconWripper>
              <FaYoutube style={Icon} />
            </IconWripper>
          </IconLinksWripper>
        </FooterPageLinksWripper>
      </FooterWripper>
    </>
  );
};

export default Footer;
