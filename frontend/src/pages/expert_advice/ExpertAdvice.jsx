import React from 'react';
import Footer from '../../components/Footer';

import useFetch from "../../hooks/useFetch"
import { Link } from 'react-router-dom';

const ExpertAdvice = () => {
    const { data: adviceData, loading, error } = useFetch("http://localhost:3003/advice")

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-red-500 text-center">{error}</div>;

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
                            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4" key={advice.id}>
                                <img src={advice.image} alt={advice.title} className="w-full h-40 object-cover rounded-md" />
                                <div className="mt-4">
                                    <h3 className="text-xl font-semibold text-gray-800">{advice.title}</h3>
                                    <p className="mt-2 text-gray-600">{advice.description}</p>
                                    <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200">
                                        <Link to={`/expert-advice/${advice.title}`} key={advice.title}>Read More</Link>
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
