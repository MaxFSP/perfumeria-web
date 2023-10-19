import { createContext } from "react";
import { User } from "./interfaces/APIResponseTypes";

const LoggedUserContext = createContext<
  [User | null, (loggedUser: User | null) => void]
>([
  {
    userId: 1,
    name: "",
    password: "",
    permission: 0,
  },
  () => {},
]);

export default LoggedUserContext;
