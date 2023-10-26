import React, { useEffect } from 'react'
import { CalendarOutlined, GlobalOutlined, SnippetsOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd';

import moment from "moment";

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetUserById } from '../../services/user.services';
import Follower from '../../components/Follower/Follower';
import UnFollower from '../../components/UnFollower/UnFollower';



const ProfileUsers = () => {
    const [user, SetUSer] = useState([])

    const { user_id } = useParams();
    useEffect(() => {
        GetUserById(user_id)
            .then(res => {
                if (res && res.data) {
                    SetUSer(res.data)
                }
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <div className='Profile'>
                <div className='aa'>
                    <div className='Profile-Avatar'>
                        <div>
                            <Avatar src={user.avatar} size={100} icon={<UserOutlined />} />
                        </div>
                        <div>
                            <Follower user_id={user_id} />
                            <UnFollower user_id={user_id} />
                        </div>

                    </div>
                </div>
                <div>
                    <img className='Profile-Background' src={user.cover_photo} alt="" />
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
            {/* <div>
                <UserTweet />
            </div> */}
        </>
    )
}

export default ProfileUsers