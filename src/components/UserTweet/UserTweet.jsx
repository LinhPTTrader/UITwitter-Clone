import React, { useEffect, useState } from 'react'
import NewFeed from '../NewFeed/NewFeed'
import { GetUserTweet } from '../../services/tweets.services';

const UserTweet = () => {
    const [listUserTweet, SetListUserTweet] = useState([]);

    useEffect(() => {
        GetUserTweet(20, 1)
            .then(res => {
                if (res && res.data) {
                    SetListUserTweet(res.data)
                }
            })
    }, [])
    return (
        <div className="Home">
            {listUserTweet.map((element, index) => (
                <NewFeed newFeed={element} key={'userTweet' + index} />
            ))}
        </div>
    )
}

export default UserTweet