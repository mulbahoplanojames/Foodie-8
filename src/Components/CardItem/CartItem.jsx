import React, { useContext } from "react";
import Classes from "/src/Components/CardItem/CartItem.module.css";
import { ShopContext } from "../../Context/ShopContext";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { Link } from "react-router-dom";

const CartItem = () => {
  const { all_product, cardItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <>
      <div className={Classes.cardItems}>
        <div className={Classes.cardItem_format_main}>
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e, i) => {
          if (cardItems[e.id] > 0) {
            return (
              <div key={i}>
                <div
                  className={`${Classes.cardItems_format} ${Classes.cardItem_format_main}`}
                >
                  <img src={e.image} alt="" className={Classes.product_image} />
                  <p>{e.name}</p>
                  <p>{e.price}</p>
                  <button className={Classes.cardItem_quantity}>
                    {cardItems[e.id]}
                  </button>
                  <p>{e.price * cardItems[e.id]}</p>
                  <MdOutlineCancelPresentation
                    className={Classes.remove_icon}
                    onClick={() => removeFromCart(e.id)}
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        <div className={Classes.cartItems_down}>
          <div className={Classes.cardItems_total}>
            <h1>Total items </h1>
            <div>
              <div className={Classes.cartItems_total_item}>
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className={Classes.cartItems_total_item}>
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className={Classes.cartItems_total_item}>
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
              <Link to="">
                <button className={Classes.checkout_btn}>
                  Proceed to checkout
                </button>
              </Link>
            </div>
          </div>

          <div className={Classes.cartItems_promocode}>
            <p>If you have a promo code, Enter it here</p>
            <div className={Classes.cartItems_promobox}>
              <input
                type="text"
                placeholder="Promo code"
                className={Classes.input}
              />
              <button className={Classes.promo_btn}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
