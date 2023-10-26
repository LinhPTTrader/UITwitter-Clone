

export const GetNewFeedFetch = async (limit, page) => {
    const res = await fetch(`https://lptrader.vn/tweets/newfeed?limit=${limit}&page=${page}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // notice the Bearer before your token
        },
    })
    const data = await res.json()
    return data
}

export const CreatTweet = async (tweet) => {
    console.log(tweet)
    const res = await fetch(`https://lptrader.vn/tweets`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // notice the Bearer before your token
        },
        body: JSON.stringify(tweet)
    })
    const data = await res.json()
    return data
}


export const GetUserTweet = async (limit, page) => {
    const res = await fetch(`https://lptrader.vn/tweets/usertweet?limit=${limit}&page=${page}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // notice the Bearer before your token
        },
    })
    const data = await res.json()
    return data
}


export const GetComment = async (limit, page, id) => {
    const res = await fetch(`https://lptrader.vn/tweets/gettweet-children/${id}/children?limit=${limit}&page=${page}&tweet_type=2`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // notice the Bearer before your token
        },
    })
    const data = await res.json()
    return data
}   