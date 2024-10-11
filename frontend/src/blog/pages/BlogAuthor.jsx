import { Link, useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer";

const BlogAuthor = () => {

    const authors = useLoaderData()
    return (
        <>
            <div className="p-4">
                <h3>Blog Author Page</h3>
                <div>
                    {authors.map((author) => (
                        <Link key={author.id} to={`/blogs/author/${author.author_name}`}>
                            <div>
                                <p>Author Name: {author.author_name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default BlogAuthor;

export const authorsLoader = async () => {
    const res = await fetch("http://localhost:3002/blogs")

    if (!res.ok) {
        console.error("response not ok");
    }

    return res.json()
}