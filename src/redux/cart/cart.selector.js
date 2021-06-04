import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selecCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selecCartItems],

  (cartItems) =>
    cartItems.reduce((accumulatedQuantity, cartItem) => {
      return (accumulatedQuantity += cartItem.quantity);
    }, 0)
);
