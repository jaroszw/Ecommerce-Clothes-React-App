import { useEffect, useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CurrentUserContext from "./current-user.context";

const CurrentUserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({
    name: "Wojtek",
    age: 40,
  });

  const currentUserContext = {
    currentUser: currentUser,
  };

  return (
    <CurrentUserContext.Provider value={currentUserContext}>
      {props.children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
