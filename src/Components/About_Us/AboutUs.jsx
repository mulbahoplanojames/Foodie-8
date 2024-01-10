import React from "react";
import styled from "styled-components";
import Classes from "/src/Components/About_Us/ABoutUs.module.css";
import image from "/src/assets/Images/Burgers/burger2.webp";

const About = styled.div({
  padding: "6% 1.5%",
});

const AboutUsWripper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "40px",
});

const Description = " ";

const AboutUs = () => {
  return (
    <>
      <About>
        <AboutUsWripper>
          <div
            className={`${Classes.aboutUs_content_wripper} ${Classes.content1}`}
          >
            <img src={image} alt="Burger" className={Classes.img} />
          </div>
          <div className={Classes.aboutUs_content_wripper}>
            <h1 className={Classes.title}>About Us</h1>
            <p className={Classes.description}>
              We are a company engaged i the food field. We work closely with
              more then 500+ restaurant in West and East Africa. We are a
              company engaged in the food field with very wide range of through
              out Africa. <br /> <br /> We are a company engaged i the food
              field. We work closely with more then 500+ restaurant in West and
              East Africa. We are a company engaged in the food field with very
              wide range of through out Africa. <br /> <br /> We are a company
              engaged i the food field. We work closely with more then 500+
              restaurant in West and East Africa. We are a company engaged in
              the food field with very wide range of through out Africa.
            </p>
          </div>
        </AboutUsWripper>
      </About>
    </>
  );
};

export default AboutUs;
