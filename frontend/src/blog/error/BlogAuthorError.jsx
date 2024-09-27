import { useRouteError } from "react-router-dom";

const BlogAuthorError = () => {

    const error = useRouteError();

    return (
        <>
            <div>
                <h3>Author :) Not Found</h3>
                <p>{error.message}</p>
            </div>
        </>
    )
}

export default BlogAuthorError;