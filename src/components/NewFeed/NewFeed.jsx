import React, { useEffect, useState } from 'react'
import {
    CloseOutlined,
    CommentOutlined,
    EllipsisOutlined,
    LikeOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Avatar, Input } from 'antd';
import { Image } from 'antd';
import './NewFeed.css'
import { useSelector } from "react-redux"

import moment from "moment";
import { useNavigate } from 'react-router-dom';
import Comment from '../Comment/Comment';
import ShowComment from '../ShowComment/ShowComment';

const NewFeed = ({ newFeed }) => {
    const user_id = useSelector(state => state.asyncAuth.user?._id)
    const timeAgo = moment(newFeed.created_at).fromNow();
    const navigate = useNavigate()

    const HandleProfileUser = (id) => {
        if (user_id === id) {
            navigate(`/profile`)
        } else {
            navigate(`/profile/${id}`)
        }
    }
    return (
        <>
            <div className='NewFeed'>
                <div className='NewFeed-Header'>
                    <div className='NewFeed-Header-Left' onClick={() => HandleProfileUser(newFeed.user_id)}>
                        <div>
                            <Avatar src={newFeed?.user?.avatar} size={64} icon={<UserOutlined />} />
                        </div>
                        <div>
                            <h4 className='NewFeed-Header-Username'>{newFeed?.user?.name}</h4>
                            <p>{timeAgo}</p>
                        </div>
                    </div>
                    <div className='NewFeed-Header-Right'>
                        <div style={{ cursor: 'pointer' }}>
                            <EllipsisOutlined />
                        </div>
                        <div style={{ cursor: 'pointer' }}>
                            <CloseOutlined />
                        </div>
                    </div>
                </div>
                <div className='NewFeed-Content'>
                    <p>{newFeed.content}</p>
                </div>
                <div className='NewFeed-Image'>
                    {
                        newFeed.medias.map((element, index) => (
                            <div key={index}>
                                <Image
                                    src={element.url}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className='NewFeed-Content-LikeCom'>
                    <div>
                        <LikeOutlined />
                        <span> {newFeed.like_count} lượt thích </span>
                    </div>
                    <div>
                        <span>{newFeed.comment} Bình luận</span>
                    </div>
                </div>
                <div>
                    <div>
                        < ShowComment id={newFeed._id} />
                    </div>
                    <div>
                        <Comment parent_id={newFeed._id} />
                    </div>
                </div>
            </div >

        </>
    )
}

export default NewFeed