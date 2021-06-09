import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

//Reducer utils
import { toggleCartHidden } from '../../redux/cart/cart.actions';

//Selectors
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();
  return (
    <div className="cart-icon">
      <ShoppingIcon
        className="shopping-icon"
        onClick={() => dispatch(toggleCartHidden())}
      />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
