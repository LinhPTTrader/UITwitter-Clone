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
    const res = await fetch(`http://localhost:3000/users/logout`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // notice the Bearer before your token
        },
        body: JSON.stringify({ refreshToken })
    })
    const data = await res.json()
    if (data) {
        localStorage.removeItem('accessToken');
        Cookies.remove('refreshToken');
        return true
    }
    return false

}


export const FetchAccount = async () => {
    const refreshToken = Cookies.get('refreshToken')
    // return await axios.post('/users/fetch', { refreshToken })


    const res = await fetch(`http://localhost:3000/users/fetch`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // notice the Bearer before your token
        },
        body: JSON.stringify({ refreshToken })
    })
    const data = await res.json()
    return data
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

export const LikeTweet = async (tweet_id) => {
    const res = await fetch(`http://localhost:3000/likes`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // notice the Bearer before your token
        },
        body: JSON.stringify({ tweet_id })
    })
    const data = await res.json()
    return data
}


export const UnLikeTweet = async (tweet_id) => {

    const res = await fetch(`http://localhost:3000/likes/unlike`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // notice the Bearer before your token
        },
        body: JSON.stringify({ tweet_id })
    })
    const data = await res.json()
    return data
}


export const PostListImage = async (listImage) => {
    console.log(listImage)
    let bodyFormData = new FormData();
    bodyFormData.append('image', listImage);
    return await axios({
        method: 'post',
        url: '/medias/upload-image',
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    });;
}



export const EditUser = async (user) => {
    const res = await fetch(`http://localhost:3000/users/update-profile`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // notice the Bearer before your token
        },
        body: JSON.stringify(user)
    })
    const data = await res.json()
    return data
}


export const GetUserById = async (user_id) => {
    const res = await fetch(`http://localhost:3000/users/getuser/${user_id}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // notice the Bearer before your token
        },
    })
    const data = await res.json()
    return data
}

export const FollowerUser = async (follower_user_id) => {
    const res = await fetch(`http://localhost:3000/users/follower`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // notice the Bearer before your token
        },
        body: JSON.stringify({ follower_user_id })
    })
    const data = await res.json()
    return data
}
export const UnFollowerUser = async (follower_user_id) => {
    const res = await fetch(`http://localhost:3000/users/unfollower`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // notice the Bearer before your token
        },
        body: JSON.stringify({ follower_user_id })
    })
    const data = await res.json()
    return data
}

export const CheckFollower = async (follower_user_id) => {
    const res = await fetch(`http://localhost:3000/users/checkFollower`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // notice the Bearer before your token
        },
        body: JSON.stringify({ follower_user_id })
    })
    const data = await res.json()
    return data
}