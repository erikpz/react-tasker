import { SET_USERDETAILS, UNSET_USERDETAILS } from "../actions/userActions";
import { initialState } from "../UserContext";

export const userReducer = (
  state: InitialStateUserContext,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case SET_USERDETAILS:
      return {
        userDetails: {
          ...action.payload,
        },
      };
    case UNSET_USERDETAILS:
      return {
        userDetails: {
          ...initialState,
        },
      };
    default:
      return state;
  }
};
