const SearchBlogCategory = () => {
    return (
        <>
            <div className="p-4">
                <form action="/search-category" className="flex items-center space-x-2">
                    <input 
                        type="search" 
                        name="blog-category" 
                        id="search-category" 
                        placeholder="Search blog category" 
                        required 
                        className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button 
                        type="submit" 
                        className="rounded-full bg-announceCta p-2 text-white hover:bg-green-700 transition duration-300 ease-in-out"
                    >
                        Search
                    </button>
                </form>
            </div>
        </>
    );
};

export default SearchBlogCategory;
