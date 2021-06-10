import React, { createContext, useState, useEffect } from "react";

import {
  filterItemFromCart,
  addItemToCart,
  removeItemFromCart,
  getCartItemsCount,
  getCartTotal,
} from "./cart.utils";

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
  cartTotal: 0,
});

const CartProvider = ({ children }) => {
  const [hidden, setTggleHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartTotal(getCartTotal(cartItems));
  }, [cartItems]);

  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) =>
    setCartItems(removeItemFromCart(cartItems, item));
  const toggleHidden = () => setTggleHidden(!hidden);
  const clearItemFromCart = (item) =>
    setCartItems(filterItemFromCart(cartItems, item));

  return (
    <CartContext.Provider
      value={{
        addItem,
        toggleHidden,
        hidden,
        cartItems,
        removeItem,
        cartItemsCount,
        clearItemFromCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
