import AuthorCard from "./AuthorCard"

function BlogCard() {
    return (
        <>
            <div>
                <h2>Blog Title</h2>
                <div className="auth-impression">
                    <AuthorCard />
                </div>
                <p>read count 2 min</p>
                <img src="" alt="blog thumbnail" className="blog thumbnail" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem quasi expedita aut minima assumenda provident, molestias veniam magni exercitationem nam recusandae magnam, corporis enim iusto sunt deleniti quisquam sapiente.</p>
            </div>
        </>
    )
}

export default BlogCard;