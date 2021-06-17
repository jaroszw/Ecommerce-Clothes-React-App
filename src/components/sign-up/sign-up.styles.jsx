import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 1100px) {
    margin-top: 130px;
  }

  .title {
    margin: 10px 0;
  }
`;
