import React, { useEffect, useState } from 'react'


import Follower from '../Follower/Follower'
import UnFollower from '../UnFollower/UnFollower'
import { useSelector } from 'react-redux'
import { CheckFollower } from '../../services/user.services'

const UserFollower = ({ user_id }) => {
    const [checkFollower, setCheckFollower] = useState(false)
    useEffect(() => {
        CheckFollower(user_id)
            .then(res => setCheckFollower(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {checkFollower ? <UnFollower user_id={user_id} setCheckFollower={setCheckFollower} /> : <Follower user_id={user_id} setCheckFollower={setCheckFollower} />

            }


        </div>
    )
}

export default UserFollower