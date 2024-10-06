import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = 'http://localhost:3000/user'; // Replace with your API endpoint

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-11/12 max-w-md">
        <div className="flex flex-col items-center">
          <img
            src={user.avatar} // User avatar URL
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-2 border-green-500"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.bio}</p>
        </div>
        <div className="mt-6">
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default UserProfile;
