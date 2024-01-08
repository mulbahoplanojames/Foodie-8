import React from "react";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SIngUp/SignUp";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <>
      <h1>Join Us Page</h1>
      <Login />
      <SignUp />
    </>
  );
};

export default JoinUs;
