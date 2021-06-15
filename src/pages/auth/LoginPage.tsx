import React from 'react'
import { AuthLayout } from './AuthLayout'
import { FormCover } from './components/FormCover'
import { LoginForm } from './components/LoginForm'

export const LoginPage = () => {
    return (
        <AuthLayout>
            <LoginForm/>
            <FormCover/>
        </AuthLayout>
    )
}
