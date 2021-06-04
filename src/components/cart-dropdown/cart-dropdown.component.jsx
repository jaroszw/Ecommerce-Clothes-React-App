import React from "react";
import "./cart-dropdown.styles.scss";

//Components
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

//Redux utils
import { connect } from "react-redux";
import { selecCartItems } from "../../redux/cart/cart.selector";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton inverted>Go to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selecCartItems(state),
  };
};

export default connect(mapStateToProps, null)(CartDropdown);
