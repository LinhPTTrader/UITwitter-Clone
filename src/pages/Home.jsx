import { useSelector } from "react-redux"
import NewFeed from "../components/NewFeed/NewFeed"
import './Home.css'
import Post from "../components/Post/Post"

const Home = () => {
    const listNewFeed = useSelector(state => state.newFeed.listNewFeed)
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