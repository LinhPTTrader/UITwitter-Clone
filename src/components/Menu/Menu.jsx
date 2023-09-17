import { BellOutlined, CheckOutlined, EllipsisOutlined, FileTextOutlined, HomeOutlined, MessageOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'
import './menu.css'

const Menu = () => {
    return (
        <div className='menu'>
            <ul>
                <li> <HomeOutlined />Trang chủ</li>
                <li> <SearchOutlined />Khám phá</li>
                <li> <BellOutlined />Thông báo</li>
                <li> <MessageOutlined />Tin nhắn</li>
                <li><FileTextOutlined />Danh sách</li>
                <li><CheckOutlined />Đã xác nhận</li>
                <li> <UserOutlined />Hồ sơ</li>
                <li><EllipsisOutlined />Thêm</li>
            </ul>
        </div>

    )
}

export default Menu