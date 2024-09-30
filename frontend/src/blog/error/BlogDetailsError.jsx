import { useRouteError } from "react-router-dom";

const BlogDetailsError = () => {
    const error = useRouteError();

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen p-4 bg-white">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Not Found</h3>
                <p className="text-gray-700 mb-6">{error.message}</p>
                <p className="text-gray-600">Please check the URL or try again later.</p>
            </div>
        </>
    );
};

export default BlogDetailsError;
