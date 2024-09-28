import { useParams } from "react-router-dom";
import Comment from "../components/Comment"

const BlogDetails = () => {
    const { title } = useParams()
    return (
        <>
            <div>
                <h3>blog title</h3>
                <p>blog post id ID: {title}</p>

                <Comment />
            </div>
        </>
    )
}

export default BlogDetails;