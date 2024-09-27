import { Link } from "react-router-dom";

const Announcement = () => {
    return (
        <>
            <div>
                <h4>Announcement title <Link to="/"><button>Read more</button></Link></h4>
            </div>
        </>
    )
}


export default Announcement;

// fetch the list of annnouncement available into the page