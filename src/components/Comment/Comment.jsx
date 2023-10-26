import TextArea from 'antd/es/input/TextArea'
import React, { useState } from 'react'
import { CreatTweet } from '../../services/tweets.services'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { fetchNewFeed } from '../../stores/author/fetchSlice'

const Comment = ({ parent_id }) => {
    const [comment, setComment] = useState('')
    const dispatch = useDispatch()
    const HandleSendComment = () => {
        const tweet = {
            type: 2,
            audience: 0,
            content: comment,
            hashtags: [],
            mentions: [],
            parent_id: parent_id,
            medias: []
        }
        CreatTweet(tweet)
            .then(res => {
                console.log(res)
                dispatch(fetchNewFeed())
                setComment('')
            })
            .catch(err => {
                console.log(err)
                message.error('Error')
            })


    }
    return (
        <>
            <TextArea value={comment} onChange={(e) => setComment(e.target.value)} rows={2} placeholder="Bình luận" maxLength={1000} />
            <button onClick={HandleSendComment}>Bình Luận</button>
        </>
    )
}

export default Comment