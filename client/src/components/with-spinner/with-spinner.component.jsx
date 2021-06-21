import React from "react";
import Spinner from "../spinner/spinner.component";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...oterProps }) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...oterProps} />;
  };

export default WithSpinner;
