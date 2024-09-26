function AddBlog() {
    return (
        <>
            <div>
                <form action="/add-blog">
                    <label htmlFor="blog-title">Blog Title</label>
                    <input type="text" name="blog-title" id="blog-title" placeholder="Enter Blog Title" />

                    <label htmlFor="blog-description">Blog Description Body Snippets</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>

                    <label htmlFor="thumbnail">Thumbnail</label>
                    <input type="file" name="" id="" accept="image/*" />

                    <label htmlFor="author">Author</label>
                    <select name="author" id="">
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