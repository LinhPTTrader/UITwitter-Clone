import { useSelector } from "react-redux"
import NewFeed from "../components/NewFeed/NewFeed"
import './Home.css'
import Post from "../components/Post/Post"
import { useEffect, useState } from "react"
import { GetNewFeed } from "../services/user.services"

const Home = () => {
    // const listNewFeed = useSelector(state => state.newFeed.listNewFeed)
    const user = useSelector(state => state.asyncAuth.user)
    const [listNewFeed, SetListNewFeed] = useState([])
    useEffect(() => {
        GetNewFeed(20, 1)
            .then(res => {
                if (res && res.status === 200) {
                    SetListNewFeed(res.data)
                }
            })
            .catch(err => console.loog(err))

    }, [user])
    return (
        <div>
            <div>
                <Post />
            </div>
            <div className="Home">
                {
                    listNewFeed.map((element, index) => (
                        <NewFeed newFeed={element} key={'newfeed' + index} />
                    ))
                }

            </div>
        </div>
    )
}

export default Home