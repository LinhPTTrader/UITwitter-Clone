import React, { useEffect, useState } from 'react'
import './ShowComment.css'
import { Avatar } from 'antd'
import {
    UserOutlined, LikeOutlined, CommentOutlined
} from '@ant-design/icons';
import { GetComment } from '../../services/tweets.services';
const ShowComment = ({ id }) => {
    const [listComment, SetListComment] = useState([])

    const HanldeShowComment = (id) => {
        GetComment(10, 1, id)
            .then(res => {
                // console.log(res)
                SetListComment(res.result)
            })
    }
    console.log('render')
    return (
        <div >
            <div className='NewFeed-Content-Like'>
                <div className='NewFeed-Like' >
                    < LikeOutlined />
                    <span> Thích </span>
                </div>

                <div className='NewFeed-Comment' onClick={() => HanldeShowComment(id)}>
                    <CommentOutlined />
                    <span> Bình Luận </span>
                </div>
            </div>
            {
                listComment.map((element, index) => (
                    <div className='showComent' key={"showcoment" + index}>

                        <div>
                            <Avatar src={element.user[0].avatar} size={48} icon={<UserOutlined />} />
                        </div>
                        <div>
                            <h4>{element.user[0].name}</h4>
                            <span>{element.content}</span>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default ShowComment