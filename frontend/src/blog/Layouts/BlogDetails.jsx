import { useParams } from "react-router-dom";

function BlogDetails() {
    const { details } = useParams();
    return (
        <>
            <div>
                {details}
            </div>
        </>
    )
}


export default BlogDetails;

/*
blog details will contain the following things
- blog title
- blog description
- impression(likes, comments, share)
- blog author card(author name, date written)
 */