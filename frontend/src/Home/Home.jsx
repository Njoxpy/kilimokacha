
import Hero from "./Hero"
import LatestBlogs from "./LatestBlogs"
import Sponsors from "./Sponsors"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <>
            <div>
                <Hero />
                <LatestBlogs />
                <Sponsors />
                <Footer />
            </div>
        </>
    )
}

export default Home;