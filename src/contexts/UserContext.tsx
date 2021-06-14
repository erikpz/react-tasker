import React, {
  Children,
  createContext,
  Dispatch,
  FC,
  useReducer,
} from "react";
import { userReducer } from "./reducers/userReducer";

export const initialState: InitialStateUserContext = {
  userDetails: {
    id: "",
    name: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    profilePhotoUrl: "",
  },
};

export const UserContext = createContext<{
  state: InitialStateUserContext;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const UserProvider: FC<{ children: any }> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
