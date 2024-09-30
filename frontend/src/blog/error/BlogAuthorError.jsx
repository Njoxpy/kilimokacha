import { Link, useRouteError, useNavigate } from "react-router-dom";

const BlogAuthorError = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <>
            <div className="p-4 text-center">
                <h3 className="text-2xl font-bold mb-4 text-red-600">Author Not Found</h3>
                <p className="mb-2 text-gray-600">
                    {error.message}
                </p>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300 ease-in-out"
                >
                    Go Back
                </button>
            </div>
        </>
    );
}

export default BlogAuthorError;
