import { useState } from "react";

const AddBlog = () => {

    const [blogTitle, setBlogTitle] = useState("");
    const [blogDescription, setBlogDescription] = useState("");
    const [blogAuthor, setBlogAuthor] = useState("janeth nyagawa");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(true);

    return (
        <>
            <div className="bg-white">
                <form action="/add-blog">
                    <label htmlFor="blog-title" className="">Blog Title</label>
                    <input type="text" name="blog-title" id="blog-title" placeholder="Enter Blog Title" required autoFocus/>

                    <label htmlFor="blog-description">Blog Description Body Snippets</label>
                    <textarea name="" id="" cols="30" rows="10" required></textarea>

                    <label htmlFor="thumbnail">Thumbnail</label>
                    <input type="file" name="" id="" accept="image/*" required />

                    <label htmlFor="author">Author</label>
                    <select name="author" id="" required>
                        <option value="godbless nyagawa">Godbless Nyagawa</option>
                        <option value="janeth nyagawa">Janeth Nyagawa</option>
                    </select>

                    <button>Create Blog</button>
                </form>
            </div>
        </>
    )
}

export default AddBlog;