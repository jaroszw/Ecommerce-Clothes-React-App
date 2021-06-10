//React utils
import React, { useContext } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";

//Firebase utils
import { auth } from "../../firebase/firebase.utils";

//Components
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

//Styled components
import {
  LogoContainer,
  HeaderContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

import CurrentUserContext from "../../context/current-user/current-user.context";
import { CartContext } from "../../providers/cart/cart.provider";

const Header = () => {
  const { hidden } = useContext(CartContext);
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>

        <CurrentUserContext.Consumer>
          {(currentUser) => {
            return currentUser ? (
              <OptionLink as="div" onClick={() => auth.signOut()}>
                SIGN OUT
              </OptionLink>
            ) : (
              <OptionLink to="/signin">SIGN IN</OptionLink>
            );
          }}
        </CurrentUserContext.Consumer>
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
