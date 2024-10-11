import { Link, useRouteError } from "react-router-dom";

const AnnouncementError = () => {
    const error = useRouteError()
    return (
        <>
            <div>
                <h3>Announcement not found</h3>
                <p>{error.message}, get back to <Link to={"/announcement"}>Announcement page</Link></p>
            </div>
        </>
    )
}

export default AnnouncementError;