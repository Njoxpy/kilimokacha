import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AnnouncementForm = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call to save the announcement)

        // Example: Logging to console (replace with actual API call)
        console.log({ title, date, body });

        // Redirect to the announcements page after submission
        navigate("announcements");
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Add New Announcement</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1" htmlFor="title">Title:</label>
                    <input 
                        type="text" 
                        id="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        placeholder="Enter Announcement Title" 
                        className="border rounded w-full py-2 px-3" 
                        required 
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1" htmlFor="date">Date:</label>
                    <input 
                        type="date" 
                        id="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        className="border rounded w-full py-2 px-3" 
                        required 
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1" htmlFor="body">Body:</label>
                    <textarea 
                        id="body" 
                        value={body} 
                        onChange={(e) => setBody(e.target.value)} 
                        placeholder="Enter Announcement Details" 
                        className="border rounded w-full py-2 px-3 h-32" 
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
                        onClick={() => navigate("/announcements")}
                        className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition duration-300"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AnnouncementForm;
