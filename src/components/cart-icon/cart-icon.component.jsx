import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

//Reducer utils
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemsCount(state),
  };
};
// const mapStateToProps = (state) => {
//   console.log("WITHOUT RESELECT ITEM COUNT");
//   return {
//     itemCount: state.cart.cartItems.reduce((accumulatedQuantity, cartItem) => {
//       return (accumulatedQuantity += cartItem.quantity);
//     }, 0),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
