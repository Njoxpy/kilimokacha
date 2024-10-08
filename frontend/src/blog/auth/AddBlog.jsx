import { useState } from "react";
import Footer from "../../components/Footer";

const AddBlog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [thumbnailImage, setThumbnailImage] = useState("");
  const [blogAuthor, setBlogAuthor] = useState("janeth nyagawa");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);


  const handleSubmit = (event) => {
    event.preventDefault();

    setBlogTitle("");
    setBlogDescription("");
    setThumbnailImage(null);
    setBlogAuthor("");

    history.pushState("/")
  };

  return (
    <>
      <div className="bg-white p-6 max-w-lg mx-auto shadow-md rounded-lg">
        <form action="/new" onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="blog-title" className="block text-sm font-medium text-gray-700 mb-2">
              Blog Title
            </label>
            <input
              type="text"
              name="blog-title"
              id="blog-title"
              placeholder="Enter Blog Title"
              value={blogTitle}
              onChange={(event) => {
                setBlogTitle(event.target.value);
              }}
              required
              autoFocus
              className="w-full border border-gray-300 p-2 rounded focus:ring focus:ring-green-300"
            />
          </div>

          <div>
            <label htmlFor="blog-description" className="block text-sm font-medium text-gray-700 mb-2">
              Blog Description Body Snippets
            </label>
            <textarea
              name="blog-description"
              id="blog-description"
              cols="30"
              rows="4"
              value={blogDescription}
              onChange={(event) => {
                setBlogDescription(event.target.value);
              }}
              required
              className="w-full border border-gray-300 p-2 rounded focus:ring focus:ring-green-300"
            ></textarea>
          </div>

          <div>
            <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700 mb-2">
              Thumbnail
            </label>
            <input
              type="file"
              name="thumbnail"
              id="thumbnail"
              accept="image/*"
              required
              value={thumbnailImage}
              onChange={(event) => {
                setThumbnailImage(event.target.value);
              }}
              className="w-full border border-gray-300 p-2 rounded focus:ring focus:ring-green-300"
            />
          </div>

          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
              Author
            </label>
            <select
              name="author"
              id="author"
              value={blogAuthor}
              onChange={(event) => {
                setBlogAuthor(event.target.value);
              }}
              required
              className="w-full border border-gray-300 p-2 rounded focus:ring focus:ring-green-300"
            >
              <option value="godbless nyagawa">Godbless Nyagawa</option>
              <option value="janeth nyagawa">Janeth Nyagawa</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-green-600 p-3 rounded hover:bg-green-700 transition-all duration-300 text-white w-full"
          >
            Create Blog
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddBlog;
