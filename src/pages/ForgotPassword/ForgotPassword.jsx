import { useState } from 'react'
import { ForgotPasswordUser, ResetPassword } from '../../services/user.services'
import './ForgotPassword.css';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom'
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [isShow, setIsShow] = useState(true)
    const navigate = useNavigate()
    const handleForgotPassword = () => {
        ForgotPasswordUser(email)
            .then(res => {
                if (res && res.data) {
                    localStorage.setItem('forgot_password_token', res.data.token)
                    setIsShow(false)
                }
            })
            .catch(err => message.warning(err.response.data.message))
    }
    const handleResetPassword = () => {
        const token = localStorage.getItem('forgot_password_token')
        ResetPassword(newPassword, confirmNewPassword, token)
            .then(res => {
                message.success(res.data.message)
                localStorage.removeItem('forgot_password_token')
                navigate('/login')
            })
            .catch(err => message.warning(err.response.data.message))
    }
    return (
        <>
            {isShow && <div className='ForgotPassword'>
                <div className='ForgotPassword-content'>
                    <label>Nhập Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className='ForgotPassword-button'>
                    <button onClick={handleForgotPassword}>Lấy lại mật khẩu</button>
                </div>
            </div>}
            {!isShow && <div className='ForgotPassword'>
                <div className='ForgotPassword-content'>
                    <label>Nhập mật khẩu mới</label>
                    <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)}></input>
                    <label>Xác nhận mật khẩu</label>
                    <input value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)}></input>
                </div>
                <div className='ForgotPassword-button'>
                    <button onClick={handleResetPassword}>Thiết lập lại mật khẩu</button>
                </div>
            </div>}
        </>
    )
}

export default ForgotPassword