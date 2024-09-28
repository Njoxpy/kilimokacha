import { Link, useRouteError } from "react-router-dom";

const WeatherError = () => {
    const error = useRouteError()
    return(
        <>
        <div>
            <h3>LOcation not found</h3>
            <p>{error.message}, return to <Link to="/weather">weather section</Link></p>
        </div>
        </>
    )
}

export default WeatherError;