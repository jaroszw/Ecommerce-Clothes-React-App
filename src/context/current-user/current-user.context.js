import { createContext } from "react";

const CurrentUserContext = createContext({ currentUser: "Seba", age: 100 });

export default CurrentUserContext;
