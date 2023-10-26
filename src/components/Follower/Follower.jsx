import { Button, message } from 'antd'
import React from 'react'
import { FollowerUser } from '../../services/user.services'

const Follower = ({ user_id, setCheckFollower }) => {
    const HandleFollowerUser = () => {
        FollowerUser(user_id)
            .then(res => {
                message.success(res.message)
                setCheckFollower(true)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <Button type="primary" onClick={() => HandleFollowerUser()}>
                Theo dõi
            </Button>
        </div>
    )
}

export default Follower