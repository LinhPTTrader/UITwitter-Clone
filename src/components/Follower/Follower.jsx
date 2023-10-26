import { Button, message } from 'antd'
import React from 'react'
import { UnFollowerUser } from '../../services/user.services'

const Follower = ({ user_id }) => {
    const HandleFollowerUser = () => {
        UnFollowerUser(user_id)
            .then(res => {
                message.success(res.message)
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