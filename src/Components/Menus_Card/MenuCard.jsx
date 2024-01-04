import React from "react";
import Classes from "/src/Components/Menus_Card/MenusCard.module.css";
import { FaCartPlus, FaDollarSign, FaStar } from "react-icons/fa";

const MenuCard = (props) => {
  const { name, price, image, rating, description } = props;

  return (
    <>
      <div className={Classes.menu_card_wripper}>
        <div className={Classes.image_wripper}>
          <img src={image} alt="Product Images" className={Classes.image} />
        </div>
        <div className={Classes.body}>
          <h2 className={Classes.title}>{name}</h2>
          <p className={Classes.description}>{description}</p>
          <p className={Classes.price}>
            <FaDollarSign /> <span>{price}</span>
          </p>
          <p className={Classes.rating}>
            <FaStar className={Classes.star_icon} />
            <FaStar className={Classes.star_icon} /> <span>{rating}</span>
          </p>
          <div className={Classes.cart_wripper}>
            <FaCartPlus className={Classes.cart_icon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
