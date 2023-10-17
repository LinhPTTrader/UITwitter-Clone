import { BellOutlined, CheckOutlined, EllipsisOutlined, FileTextOutlined, HomeOutlined, MessageOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'
import './menu.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Menu = () => {
    const navigate = useNavigate()
    const isAuthenticated = useSelector(state => state.asyncAuth.isAuthenticated)
    const verify = useSelector(state => state.asyncAuth.user?.verify)
    const HandleLinkProfile = () => {
        isAuthenticated ? navigate('/profile') : navigate('/login')
    }
    const HandleRouterHome = () => {
        navigate('/')
    }
    return (
        <div className='menu'>
            <ul>
                <li onClick={HandleRouterHome}> <HomeOutlined />Trang chủ</li>
                <li> <SearchOutlined />Khám phá</li>
                <li> <BellOutlined />Thông báo</li>
                <li> <MessageOutlined />Tin nhắn</li>
                <li><FileTextOutlined />Danh sách</li>
                <li ><CheckOutlined />{verify ? 'Đã xác nhận' : 'Chưa xác nhận'}</li>
                <li onClick={HandleLinkProfile}><UserOutlined />Hồ sơ</li>
                <li><EllipsisOutlined />Thêm</li>
            </ul>
        </div>

    )
}

export default Menu