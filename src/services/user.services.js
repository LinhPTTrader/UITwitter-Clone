import axios from '../utils/aixos-custimize';
import Cookies from 'js-cookie';


export const UserLogin = async ({ email, password }) => {
    return await axios.post('/users/login', { email, password }, { withCredentials: true })
}

export const UserRegister = async (user) => {
    return await axios.post('/users/register', user)
}

export const Logout = async () => {
    const refreshToken = Cookies.get('refreshToken');
    console.log(localStorage.getItem('accessToken'))
    const res = await axios.post('/users/logout', { refreshToken })
    if (res) {
        localStorage.removeItem('accessToken');
        Cookies.remove('refreshToken');
        return true
    }
    return false
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

export const VerifyEmail = async (token) => {
    return await axios.get('/user/verify-email')
}


export const GetNewFeed = async (limit, page) => {
    return await axios.get(`/tweets/newfeed?limit=${limit}&page=${page}`)
}

export const LikeTweet = async (tweet_id) => {
    console.log(tweet_id)
    return await axios.post(`/likes`, { tweet_id })
}


export const UnLikeTweet = async (tweet_id) => {
    console.log({ tweet_id })
    return await axios.post(`/likes/unlike`, { tweet_id })
}

export const CreatTweet = async (tweet) => {
    console.log(tweet)
    return await axios.post(`/tweets`, tweet)
}