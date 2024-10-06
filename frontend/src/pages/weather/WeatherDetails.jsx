import { useParams } from "react-router-dom"
import Footer from "../../components/Footer";

const WeatherDetails = () => {

    const {location} = useParams();
    return(
        <>
        <div className="p-4">
            <h4>{location}</h4>
        </div>
        <Footer />
        </>
    )
}

export default WeatherDetails;