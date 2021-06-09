import { useEffect, useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CurrentUserContext from './current-user.context';

const CurrentUserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.get().then((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [currentUser]);

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
