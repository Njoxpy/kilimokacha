// import libraries
import Hero from "./Hero"
import LatestBlogs from "./LatestBlogs"
import Footer from "../components/Footer"
import ChatBot from "../pages/bot/ChatBot"
import Subscribe from "../blog/components/Subscribe"
import NewSponsors from "./NewSponsor"

const Home = () => {
    return (
        <>
            <div>
                <Hero />
                <LatestBlogs />
                <NewSponsors />
                <Subscribe />
                <Footer />
                <ChatBot />
            </div>
        </>
    )
}

export default Home;