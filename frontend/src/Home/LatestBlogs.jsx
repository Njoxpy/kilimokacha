import BlogList from "../blog/pages/BlogList";

const LatestBlogs = () => {
    return(
        <>
        <div className="p-4">
            <h2 className="text-2xl text-center mt-4 pb-2">Latest blogs</h2>
            <BlogList />
        </div>
        </>
    )
}

export default LatestBlogs;