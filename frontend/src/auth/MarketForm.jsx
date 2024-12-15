import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer"

const MarketForm = () => {
    const [crop, setCrop] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("")
    const [supplyStatus, setSupplyStatus] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call to save the announcement)

        // Example: Logging to console (replace with actual API call)
        console.log({ crop, price, location, supplyStatus });

        // Redirect to the announcements page after submission
        navigate("/");
    };

    return (
        <>
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Add New Announcement</h2>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1" htmlFor="title">Crop:</label>
                        <input
                            type="text"
                            id="title"
                            value={crop}
                            onChange={(e) => setCrop(e.target.value)}
                            placeholder="Enter Crop"
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1" htmlFor="body">Price:</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Enter Crop Price"
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1" htmlFor="body">Location:</label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Enter Crop Location"
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1" htmlFor="body">Supply Status:</label>
                        <input
                            type="text"
                            id="supplyStatus"
                            value={supplyStatus}
                            onChange={(e) => setSupplyStatus(e.target.value)}
                            placeholder="Enter Crop Supply Status"
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                            required
                        />
                    </div>



                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition duration-300"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate("/")}
                            className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition duration-300"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default MarketForm;


/*
- styling the select and option
 */