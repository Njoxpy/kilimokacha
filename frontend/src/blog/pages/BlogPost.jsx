import { Navigate, useParams } from "react-router-dom"
import Footer from "../../components/Footer";

import useFetch from '../../hooks/useFetch';

const BlogPost = () => {
    const { title } = useParams()

    const { data: blog, loading, error } = useFetch(`http://localhost:3002/blogs/${title}`)

    const handleClick = () => {
        console.log("hellow!");
        fetch(`http://localhost:3002/blogs/${title}`, {
            method: 'DELETE'
        })
            .then(() => {
                console.log("deleted");
            })
    }


    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-red-500 text-center">{error}</div>;
    return (
        <>
            <div className="p-4">
                <div>
                    <img src={blog.thumbnail_image} alt={blog.blog_title} className="w-full h-auto mb-2 rounded-lg" />
                    <h2 className="text-2xl font-bold">{blog.blog_title}</h2>
                    <small className="text-gray-700 mt-2 block">{blog.author_name}</small>
                    <p className="text-gray-700 mb-4">{blog.snippets}</p>

                    <button onClick={handleClick} className="p-2 bg-red-600 text-white rounded">Delete</button>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default BlogPost;