import AuthorCard from "./AuthorCard"
import Impression from "./Impression"
import Comment from "./Comment"

import Brocoli from "../../assets/images/brocoli.jpg"

function BlogCard() {
    return (
        <>
            <div>
                <h2>Blog Title</h2>
                <div className="auth-impression">
                    <AuthorCard /> 
                    <Impression />
                    <p>date article was written</p>
                </div>
                <p>read count 2 min</p>
                <img src={Brocoli} alt="blog thumbnail" className="blog thumbnail w-1/2" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem quasi expedita aut minima assumenda provident, molestias veniam magni exercitationem nam recusandae magnam, corporis enim iusto sunt deleniti quisquam sapiente.</p>
                <button>read more</button>
                <Comment />
            </div>
        </>
    )
}

export default BlogCard;