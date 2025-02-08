import { Link } from "react-router-dom";

const MarketInfo = () => {
  // Hardcoded market data
  const marketData = [
    {
      _id: "679b99eebb962821d53c4caf",
      crop: "maharage",
      price: 45000,
      location: "njombe",
      supplyStatus: "low-stock",
      createdAt: "2025-01-30T15:25:34.087Z",
      updatedAt: "2025-01-30T15:25:34.087Z",
      __v: 0,
    },
    {
      _id: "679b99eebb962821d53c4cb0",
      crop: "mahindi",
      price: 35000,
      location: "iringa",
      supplyStatus: "instock",
      createdAt: "2025-01-30T15:25:34.087Z",
      updatedAt: "2025-01-30T15:25:34.087Z",
      __v: 0,
    },
    {
      _id: "679b99eebb962821d53c4cb1",
      crop: "ngano",
      price: 60000,
      location: "arusha",
      supplyStatus: "instock",
      createdAt: "2025-01-30T16:10:20.500Z",
      updatedAt: "2025-01-30T16:10:20.500Z",
      __v: 0,
    },
    {
      _id: "679b99eebb962821d53c4cb2",
      crop: "mtama",
      price: 28000,
      location: "dodoma",
      supplyStatus: "outofstock",
      createdAt: "2025-01-30T17:05:12.300Z",
      updatedAt: "2025-01-30T17:05:12.300Z",
      __v: 0,
    },
    {
      _id: "679b99eebb962821d53c4cb3",
      crop: "ulezi",
      price: 32000,
      location: "morogoro",
      supplyStatus: "low-stock",
      createdAt: "2025-01-30T18:15:44.210Z",
      updatedAt: "2025-01-30T18:15:44.210Z",
      __v: 0,
    },
    {
      _id: "679b99eebb962821d53c4cb4",
      crop: "mpunga",
      price: 50000,
      location: "mbeya",
      supplyStatus: "instock",
      createdAt: "2025-01-30T19:45:30.180Z",
      updatedAt: "2025-01-30T19:45:30.180Z",
      __v: 0,
    },
    {
      _id: "679b99eebb962821d53c4cb5",
      crop: "karoti",
      price: 70000,
      location: "arusha",
      supplyStatus: "instock",
      createdAt: "2025-01-30T20:05:55.500Z",
      updatedAt: "2025-01-30T20:05:55.500Z",
      __v: 0,
    },
    {
      _id: "679b99eebb962821d53c4cb6",
      crop: "vitunguu",
      price: 40000,
      location: "singida",
      supplyStatus: "low-stock",
      createdAt: "2025-01-30T21:20:11.600Z",
      updatedAt: "2025-01-30T21:20:11.600Z",
      __v: 0,
    },
    {
      _id: "679b99eebb962821d53c4cb7",
      crop: "viazi",
      price: 25000,
      location: "mbeya",
      supplyStatus: "instock",
      createdAt: "2025-01-30T22:10:40.700Z",
      updatedAt: "2025-01-30T22:10:40.700Z",
      __v: 0,
    },
    {
      _id: "679b99eebb962821d53c4cb8",
      crop: "parachichi",
      price: 120000,
      location: "kilimanjaro",
      supplyStatus: "instock",
      createdAt: "2025-01-30T23:30:22.850Z",
      updatedAt: "2025-01-30T23:30:22.850Z",
      __v: 0,
    },
    {
      _id: "679b99eebb962821d53c4cb9",
      crop: "mchicha",
      price: 15000,
      location: "dar es salaam",
      supplyStatus: "low-stock",
      createdAt: "2025-01-31T00:45:10.920Z",
      updatedAt: "2025-01-31T00:45:10.920Z",
      __v: 0,
    },
    {
      _id: "679b99eebb962821d53c4cba",
      crop: "ndizi",
      price: 45000,
      location: "kagera",
      supplyStatus: "instock",
      createdAt: "2025-01-31T02:15:35.050Z",
      updatedAt: "2025-01-31T02:15:35.050Z",
      __v: 0,
    },
    {
      _id: "679b99eebb962821d53c4cbb",
      crop: "machungwa",
      price: 38000,
      location: "tanga",
      supplyStatus: "instock",
      createdAt: "2025-01-31T03:55:47.300Z",
      updatedAt: "2025-01-31T03:55:47.300Z",
      __v: 0,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "low-stock":
        return "bg-yellow-100 text-yellow-800";
      case "instock":
        return "bg-green-100 text-green-800";
      case "out-of-stock":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Market Information
        </h1>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Crop
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price (TZS)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Supply Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Added
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {marketData.map((market) => (
                  <tr key={market._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {market.crop}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {market.price.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {market.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          market.supplyStatus
                        )}`}
                      >
                        {market.supplyStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(market.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link
                        to={`/admin/market-info/${market._id}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInfo;
