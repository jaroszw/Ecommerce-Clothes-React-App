import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...oterProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer></SpinnerContainer>
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...oterProps} />
    );
  };

export default WithSpinner;
