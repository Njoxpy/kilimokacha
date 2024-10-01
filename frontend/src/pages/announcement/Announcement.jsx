import { Link } from "react-router-dom";
import Footer from "../../components/Footer"

const Announcement = () => {
    return (
        <>
            <div className="p-4">
                <div className="announce-1">
                    <h2>Shamla shamla za nane nane Sokoine...</h2>
                    <button><Link to="1">soma zaidi</Link></button>
                </div>
                <div className="announce-1">
                    <h2>Shamla shamla za nane nane Sokoine...</h2>
                    <button><Link to="2">soma zaidi</Link></button>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Announcement;