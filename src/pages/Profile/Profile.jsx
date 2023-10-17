import './profile.css'
import { CalendarOutlined, GlobalOutlined, SnippetsOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
const Profile = () => {
    const user = useSelector(state => state.asyncAuth.user);
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
                    <h2>{user.name}</h2>
                    <p>@{user.username}</p>
                </div>
                <div>
                    <span>
                        {user.bio}
                    </span>
                </div>
                <div>
                    <ul className='Profile-list-info'>
                        <li><SnippetsOutlined /> <span>{user.website}</span></li>
                        <li><GlobalOutlined /> <span>{user.location}</span></li>
                        <li><CalendarOutlined />
                            <span>{(new Date(user.created_at)).getDate() + '-' + (new Date(user.created_at)).getMonth() + '-' + (new Date(user.created_at)).getFullYear()}
                            </span></li>
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