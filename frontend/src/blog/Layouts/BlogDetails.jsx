import { Outlet, useParams } from "react-router-dom";
import Subscribe from "../components/Subscribe";
import LatestBlogs from "../../Home/LatestBlogs"

const BlogDetails = () => {
    const { id } = useParams();
    return (
        <>
            <div>
                {id}
            </div>
            <div>
                <Subscribe />
                <LatestBlogs />
            </div>

            <Outlet />
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