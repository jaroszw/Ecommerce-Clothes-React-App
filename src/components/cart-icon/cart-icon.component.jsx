import React, { useContext } from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

//Reducer utils
import { toggleCartHidden } from "../../redux/cart/cart-actions";

//Selectors
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import { CartContext } from "../../providers/cart/cart.provider";

const CartIcon = ({ dispatch }) => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <div className="cart-icon">
      <ShoppingIcon
        className="shopping-icon"
        onClick={() => dispatch(toggleCartHidden())}
        onClick={toggleHidden}
      />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
