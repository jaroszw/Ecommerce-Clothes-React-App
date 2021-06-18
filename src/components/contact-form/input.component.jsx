import { useEffect, useState } from "react";

const CustomInput = (props) => {

    const {}
  return (
    <div>
      <input
        type="text"
        id="name"
        onChange={nameInputChangeHandler}
        value={enteredName}
        onBlur={nameInputBlurHandler}
      />
    </div>
  );
};

export default CustomInput;
