import {
  SET_USERDETAILS,
  TOGGLE_MODE,
  UNSET_USERDETAILS,
} from "../actions/userActions";
import { initialState } from "../UserContext";

export const userReducer = (
  state: InitialStateUserContext,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case SET_USERDETAILS:
      return {
        ...state,
        userDetails: {
          ...action.payload,
        },
      };
    case UNSET_USERDETAILS:
      return {
        ...state,
        userDetails: {
          ...initialState,
        },
      };
    case TOGGLE_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};
