import React, { useState } from "react";
import styled from "styled-components";
import Classes from "/src/Components/Login/LogIn.module.css";
import LoginButton from "../../Interface/LogIn_Button/LoginButton";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Log in was successful, Welcome back",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  return (
    <>
      <Wripper>
        <LoginWripper>
          <Title>Log In</Title>
          <Description>Welcome back, we missed you!</Description>

          <form action="" onSubmit={handleSubmit}>
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
              <label htmlFor="email" className={Classes.label}>
                Password
              </label>
              <input
                type="password"
                className={Classes.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <ButtonWripper>
              <LoginButton />
            </ButtonWripper>
          </form>

          <p className={Classes.option}>Or Log In using </p>

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
            Haven't signUp up yet?{" "}
            <span>
              <Link to="/signUp">Sign Up</Link>
            </span>
          </p>
        </LoginWripper>
      </Wripper>
    </>
  );
};

export default Login;
