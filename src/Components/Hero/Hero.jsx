import Classes from "/src/Components/Hero/Hero.module.css";
import Order_Button from "../../Interface/Order_Now_Button/Order_Button";
import MoreMenuButton from "../../Interface/More_Menu_Button/MoreMenuButton";
import HeroImage from "/src/assets/hero2.jpg";
import Burger from "/src/assets/Images/Burgers/burger9.webp";
import Pizza from "/src/assets/Images/Pizza/pizza4.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className={Classes.hero}>
        <div className={Classes.hero_wripper}>
          <div className={Classes.hero_content}>
            <h1 className={Classes.title}>
              Your favorite food delivered hot and fresh
            </h1>
            <p className={Classes.description}>
              You can order here easy and <br /> simple.
            </p>
            <div className="btn_wripper">
              <Order_Button />
              <MoreMenuButton />
            </div>
          </div>
          <div className={`${Classes.hero_content} ${Classes.hero_content2}`}>
            <img src={HeroImage} className={Classes.img} />
          </div>

          <div className={Classes.food_amina1}>
            <img src={Pizza} alt="Pizza" className={Classes.image} />
          </div>
          <div className={Classes.food_amina2}>
            <img src={Burger} alt="Burger" className={Classes.image} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
