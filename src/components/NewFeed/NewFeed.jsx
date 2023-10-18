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
import { LikeTweet, UnLikeTweet } from '../../services/user.services';
const { TextArea } = Input;
import { useSelector } from "react-redux"

const NewFeed = ({ newFeed }) => {
    const user_id = useSelector(state => state.asyncAuth.user?._id)
    const [colorLike, setColorLike] = useState('black')
    const [like, setLike] = useState(0)
    const Like = async (tweet_id) => {
        console.log(tweet_id)
        if (colorLike === 'black') {
            setColorLike('blue')
            setLike(1);
            await LikeTweet(tweet_id)


        } else {
            setColorLike('black')
            setLike(0)
            await UnLikeTweet(tweet_id)

        }
    }
    useEffect(() => {
        newFeed.like.some(like => like.user_id === user_id) ? setColorLike('blue') : setColorLike('black')
    }, [user_id])
    return (
        <>

            <div className='NewFeed'>
                <div className='NewFeed-Header'>
                    <div className='NewFeed-Header-Left'>
                        <div>
                            <Avatar size={64} icon={<UserOutlined />} />
                        </div>
                        <div>
                            <h4 className='NewFeed-Header-Username'>{newFeed.user.name}</h4>
                            <p>15 giờ</p>
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
                        <span> {newFeed.like_count + like} lượt thích </span>
                    </div>
                    <div>
                        <span>{newFeed.comment} Bình luận</span>
                    </div>
                </div>
                <div className='NewFeed-Content-Like'>
                    <div className='NewFeed-Like' style={{
                        color: colorLike
                    }} onClick={() => Like(newFeed._id)}>
                        < LikeOutlined />
                        <span> Thích </span>
                    </div>
                    <div className='NewFeed-Comment'>
                        <CommentOutlined />
                        <span> Bình Luận </span>
                    </div>
                </div>
                <div>
                    <TextArea rows={2} placeholder="Bình luận" maxLength={1000} />
                </div>
            </div >

        </>
    )
}

export default NewFeed