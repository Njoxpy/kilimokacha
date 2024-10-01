import Justin from "../../assets/images/justin.jpg";

const AuthorCard = () => {
  return (
    <>
      <div className="author-card flex items-center space-x-4 bg-white shadow-md p-4 rounded-lg max-w-sm">
        <img src={Justin} alt="author profile photo" className="w-24 h-24 rounded-full object-cover" loading="lazy"/>
        <div>
          <h3 className="text-lg font-semibold">NjoxPy</h3>
          <p className="text-gray-500">Full Stakc Developer</p>
        </div>
      </div>
    </>
  );
};

export default AuthorCard;
