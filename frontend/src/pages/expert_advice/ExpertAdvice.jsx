import React from 'react';
import Footer from '../../components/Footer';

const ExpertAdvice = () => {
    const adviceData = [
        {
            title: "Crop Rotation Benefits",
            image: "https://via.placeholder.com/150",
            description: "Crop rotation helps maintain soil fertility and reduces pests. It's essential for sustainable farming.",
        },
        {
            title: "Irrigation Techniques",
            image: "https://via.placeholder.com/150",
            description: "Understanding different irrigation techniques can greatly improve water efficiency on your farm.",
        },
        {
            title: "Pest Management Strategies",
            image: "https://via.placeholder.com/150",
            description: "Learn how to manage pests naturally to protect your crops without harming the environment.",
        },
        {
            title: "Soil Health Improvement",
            image: "https://via.placeholder.com/150",
            description: "Discover methods to enhance soil health, leading to better crop yields and sustainable practices.",
        },
        {
            title: "Sustainable Farming Practices",
            image: "https://via.placeholder.com/150",
            description: "Implement sustainable practices to ensure the longevity of your farm and the environment.",
        },
        {
            title: "Sustainable Farming Practices",
            image: "https://via.placeholder.com/150",
            description: "Implement sustainable practices to ensure the longevity of your farm and the environment.",
        }
    ];

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold text-green-500 text-center mt-8">Expert Advice</h1>
                    <p className="text-center mt-2 text-gray-600">
                        Explore valuable advice from agricultural experts to enhance your farming practices.
                    </p>

                    {/* Advice Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        {adviceData.map((advice, index) => (
                            <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-md p-4">
                                <img src={advice.image} alt={advice.title} className="w-full h-40 object-cover rounded-md" />
                                <div className="mt-4">
                                    <h3 className="text-xl font-semibold text-gray-800">{advice.title}</h3>
                                    <p className="mt-2 text-gray-600">{advice.description}</p>
                                    <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ExpertAdvice;
