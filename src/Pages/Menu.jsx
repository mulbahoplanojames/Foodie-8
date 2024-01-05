import React from "react";
import MenuHero from "../Components/Hero_Menu/MenuHero";
import Menus from "../Components/Menus/Menus";
import Testimonial from "../Components/Testimonial/Testimonial";
import Promotion from "../Components/Promotion/Promotion";

const Menu = () => {
  return (
    <>
      <MenuHero />
      <Menus />
      <Promotion />
      <Testimonial />
    </>
  );
};

export default Menu;
