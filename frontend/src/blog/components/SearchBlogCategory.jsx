function SearchBlogCategory(){
    return(
        <>
        <div>
            <form action="/search-category">
                <input type="search" name="blog-category" id="" placeholder="search blog category" required/>
                <button>search</button>
            </form>
        </div>
        </>
    )
}

export default SearchBlogCategory;