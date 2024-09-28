import { useParams } from "react-router-dom";

const BlogAuthorDetails = () => {

    const {name} = useParams()
    return(
        <>
        <div>
            <h3>Blog author info</h3>
            <p>blog author name: {name}</p>
        </div>
        </>
    )
}

export default BlogAuthorDetails;