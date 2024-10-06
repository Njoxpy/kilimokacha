import { useParams } from "react-router-dom";
import Footer from "../../components/Footer"

const AnnouncementDetails = () => {
    const { announceId } = useParams()
    return (
        <>
            <div className="p-4">
                <h3>{announceId}</h3>
            </div>

            <Footer />
        </>
    )
}

export default AnnouncementDetails;