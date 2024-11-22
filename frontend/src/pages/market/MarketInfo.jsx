import React from 'react';
import Footer from '../../components/Footer';
import useFetch from '../../hooks/useFetch';

const MarketInfo = () => {

    // create state for markets
    const URL = "http://localhost:5000/api/v1/market/crops"
    const { data: crops, loading, error } = useFetch(URL)

    if (loading) {
        <div className='text-yellow-600 text-center'>loading</div>
    }
    if (error) {
        <div>
            <p className="text-red-500 text-center">There was an error when fetching data..</p>
        </div>
    }
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold text-green-500 text-center mt-8">Market Information</h1>

                    {/* Market Data Section */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-semibold text-gray-700">Latest Market Trends</h2>
                        <p className="mt-2 text-gray-600">
                            Stay updated with the latest market trends and prices for your crops.
                            Our data is sourced from reliable agricultural market reports and statistics.
                        </p>
                    </div>

                    {/* Sample Market Data */}
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold text-gray-700">Current Prices</h2>
                        <div className="overflow-x-auto mt-4">
                            <table className="min-w-full bg-white border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="py-2 px-4 border text-left">Crop</th>
                                        <th className="py-2 px-4 border text-left">Price per Kg</th>
                                        <th className="py-2 px-4 border text-left">Market Location</th>
                                        <th className="py-2 px-4 border text-left">Supply Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {crops.map((crop, index) => (
                                        <tr key={crop._id}>
                                            <td className="py-2 px-4 border">{crop.crop}</td>
                                            <td className="py-2 px-4 border">{crop.price}</td>
                                            <td className="py-2 px-4 border">{crop.location}</td>
                                            <td className="py-2 px-4 border text-red-600">{crop.supplyStatus}</td>
                                            {/* 
                                            conditional rendering if in stock use  text-green-600
                                            limited supply text-red-600 = out of stock
                                            
                                            */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MarketInfo;
