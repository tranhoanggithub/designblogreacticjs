import "../../components/slidebar/slidebar.css"
import Slidebar from '../../components/slidebar/Slidebar'
import SinglePost from "../../components/singlePost/SinglePost"

export default function Single() {
    return (
        <>
        <div className="single">
            <SinglePost/>
            <Slidebar/>
        </div>

        </>
    )
}
