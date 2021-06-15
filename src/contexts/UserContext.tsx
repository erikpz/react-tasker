import React, {
  createContext,
  Dispatch,
  FC,
  useReducer,
} from "react";
import { userReducer } from "./reducers/userReducer";

export const initialState: InitialStateUserContext = {
  themeMode: 'light',
  userDetails: {
    _id: "",
    name: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    profilePhotoUrl: "",
    createdAt: "",
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
