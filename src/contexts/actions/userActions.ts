export const SET_USERDETAILS = "SET_USERDETAILS";
export const UNSET_USERDETAILS = "UNSET_USERDETAILS";

export const setUser = (payload: UserDetailsContext) => {
  return {
    type: SET_USERDETAILS,
    payload,
  };
};

export const unsetUser = () => {
  return {
    type: UNSET_USERDETAILS,
    payload: {},
  };
};
