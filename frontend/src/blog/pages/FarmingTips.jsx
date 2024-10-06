import { useEffect, useState } from "react";
import Footer from "../../components/Footer";

const FarmingTips = () => {

    const URL = "http://localhost:3002/blogs";
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((blogs) => {
                setBlogs(blogs);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-red-500 text-center">{error}</div>;

    return (
        <>
            <div className="p-4 bloglist-center">
                <h4>Farming Tips</h4>
            </div>
            <Footer />
        </>
    )
}

export default FarmingTips;