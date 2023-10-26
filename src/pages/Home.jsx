
import NewFeed from "../components/NewFeed/NewFeed"
import './Home.css'
import Post from "../components/Post/Post"
import { useEffect, useState } from "react"
import { GetNewFeedFetch } from "../services/tweets.services"
import { useSelector } from "react-redux"
const Home = () => {
    const [listNewFeed, SetListNewFeed] = useState([])
    const isFetchNewFeed = useSelector(state => state.fetchData.isFetchNewFeed)
    useEffect(() => {

        if (localStorage.getItem('accessToken')) {

            GetNewFeedFetch(20, 1)
                .then(res => {
                    // console.log(res)
                    if (res && res.data) {
                        SetListNewFeed(res.data)
                    }
                })
                .catch(err => console.log(err))
        }
    }, [isFetchNewFeed])
    console.log('home')
    return (
        <div>
            <div>
                <Post />
            </div>
            <div className="Home">
                {
                    listNewFeed.map((element, index) => (
                        <NewFeed newFeed={element} key={'newfeed' + element._id} />
                    ))
                }

            </div>
        </div>
    )
}

export default Home