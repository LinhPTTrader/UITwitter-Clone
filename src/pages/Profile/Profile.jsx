import './profile.css'
import { CalendarOutlined, GlobalOutlined, SnippetsOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Modal } from 'antd';
import { useSelector } from 'react-redux'
import moment from "moment";
import UserTweet from '../../components/UserTweet/UserTweet';
import { useState } from 'react';
import EditProfile from '../../components/EditProfile/EditProfile';
import AvatarUser from '../../components/AvatarUser/AvatarUser';
import CoverPhoto from '../../components/CoverPhotoUser/CoverPhotoUser';


const Profile = () => {
    const user = useSelector(state => state.asyncAuth.user);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className='Profile'>
                <div className='aa'>
                    <div className='Profile-Avatar'>
                        <div className='Profile-Avatar-User'>
                            <AvatarUser imageUser={user.avatar} />
                        </div>
                        <div>
                            <Button type="primary" onClick={showModal}>
                                Chỉnh sửa hồ sơ
                            </Button>
                            <Modal title="Chỉnh sửa thông tin" open={isModalOpen} footer={null} onOk={handleOk} onCancel={handleCancel}>
                                <EditProfile onOk={handleOk} />
                            </Modal>
                        </div>

                    </div>
                </div>
                <div className='Profile-Avatar-User'>
                    <CoverPhoto imageUser={user.cover_photo} />
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
                            <span>
                                {moment(user.date_of_birth).format("MMM Do YY")}
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
            <div>
                <UserTweet />
            </div>
        </>
    )
}

export default Profile