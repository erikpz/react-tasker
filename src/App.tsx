import React, { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import { UserProvider } from "./contexts/UserContext";
import AuthRoot from "./pages/auth/components/AuthRoot";
import ThemeConfig from "./theme/ThemeConfig";

const App: FC = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <ThemeConfig>
          <Routes>
            <Route path="/auth/*" element={<AuthRoot />} />
            <PrivateRoutes path='/*' element={<p>HOME</p>}/>
            <Route path="/404" element={<p>404</p>} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </ThemeConfig>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
