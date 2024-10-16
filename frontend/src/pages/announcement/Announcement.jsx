import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

// useFetch import
import useFetch from "../../hooks/useFetch";

const Announcement = () => {
  const {
    data: announcements,
    loading,
    error,
  } = useFetch("http://localhost:3004/announcements");

  if (loading) {
    return <div className="text-center">Loading....</div>; // Return a loading message
  }

  if (error) {
    return <div className="text-red-500 text-center">Error.... {error}</div>; // Return an error message
  }

  return (
    <>
      <div className="p-4 bg-green-300">
        <h2>Announcements</h2>
        {announcements.map((announcement) => (
          <div key={announcement.id}>
            <h3 className="font-bold">{announcement.title}</h3>
            <p>
              Date: <small>{announcement.date}</small>
            </p>
            <button>
              <Link to={`${announcement.id}`}>soma zaidi</Link>
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Announcement;
