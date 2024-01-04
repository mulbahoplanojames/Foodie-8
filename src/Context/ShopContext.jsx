import { createContext, useState } from "react";
import all_product from "../Data/All_Product";

export const ShopContext = createContext(null);

const getDefaultCard = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cardItems, setCardItems] = useState(getDefaultCard());

  const addToCart = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cardItems);
  };

  const removeFromCart = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
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
    getTotalCartItem,
    all_product,
    cardItems,
    addToCart,
    removeFromCart,
  };
  // console.log(cardItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
