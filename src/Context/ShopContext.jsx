import { createContext, useState } from "react";
import all_product from "../Data/All_Product";
import CartItem from "../Components/CardItem/CartItem";

export const ShopContext = createContext(null);

//Getting the card and adding elements to the card
const getDefaultCard = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cardItems, setCardItems] = useState(getDefaultCard());

  // Function to add element to the card
  const addToCart = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cardItems);
  };

  // Function to remove element to the card
  const removeFromCart = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // a function for getting the total amount form the products added to cart
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const items in cardItems) {
      if (cardItems[items] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(items),
          (totalAmount += itemInfo.price * cardItems[items])
        );
      }
      return totalAmount;
    }
  };

  // getting the total item to update the cart
  const getTotalCartItem = () => {
    let totalItem = 0;
    for (const item in cardItems) {
      if (cardItems[item] > 0) {
        totalItem += cardItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    all_product,
    cardItems,
    getTotalCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };
  // console.log(cardItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
