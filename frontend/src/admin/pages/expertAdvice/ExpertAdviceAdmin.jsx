import { useState } from "react";
import { Link } from "react-router-dom";

const ExpertAdviceAdmin = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Hardcoded data for demonstration
  const expertAdvices = [
    {
      _id: "1",
      title: "Essential Soil Management Techniques for Sustainable Farming",
      description:
        "Learn about advanced soil management techniques that can help improve your crop yield while maintaining soil health for sustainable farming practices.",
      image: "/api/placeholder/800/400",
      createdAt: "2025-02-01T10:00:00.000Z",
    },
    {
      _id: "2",
      title: "Effective Pest Control Methods for Organic Crop Production",
      description:
        "Discover natural and effective pest control methods that can help protect your crops while maintaining organic farming standards and environmental safety.",
      image: "/api/placeholder/800/400",
      createdAt: "2025-02-02T10:00:00.000Z",
    },
    {
      _id: "3",
      title: "Water Conservation Strategies for Modern Agriculture",
      description:
        "Expert insights into modern water conservation techniques and irrigation strategies to maximize water efficiency in agricultural operations.",
      image: "/api/placeholder/800/400",
      createdAt: "2025-02-03T10:00:00.000Z",
    },
  ];

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = expertAdvices.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(expertAdvices.length / itemsPerPage);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Expert Advice Management
          </h1>
          <Link
            to="/admin/expert-advice/new"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add New Advice
          </Link>
        </div>

        {/* Expert Advice Grid */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          {currentItems.map((advice) => (
            <div
              key={advice._id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:w-48"
                    src={advice.image}
                    alt={advice.title}
                  />
                </div>
                <div className="p-6 w-full">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        {advice.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{advice.description}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">
                      Published: {formatDate(advice.createdAt)}
                    </span>
                    <div className="space-x-4">
                      <Link
                        to={`/admin/expert-advice/${advice._id}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        View Details
                      </Link>
                      <Link
                        to={`/admin/expert-advice/${advice._id}/edit`}
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 rounded-lg shadow-md">
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400"
            >
              Previous
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing{" "}
                <span className="font-medium">{indexOfFirstItem + 1}</span> -{" "}
                <span className="font-medium">
                  {Math.min(indexOfLastItem, expertAdvices.length)}
                </span>{" "}
                of <span className="font-medium">{expertAdvices.length}</span>{" "}
                results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400"
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      currentPage === index + 1
                        ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                        : "border-gray-300 text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400"
                >
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertAdviceAdmin;
