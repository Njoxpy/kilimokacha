import React, { useState } from 'react';

const SearchBlogCategory = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Handle input change
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        // Here you can implement the search logic
        // For example, you might want to redirect or fetch data based on searchTerm
        console.log('Searching for:', searchTerm);
        // Example: Redirecting to search results page
        // window.location.href = `/search-category?query=${searchTerm}`;
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                <input 
                    type="search" 
                    name="blog-category" 
                    id="search-category" 
                    placeholder="Search blog category" 
                    value={searchTerm} 
                    onChange={handleInputChange} 
                    required 
                    className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 ease-in-out"
                />
                <button 
                    type="submit" 
                    className="rounded-full bg-green-500 p-2 text-white hover:bg-green-700 transition duration-300 ease-in-out"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBlogCategory;
