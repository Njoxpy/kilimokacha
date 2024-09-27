import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <div>
                <h3>Page not found</h3>
                <p>Sorry the page you were looking for was not found, return to <Link to="/">homepage</Link></p>
            </div>
        </>
    )
}

export default NotFound;

// include image for not found page