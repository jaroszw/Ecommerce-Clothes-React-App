import React, { useContext } from "react";
import "./cart-dropdown.styles.scss";
import { withRouter } from "react-router-dom";

//Components
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../providers/cart/cart.provider";

const CartDropdown = ({ history }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        inverted
        onClick={() => {
          toggleHidden();
          history.push("/checkout");
        }}
      >
        Go to checkout
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
