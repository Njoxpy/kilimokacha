import BlogCard from "../components/BlogCard";
import SearchBlogCategory from "../components/SearchBlogCategory"
import Footer from "../../components/Footer"
import BlogList from "../pages/BlogList";

const HomeBlog = () => {
    return (
        <>
            <div className="p-4">
                <div className="bloglist-center">
                    <SearchBlogCategory />
                    <BlogList />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default HomeBlog;
// into the hoem blog it should the list of blog avialable but it should be responsible in such a way that it should show the latest blogs createst each blog should have title, thumbnail image, description for blog snppet, author name and date written with impression for smal screen deevices and medium screen but for people which are viewing using the desktop it should show impression when auser tries to hover into specofoc blog article posted but after a time goes it is required to show the link to the blgo article exaclty