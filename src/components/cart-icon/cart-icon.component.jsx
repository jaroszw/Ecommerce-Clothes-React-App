import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

//Reducer utils
import { toggleCartHidden } from '../../redux/cart/cart-actions';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
