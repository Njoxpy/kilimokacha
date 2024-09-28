import { useState } from "react";

const AddBlog = () => {

    const [blogTitle, setBlogTitle] = useState("");
    const [blogDescription, setBlogDescription] = useState("");
    const { thumbnailImage, setThumbnailImage } = useState(null);
    const [blogAuthor, setBlogAuthor] = useState("janeth nyagawa");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();

        setBlogTitle("");
        setBlogDescription("");
        setThumbnailImage(null);
        setBlogAuthor("");
    }

    return (
        <>
            <div className="bg-white">
                <form action="/add-blog" onSubmit={handleSubmit}>
                    <label htmlFor="blog-title" className="">Blog Title</label>
                    <input
                        type="text"
                        name="blog-title"
                        id="blog-title"
                        placeholder="Enter Blog Title"
                        value={blogTitle}
                        onChange={(event) => {
                            setBlogTitle(event.target.value)
                        }}
                        required
                        autoFocus
                         />

                    <label htmlFor="blog-description">Blog Description Body Snippets</label>
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        value={blogDescription}
                        onChange={(event) => {
                            setBlogDescription(event.target.value)
                        }}
                        required></textarea>

                    <label htmlFor="thumbnail">Thumbnail</label>
                    <input
                        type="file"
                        name=""
                        id=""
                        accept="image/*"
                        required
                        value={thumbnailImage}
                        onChange={(event) => {
                            setThumbnailImage(event.target.value)
                        }}
                    />

                    <label htmlFor="author">Author</label>
                    <select 
                    name="author" 
                    id="" 
                    value={blogAuthor} 
                    onChange={(event) => {
                        setBlogAuthor(event.target.value)
                    }}
                    required
                    >
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