// import libraries
import Hero from "./Hero"
import LatestBlogs from "./LatestBlogs"
import Sponsors from "./Sponsors"
import Footer from "../components/Footer"
import ChatBot from "../pages/bot/ChatBot"
import Subscribe from "../blog/components/Subscribe"

const Home = () => {
    return (
        <>
            <div>
                <Hero />
                <LatestBlogs />
                <Sponsors />
                <Subscribe />
                <Footer />
                <ChatBot />
            </div>
        </>
    )
}

export default Home;