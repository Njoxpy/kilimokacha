import { useState } from "react";
import { useParams } from "react-router-dom";

const MarketDetails = () => {
  const { id } = useParams();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({
    crop: "maharage",
    price: 45000,
    location: "njombe",
    supplyStatus: "low-stock",
  });

  // Hardcoded market data (simulating fetched data)
  const marketData = {
    _id: "679b99eebb962821d53c4caf",
    crop: "maharage",
    price: 45000,
    location: "njombe",
    supplyStatus: "low-stock",
    createdAt: "2025-01-30T15:25:34.087Z",
    updatedAt: "2025-01-30T15:25:34.087Z",
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log("Updated data:", formData);
    setShowEditModal(false);
  };

  const handleDelete = () => {
    console.log("Deleting item with ID:", id);
    setShowDeleteModal(false);
  };

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

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Product Details
          </h1>

          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-4">
              <span className="text-gray-600 font-medium">Crop:</span>
              <span className="text-gray-900">{marketData.crop}</span>
            </div>

            <div className="flex justify-between items-center border-b pb-4">
              <span className="text-gray-600 font-medium">Price:</span>
              <span className="text-gray-900">
                {marketData.price.toLocaleString()} TZS
              </span>
            </div>

            <div className="flex justify-between items-center border-b pb-4">
              <span className="text-gray-600 font-medium">Location:</span>
              <span className="text-gray-900">{marketData.location}</span>
            </div>

            <div className="flex justify-between items-center border-b pb-4">
              <span className="text-gray-600 font-medium">Supply Status:</span>
              <span
                className={`px-2 py-1 rounded-full text-sm ${getStatusColor(
                  marketData.supplyStatus
                )}`}
              >
                {marketData.supplyStatus}
              </span>
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-4">
            <button
              onClick={() => setShowEditModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Edit
            </button>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this product? This action cannot
              be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Edit Product</h2>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Crop
                </label>
                <input
                  type="text"
                  value={formData.crop}
                  onChange={(e) =>
                    setFormData({ ...formData, crop: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price
                </label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: Number(e.target.value) })
                  }
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Supply Status
                </label>
                <select
                  value={formData.supplyStatus}
                  onChange={(e) =>
                    setFormData({ ...formData, supplyStatus: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="low-stock">Low Stock</option>
                  <option value="instock">In Stock</option>
                  <option value="out-of-stock">Out of Stock</option>
                </select>
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketDetails;
