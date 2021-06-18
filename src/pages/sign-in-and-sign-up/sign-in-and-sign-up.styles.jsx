import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 1100px) {
    width: 650px;
    flex-direction: column;
    align-items: center;
    margin: 100px auto;
  }

  @media screen and (max-width: 600px) {
    width: 350px;
    flex-direction: column;
    align-items: center;
  }
`;
