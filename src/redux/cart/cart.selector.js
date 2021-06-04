import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selecCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selecCartItems],

  (cartItems) => {
    console.log("REDUCE FUNCTION");
    return cartItems.reduce((accumulatedQuantity, cartItem) => {
      return (accumulatedQuantity += cartItem.quantity);
    }, 0);
  }
);
