import React from "react";
import Classes from "/src/Components/BreadCrum/BreadCrum.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const BreadCrum = (props) => {
  const { product } = props;

  return (
    <>
      <div className={Classes.breadcrum}>
        <Link to="/home" className={Classes.link}>
          HOME
        </Link>
        <IoIosArrowForward />
        <Link to="/menu" className={Classes.link}>
          SHOP
        </Link>
        <IoIosArrowForward />
        <Link to="/menu" className={Classes.link}>
          {product.category}
        </Link>
        <IoIosArrowForward />
        <Link to="/menu" className={Classes.link}>
          {product.name}
        </Link>
      </div>
    </>
  );
};

export default BreadCrum;
