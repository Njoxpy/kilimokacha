import React from 'react';
import Footer from '../../components/Footer';

const MarketInfo = () => {
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
                                    <tr>
                                        <td className="py-2 px-4 border">Maize</td>
                                        <td className="py-2 px-4 border">$0.50</td>
                                        <td className="py-2 px-4 border">Dodoma</td>
                                        <td className="py-2 px-4 border text-green-600">In Stock</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="py-2 px-4 border">Rice</td>
                                        <td className="py-2 px-4 border">$1.00</td>
                                        <td className="py-2 px-4 border">Dar es Salaam</td>
                                        <td className="py-2 px-4 border text-red-600">Limited Supply</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border">Beans</td>
                                        <td className="py-2 px-4 border">$0.80</td>
                                        <td className="py-2 px-4 border">Arusha</td>
                                        <td className="py-2 px-4 border text-green-600">In Stock</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="py-2 px-4 border">Potatoes</td>
                                        <td className="py-2 px-4 border">$0.45</td>
                                        <td className="py-2 px-4 border">Mwanza</td>
                                        <td className="py-2 px-4 border text-green-600">In Stock</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border">Tomatoes</td>
                                        <td className="py-2 px-4 border">$0.90</td>
                                        <td className="py-2 px-4 border">Kigoma</td>
                                        <td className="py-2 px-4 border text-red-600">Out of Stock</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="py-2 px-4 border">Onions</td>
                                        <td className="py-2 px-4 border">$0.70</td>
                                        <td className="py-2 px-4 border">Tabora</td>
                                        <td className="py-2 px-4 border text-green-600">In Stock</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border">Carrots</td>
                                        <td className="py-2 px-4 border">$0.65</td>
                                        <td className="py-2 px-4 border">Moshi</td>
                                        <td className="py-2 px-4 border text-red-600">Limited Supply</td>
                                    </tr>
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
