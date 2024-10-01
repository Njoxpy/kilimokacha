import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";

const BlogAuthorDetails = () => {

    const { name } = useParams()
    return (
        <>
            <div className="p-4">
                <h3>Blog author info</h3>
                <p>blog author name: {name}</p>
                <p>display the list of blosg written by searched authors</p>
            </div>

            <div className="footer-mh">
                <Footer />
            </div>
        </>
    )
}

export default BlogAuthorDetails;

// http://localhost:3002/blogs/author/${njox}