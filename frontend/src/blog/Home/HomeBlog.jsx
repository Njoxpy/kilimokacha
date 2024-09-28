import BlogCard from "../components/BlogCard";
import SearchBlogCategory from "../components/SearchBlogCategory"
import Footer from "../../components/Footer"

function HomeBlog() {
    return (
        <>
            <div>
                <SearchBlogCategory />
                <BlogCard />
            </div>

            <Footer />
        </>
    )
}

export default HomeBlog; 