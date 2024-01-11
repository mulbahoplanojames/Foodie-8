import React from "react";
import styled from "styled-components";
import LoginButton from "../../Interface/LogIn_Button/LoginButton";
import SignUpButton from "../../Interface/SignUp_Button/SignUpButton";
import Image from "/src/assets/Images/illu.jpg";
import { Link } from "react-router-dom";

const Wripper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4% 2% 8% 2%",
});

const OptionWripper = styled.div({
  width: "350px",
  boxShadow: "2px 2px 3px 2px #34b96f",
  textAlign: "center",
  padding: "3% 1.5%",
  overflow: "hidden",
  cursor: "pointer",
});

const ImageWripper = styled.div({
  width: "200px",
  height: "35vh",
  background: "gray",
  margin: "1% auto",
});

const Img = {
  width: "100%",
  height: "100%",
};

const Title = styled.h1({
  padding: "8% 0px 20% 0px",
});

const ButtonWripper = styled.div({
  margin: "5px 0px 2rem 0px",
});

const Skip = {
  textDecoration: "none",
  color: "#000",
};

const AccountOption = () => {
  return (
    <>
      <Wripper>
        <OptionWripper>
          <ImageWripper>
            <img src={Image} alt="Illustration" style={Img} />
          </ImageWripper>

          <Title>Curious Mind</Title>

          <ButtonWripper>
            <Link to="/signUp">
              <SignUpButton />
            </Link>
            <Link to="/login">
              <LoginButton />
            </Link>
          </ButtonWripper>

          <Link to="/home" style={Skip}>
            Skip for now
          </Link>
        </OptionWripper>
      </Wripper>
    </>
  );
};

export default AccountOption;
