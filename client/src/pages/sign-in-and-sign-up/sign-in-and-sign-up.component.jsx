import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { SingContainer } from "./sign-in-and-sign-up.styles";

const SignInAndSignUpPage = () => (
  <SingContainer>
    <SignIn />
    <SignUp />
  </SingContainer>
);

export default SignInAndSignUpPage;