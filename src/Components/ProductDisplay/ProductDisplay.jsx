import React, { useContext } from "react";
import Classes from "/src/Components/ProductDisplay/ProductDsiplay.module.css";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import Product from "../Product_Main/Product";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <>
      <div className={Classes.product_display}>
        <div className={Classes.product_display_left}>
          <div className={Classes.product_display_image_list}>
            <div className={Classes.image_list_content}>
              <img
                src={product.image}
                alt="product Image"
                className={Classes.image}
              />
            </div>
            <div className={Classes.image_list_content}>
              <img
                src={product.image}
                alt="product Image"
                className={Classes.image}
              />
            </div>
            <div className={Classes.image_list_content}>
              <img
                src={product.image}
                alt="product Image"
                className={Classes.image}
              />
            </div>
          </div>
          <div className={Classes.product_display_main_image}>
            <img
              src={product.image}
              alt="product Image"
              className={Classes.image}
            />
          </div>
        </div>

        <div className={Classes.product_display_right}>
          <h1 className={Classes.product_name}>{product.name}</h1>
          <div className={Classes.rating_wripper}>
            <IoIosStar className={Classes.icon} />
            <IoIosStar className={Classes.icon} />
            <IoIosStar className={Classes.icon} />
            <IoIosStar className={Classes.icon} />
            <IoIosStarHalf className={Classes.icon} />
            <p>({product.rating})</p>
          </div>
          <h3 className={Classes.price}>$ {product.price}</h3>
          <p className={Classes.description}>{product.description}</p>
          <button
            className={Classes.btn}
            onClick={() => {
              addToCart(product.id);
            }}
          >
            Add to cart
          </button>
          <p className={Classes.category}>Category : {product.category} </p>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
