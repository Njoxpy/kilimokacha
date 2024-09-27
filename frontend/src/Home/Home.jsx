import Announcement from "./Announcement";
import Hero from "./Hero"
import LatestBlogs from "./LatestBlogs"
import Sponsors from "./Sponsors"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <>
            <div>
                <Announcement />
                <Hero />
                <LatestBlogs />
                <Sponsors />
                <Footer />
            </div>
        </>
    )
}

export default Home;