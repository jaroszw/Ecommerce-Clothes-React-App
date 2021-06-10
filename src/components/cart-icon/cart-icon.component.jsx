import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../../providers/cart/cart.provider";

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleHidden} />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
