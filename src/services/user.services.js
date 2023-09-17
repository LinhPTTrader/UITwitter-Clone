import axios from '../utils/aixos-custimize';
import Cookies from 'js-cookie';


export const UserLogin = async ({ email, password }) => {
    return await axios.post('/users/login', { email, password }, { withCredentials: true })
}

export const UserRegister = async (user) => {
    return await axios.post('/users/register', user)
}

export const Logout = async (refreshToken) => {
    return await axios.post('/users/logout', { refreshToken })
}


export const FetchAccount = async () => {
    const refreshToken = Cookies.get('refreshToken')
    return await axios.post('/users/fetch', { refreshToken })
}
export const ForgotPasswordUser = async (email) => {
    return await axios.post('/users/forgot-password', { email })
}
export const ResetPassword = async (new_password, confirm_new_password, forgot_password_token) => {
    return await axios.post('/users/reset-password', { new_password, confirm_new_password, forgot_password_token })
}