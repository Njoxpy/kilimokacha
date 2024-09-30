const Comment = () => {
    return (
      <>
        <div className="bg-gray-100 p-4 rounded-lg mt-6">
          <form action="" className="space-y-4">
            <div>
              <label
                htmlFor="comment"
                className="block text-sm font-medium text-gray-700"
              >
                Comment
              </label>
              <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="4"
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your comment"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-all duration-300"
            >
              Comment
            </button>
          </form>
        </div>
      </>
    );
  };
  
  export default Comment;
  