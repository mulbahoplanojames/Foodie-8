// Styles are in the Popular_Dishes/PopularDishes.module.css
import { Link } from "react-router-dom";
import Classes from "/src/Components/Popular_Dishes/PopularDishes.module.css";
import {
  FaStar,
  FaCartPlus,
  FaStarHalfAlt,
  FaDollarSign,
  FaHeart,
} from "react-icons/fa";

const PopularDishesCard = (props) => {
  const { name, price, rating, image } = props;

  return (
    <>
      <div className={Classes.popular_dishes_card_wripper}>
        <div className={Classes.head}>
          <Link to="/:menu">
            {" "}
            <img src={image} alt="Images" className={Classes.image} />
          </Link>
        </div>
        <div className={Classes.body}>
          <h2 className={Classes.product_name}>{name}</h2>
          <p className={Classes.price}>
            <FaDollarSign />
            {price}
          </p>
          <p className={Classes.rating}>
            <FaStar className={Classes.star} />
            <FaStarHalfAlt className={Classes.star} />
            <span className={Classes.rate}>{rating}</span>
          </p>
          <div className={Classes.cart_wripper}>
            <FaHeart className={Classes.cart} onClick={() => {}} />
          </div>
        </div>
        <h1></h1>
      </div>
    </>
  );
};

export default PopularDishesCard;
