import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../../components/Footer";

const BlogAuthorDetails = () => {
    const { id } = useParams();
    const author = useLoaderData(); // Fetches the data returned by the loader

    return (
        <>
            <div className="p-4">
                <h3>Blog Author Info</h3>
                <p>Blog author name: {author.author_name}</p>
                <p>blog title: {author.blog_title}</p>
                <p>Display the list of blogs written by the searched author.</p>
                <p>{author.snippets}</p>
                <p>{author.blog_category}</p>
            </div>

            <div className="footer-mh">
                <Footer />
            </div>
        </>
    );
};

export default BlogAuthorDetails;

export const authorDetailsLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch(`http://localhost:3002/blogs/author/${id}`);

    if (!res.ok) {
        throw new Response("Author not found", { status: 404 });
    }

    try {
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Response("Invalid JSON response", { status: 500 });
    }
};


// into this section, show the blog author profile image and the list of articles based on that author