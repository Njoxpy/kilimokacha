
import Hero from "./Hero"
import LatestBlogs from "./LatestBlogs"
import Sponsors from "./Sponsors"
import Footer from "../components/Footer"
import ChatBot from "../pages/bot/ChatBot"

const Home = () => {
    return (
        <>
            <div>
                <Hero />
                <LatestBlogs />
                <Sponsors />
                <Footer />
                <ChatBot />
            </div>
        </>
    )
}

export default Home;