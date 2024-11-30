import { useState } from "react";
import Footer from "../../components/Footer";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [thumbnail_image, setThumbnail_image] = useState("");
  const [author, setAuthor] = useState("janeth nyagawa");
  const [category, setCategory] = useState("farming tips");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);


  const handleSubmit = (event) => {
    event.preventDefault();
    const URL = "http://localhost:5000/api/v1/blogs/new"
    fetch(URL, {
      "method": "POST",
      "content-type": "application/json"
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("response not ok");
        }
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });

    setTitle("");
    setBody("");
    setThumbnail_image("");
    setAuthor("");

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
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
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
              value={body}
              onChange={(event) => {
                setBody(event.target.value);
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
              value={thumbnail_image}
              onChange={(event) => {
                setThumbnail_image(event.target.value);
              }}
              className="w-full border border-gray-300 p-2 rounded focus:ring focus:ring-green-300"
            />
          </div>

          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
              Select Blog Category
            </label>
            <select
              name="author"
              id="author"
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
              }}
              required
              className="w-full border border-gray-300 p-2 rounded focus:ring focus:ring-green-300"
            >
              <option value="farming tips">farming tips</option>
              <option value="market trends">market trends</option>
              <option value="sucess stories">sucess stories</option>
              <option value="sustainability">sustainability</option>
            </select>
          </div>

          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
              Select Author
            </label>
            <select
              name="author"
              id="author"
              value={author}
              onChange={(event) => {
                setAuthor(event.target.value);
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
