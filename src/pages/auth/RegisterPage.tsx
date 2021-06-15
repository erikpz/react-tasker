import React from "react";
import { AuthLayout } from "./AuthLayout";
import { FormCover } from "./components/FormCover";
import { RegisterForm } from "./components/RegisterForm";

export const RegisterPage = () => {
  return (
    <AuthLayout>
      <FormCover />
      <RegisterForm />
    </AuthLayout>
  );
};
