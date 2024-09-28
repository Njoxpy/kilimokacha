import { Link, useRouteError } from "react-router-dom";

const BlogAuthorError = () => {

    const error = useRouteError();

    return (
        <>
            <div>
                <h3>Author :) Not Found</h3>
                <p>{error.message}, return to <Link to={history.go(-1)}>back</Link> </p>
            </div>
        </>
    )
}

export default BlogAuthorError;