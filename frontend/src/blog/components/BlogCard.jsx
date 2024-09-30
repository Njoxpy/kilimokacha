import AuthorCard from "./AuthorCard";
import Impression from "./Impression";
import Comment from "./Comment";

import Brocoli from "../../assets/images/brocoli.jpg";

const BlogCard = () => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Blog Title</h2>

        <div className="auth-impression flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <AuthorCard />
            <Impression />
          </div>
          <p className="text-sm text-gray-500">Date article was written</p>
        </div>

        <p className="text-sm text-gray-500 mb-4">Read time: 2 min</p>

        <img
          src={Brocoli}
          alt="blog thumbnail"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem
          quasi expedita aut minima assumenda provident, molestias veniam magni
          exercitationem nam recusandae magnam, corporis enim iusto sunt
          deleniti quisquam sapiente.
        </p>

        <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-all duration-300">
          Read More
        </button>

        <Comment />
      </div>
    </>
  );
};

export default BlogCard;
