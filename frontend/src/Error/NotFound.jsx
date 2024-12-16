import { Link } from "react-router-dom";

const NotFound = () => {

    return (
        <>
            <div className="p-4">
                <h1>Ooops!</h1>
                <p>Sorry, an expected error has occured.</p>
                <h3>Page not found</h3>
                <p>Sorry the page you were looking for was not found, return to <Link to="/">homepage</Link></p>
            </div>
        </>
    )
}

export default NotFound;

// include image for not found page