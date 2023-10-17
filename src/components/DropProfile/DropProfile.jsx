import {
    SettingOutlined,
    QuestionCircleOutlined,
    DesktopOutlined,
    CommentOutlined,
    LogoutOutlined,
    UserOutlined
} from "@ant-design/icons"
import './dropProfile.css'
import { Logout } from "../../services/user.services";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { ALERTTYPE } from "../../constants/alertType";
import { useDispatch } from "react-redux";
import { doLogout } from "../../stores/author/userAsyncSlice";
const DropProfile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const HandleClickLogout = () => {
        // console.log(localStorage.getItem('accessToken')) 
        Logout()
            .then(res => {
                if (res) {
                    dispatch(doLogout())
                    message.success(ALERTTYPE.LOGOUT_SUCCESS)
                    navigate('/login')
                }

            })
            .catch(err => console.log(err))
    }
    return (
        <div className="drop-profile-main">
            <div></div>
            <div className="drop-profile">
                <div className="drop-profile-content">
                    <div className="drop-profile-icon">
                        <UserOutlined />
                    </div>
                    <div>
                        <span>Trang cá nhân</span>
                    </div>
                </div>
                <div className="drop-profile-content">
                    <div className="drop-profile-icon">
                        <SettingOutlined />
                    </div>
                    <div>
                        <span>Cài đặt và quyền riêng tư</span>
                    </div>
                </div>
                <div className="drop-profile-content">
                    <div className="drop-profile-icon">
                        <QuestionCircleOutlined />
                    </div>
                    <div>
                        <span>Trợ giúp & hỗ trợ</span>
                    </div>
                </div>
                <div className="drop-profile-content">
                    <div className="drop-profile-icon">
                        <DesktopOutlined />
                    </div>
                    <div>
                        <span>Màn hình & trợ năng</span>
                    </div>
                </div>
                <div className="drop-profile-content">
                    <div className="drop-profile-icon">
                        <CommentOutlined />
                    </div>
                    <div>
                        <span>Đóng góp & ý kiến</span>
                    </div>
                </div>
                <div className="drop-profile-content" onClick={() => HandleClickLogout()}>
                    <div className="drop-profile-icon">
                        <LogoutOutlined />
                    </div>
                    <div>
                        <span>Đăng xuất</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropProfile