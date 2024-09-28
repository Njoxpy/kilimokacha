import { useEffect, useState } from "react";

const Fetch = () => {
    const URL = "http://localhost:3000/blogs";

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch(URL)
            .then(response => {
                if (!response.ok) {
                    console.error("connection error");
                }
                return response.json()
            })
            .then((blogs) => setBlogs(blogs))
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <>
            <div>
                {blogs.map((blog) => 
                    <div key={blog.id} className="p-3">
                        <div>
                            <img src={blog.thumbnail_image} alt="" />
                            <div>
                                <h2>{blog.blog_title}</h2>
                                <div>
                                    <h5>{blog.author_name}</h5>
                                    <p>{blog.date_written}</p>
                                </div>
                                <div className="blog-body">
                                    <h4>{blog.read_time_count} Minutes</h4>
                                    <p>{blog.snippets}</p>
                                    <div>
                                        <b>{blog.likes}</b>
                                        <b>{blog.comments}</b>
                                        <b>{blog.shares}</b>
                                    </div>
                                    <h5>{blog.blog_category}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Fetch;