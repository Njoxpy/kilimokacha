import { useParams } from "react-router-dom"
import Footer from "../../components/Footer";

const BlogPost = () => {
    const { id } = useParams()
    return (
        <>
            <div className="p-4">
                <h1>blog post title</h1>
                <p>content for blog post ID: {id}</p>
            </div>
            
            <Footer />
        </>
    )
}

export default BlogPost;