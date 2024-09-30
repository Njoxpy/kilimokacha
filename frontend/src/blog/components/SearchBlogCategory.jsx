const SearchBlogCategory = () => {
    return(
        <>
        <div className="p-4">
            <form action="/search-category">
                <input type="search" name="blog-category" id="" placeholder="search blog category" required/>
                <button className="rounded-full bg-announceCta p-2 text-white hover:bg-green-700 transition-all 0.4s">search</button>
            </form>
        </div>
        </>
    )
}

export default SearchBlogCategory;