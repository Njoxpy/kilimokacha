import { useEffect, useState } from "react";

import Bilinganya from "../../assets/images/biringanya.jpg"
import { Link } from "react-router-dom";

const BlogList = () => {

    const URL = "http://localhost:3002/blogs";

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then((response) => {
                if (!response.ok) {
                    console.log("error");
                }
                return response.json()
            })
            .then((blogs) => {
                setBlogs(blogs)
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])

    return (
        <>
            <div className="">
               <Link>
               {blogs.map((blog) => (
                    <div key={blog.id} className="border-b border-green-100 p-4">
                        <div>
                            <div>
                                <img src={blog.thumbnail_image} alt="" className=""/>
                            </div>
                            <h2 className="text-2xl font-bold">{blog.blog_title}</h2>
                            <small className="text-gray-700 mt-2">{blog.author_name}</small>
                            <p className="text-gray-700 mb-4">
                                {blog.snippets}
                            </p>
                        </div>
                    </div>
                ))}
                </Link>
            </div>
        </>
    )
}

export default BlogList;