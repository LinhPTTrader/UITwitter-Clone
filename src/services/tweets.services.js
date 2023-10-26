

export const GetNewFeedFetch = async (limit, page) => {
    const res = await fetch(`http://localhost:3000/tweets/newfeed?limit=${limit}&page=${page}`, {
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
    const res = await fetch(`http://localhost:3000/tweets`, {
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
    const res = await fetch(`http://localhost:3000/tweets/usertweet?limit=${limit}&page=${page}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // notice the Bearer before your token
        },
    })
    const data = await res.json()
    return data
}