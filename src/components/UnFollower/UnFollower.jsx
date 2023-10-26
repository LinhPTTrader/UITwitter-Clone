import { Button, message } from 'antd'
import React from 'react'
import { UnFollowerUser } from '../../services/user.services'

const UnFollower = ({ user_id, setCheckFollower }) => {
    const HandleFollowerUser = () => {
        UnFollowerUser(user_id)
            .then(res => {
                message.success(res.message)
                setCheckFollower(false)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <Button type="primary" onClick={() => HandleFollowerUser()}>
                Bỏ theo dõi
            </Button>
        </div>
    )
}

export default UnFollower