import { useParams } from "react-router-dom"
import Footer from "../../components/Footer";

const WeatherDetails = () => {

    const {location} = useParams();
    return(
        <>
        <div>
            <h4>{location}</h4>
        </div>
        <Footer />
        </>
    )
}

export default WeatherDetails;