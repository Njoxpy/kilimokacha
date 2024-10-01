import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";

const ExpertAdviceDetails = () => {
    const { id } = useParams()
    return (
        <>
            <div>
                <h3>{id}</h3>
            </div>
            <Footer />
        </>
    )
}

export default ExpertAdviceDetails;