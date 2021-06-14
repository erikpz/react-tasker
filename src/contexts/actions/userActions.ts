export const SET_USERDETAILS = "SET_USERDETAILS";
export const UNSET_USERDETAILS = "UNSET_USERDETAILS";
export const TOGGLE_MODE = "TOGGLE_MODE"

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

export const toggleMode = (theme: 'light'|'dark') => {
  return {
    type: TOGGLE_MODE,
    payload: theme
  }
}