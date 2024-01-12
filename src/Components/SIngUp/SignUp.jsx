import React, { useState } from "react";
import Classes from "/src/Components/Login/LogIn.module.css";
import styled from "styled-components";
import SignUpButton from "../../Interface/SignUp_Button/SignUpButton";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Wripper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4% 2% 8% 2%",
});

const LoginWripper = styled.div({
  width: "350px",
  boxShadow: "2px 2px 3px 2px #34b96f",
  padding: "3% 1.5%",
  overflow: "hidden",
  cursor: "pointer",
});

const Title = styled.h1({
  padding: "6% 0px 0px 0px",
  textAlign: "center",
});

const Description = styled.p({
  padding: "1.4rem 2rem",
  textAlign: "center",
});

const ButtonWripper = styled.div({
  margin: "1rem 0px 1.7rem 0px",
});

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  return (
    <>
      <Wripper>
        <LoginWripper>
          <Title>Create Account</Title>
          <Description>
            Register your account and join our community!
          </Description>

          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className={Classes.label}>
                Name
              </label>
              <input
                type="text"
                className={Classes.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className={Classes.label}>
                Email
              </label>
              <input
                type="email"
                className={Classes.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className={Classes.label}>
                Phone
              </label>
              <input
                type="tel"
                className={Classes.input}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className={Classes.label}>
                Password
              </label>
              <input
                type="password"
                className={Classes.input}
                value={password}
                onChange={(e) => setPassword(e.target.password)}
                required
              />
            </div>

            <ButtonWripper>
              <SignUpButton />
            </ButtonWripper>
          </form>

          <p className={Classes.option}>Or sign Up using </p>

          <div className={Classes.icon_wripper}>
            <div className={Classes.icon_content}>
              <FaGoogle />
            </div>
            <div className={Classes.icon_content}>
              <FaFacebookF />
            </div>
            <div className={Classes.icon_content}>
              <FaTwitter />
            </div>
          </div>

          <p className={Classes.singUp_option}>
            Already have an account?{" "}
            <span>
              <Link to="/logIn">Sign In</Link>
            </span>
          </p>
        </LoginWripper>
      </Wripper>
    </>
  );
};

export default SignUp;
