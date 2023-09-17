import './profile.css'
import { CalendarOutlined, GlobalOutlined, SnippetsOutlined } from '@ant-design/icons'
const Profile = () => {
    return (
        <>
            <div className='Profile'>
                <div className='aa'>
                    <div className='Profile-Avatar'>
                        <img src="" alt="" />
                        <button>Chỉnh sửa hồ sơ</button>
                    </div>
                </div>
                <div>
                    <img className='Profile-Background' src="" alt="" />
                </div>
            </div>
            <div className='Profile2'>
                <div>
                    <h2>LinhPhan</h2>
                    <p>@LinhPhan</p>
                </div>
                <div>
                    <span>
                        Trader FX, Gaming, Nắm giữ $VET, $PYR, $MATIC, $WOO, $DYDX, $ETH, $BNB
                    </span>
                </div>
                <div>
                    <ul className='Profile-list-info'>
                        <li><SnippetsOutlined /> <span>Dịch vụ tài chính</span></li>
                        <li><GlobalOutlined /> <span>Việt Nam</span></li>
                        <li><CalendarOutlined /> <span>Tham gia tháng 7 năm 2020</span></li>
                    </ul>
                </div>
                <div className='Profile-flower'><span><b>169</b> Đang theo dõi</span><span><b>153</b> Người theo dõi</span></div>
            </div>
            <div className='Profile2-button'>
                <button>Bài đăng</button>
                <button>Các phản hồi</button>
                <button>Sự kiện nổi bật</button>
                <button>Phương tiện</button>
                <button>Lượt thích</button>
            </div>
        </>
    )
}

export default Profile