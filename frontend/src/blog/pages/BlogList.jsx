import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
    const URL = "http://localhost:3002/blogs";
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((blogs) => {
                setBlogs(blogs);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-red-500 text-center">{error}</div>;

    return (
        <div className="p-4">
            {blogs.map((blog) => (
                <Link key={blog.id} to={`/blogs/${blog.id}`} className="block border-b border-green-100 p-4 hover:bg-green-50 transition-colors duration-300">
                    <div>
                        <img src={blog.thumbnail_image} alt={blog.blog_title} className="w-full h-auto mb-2 rounded-lg" />
                        <h2 className="text-2xl font-bold">{blog.blog_title}</h2>
                        <small className="text-gray-700 mt-2 block">{blog.author_name}</small>
                        <p className="text-gray-700 mb-4">{blog.snippets}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default BlogList;

const blogsLoader = async () => {
    const res = await fetch("http://localhost:3002/blogs")

    return res.json()
}