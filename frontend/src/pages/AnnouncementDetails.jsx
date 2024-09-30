import { useParams } from "react-router-dom";

const AnnouncementDetails = () => {
    const { announceId } = useParams()
    return (
        <>
            <div>
                <h3>{announceId}</h3>
            </div>
        </>
    )
}

export default AnnouncementDetails;