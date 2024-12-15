import ErrorFetch from '../../components/ErrorFetch';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import useFetch from '../../hooks/useFetch';

const MarketInfo = () => {
    const { data: crops, loading, error } = useFetch("http://localhost:5000/api/v1/crops")

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <ErrorFetch />
    }
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold text-green-500 text-center mt-8">Market Information</h1>

                    <div className="mt-10">
                        <h2 className="text-2xl font-semibold text-gray-700">Latest Market Trends</h2>
                        <p className="mt-2 text-gray-600">
                            Stay updated with the latest market trends and prices for your crops.
                            Our data is sourced from reliable agricultural market reports and statistics.
                        </p>
                    </div>

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
                                    {crops.map((crop) => (
                                        <tr key={crop._id}>
                                            <td className="py-2 px-4 border">{crop.crop}</td>
                                            <td className="py-2 px-4 border">{crop.price}</td>
                                            <td className="py-2 px-4 border">{crop.location}</td>
                                            <td className={`py-2 px-4 border ${crop.supplyStatus === 'low stock' ? 'text-green-600' : 'text-red-600'}`}>
                                                {crop.supplyStatus === 'low stock' ? 'in stock' : 'out of stock'}
                                            </td>

                                        </tr>
                                    ))}
                                    <tr>
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
