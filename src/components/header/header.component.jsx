//React utils
import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';

//Firebase utils
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

//Components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

//Redux utils
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

//Styled components
import {
  LogoContainer,
  HeaderContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden && <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

// const mapStateToProps = (state) => {
//   return {
//     currentUser: selectCurrentUser(state),
//     cartHidden: selectCartHidden(state),
//   };
// };

export default connect(mapStateToProps, null)(Header);
