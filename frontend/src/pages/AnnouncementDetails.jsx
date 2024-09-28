import { useParams } from "react-router-dom";

const AnnouncementDetails = () => {
    const { announceid } = useParams()
    return (
        <>
            <div>
                <h3>{announceid}</h3>
            </div>
        </>
    )
}

export default AnnouncementDetails;