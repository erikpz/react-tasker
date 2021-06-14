/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext } from "react";
import { toggleMode } from "../contexts/actions/userActions";
import { UserContext } from "../contexts/UserContext";

function useSettings() {
  const usrContext = useContext(UserContext);
  const isLight = usrContext.state.themeMode === "light";

  const handleToggleTheme = useCallback(
    () => usrContext.dispatch(toggleMode(usrContext.state.themeMode)),
    [usrContext.dispatch, isLight]
  );

  const handleChangeTheme = useCallback(
    (event) => usrContext.dispatch(toggleMode(event.target.value)),
    [usrContext.dispatch]
  );

  return {
    // Mode
    themeMode: usrContext.state.themeMode,
    toggleMode: handleToggleTheme,
    selectMode: handleChangeTheme,
  };
}

export default useSettings;
