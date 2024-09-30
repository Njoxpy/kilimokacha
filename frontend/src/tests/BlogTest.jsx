import { useState } from "react";

const BlogTest = () => {

    const [blogs, setBlogs] = useState([
        {name: "Njox", Age: 25},
        {name: "Liam", Age: 23},
        {name: "Mdudu", Age: 24}
    ])
    return(
        <>
        <div>
            {blogs.map((blogs) => (
                <div key={blogs.id}>
                    
                </div>
            ))}
        </div>
        </>
    )
}

export default BlogTest;