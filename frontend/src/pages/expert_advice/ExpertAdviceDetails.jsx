import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import useFetch from "../../hooks/useFetch";

const ExpertAdviceDetails = () => {
    const { title } = useParams()

    const { data: advice, loading, error } = useFetch(`http://localhost:3003/advice/${title}`);

    const handleClick = () => {
        console.log("delete blog advice!");
        fetch(`http://localhost:3003/advice/${title}`, {
            method: 'DELETE'
        })
            .then(() => {
                Navigate("/")
            })
    }


    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-red-500 text-center">{error}</div>;

    return (
        <>
            <div className="p-4">
                {<div className="bg-white border border-gray-300 rounded-lg shadow-md p-4">
                    <img src={advice.image} alt={advice.title} className="w-full h-40 object-cover rounded-md" />
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-gray-800">{advice.title}</h3>
                        <p className="mt-2 text-gray-600">{advice.description}</p>
                        <button onClick={handleClick} className="p-2 bg-red-600 text-white rounded">Delete</button>
                    </div>
                </div>}
            </div>
            <Footer />
        </>
    )
}

export default ExpertAdviceDetails;