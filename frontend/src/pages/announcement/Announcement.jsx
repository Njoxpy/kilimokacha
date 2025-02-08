import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch";

import { baseURL } from "../../services/api_services";

const Announcement = () => {
  const URL = "localhost:3000/api/v1/announcements";
  // const [announcements, setAnnouncements] = useState(null)

  const {
    data: announcements,
    loading,
    error,
  } = useFetch("http://localhost:3000/api/v1/crops");

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorFetch />;
  }

  return (
    <>
      <div className="p-4 bg-green-300">
        <h2>Announcements</h2>
        {announcements &&
          announcements.map((announcement) => (
            <div key={announcement.id}>
              <h3 className="font-bold">{announcement.title}</h3>
              <p>
                Date: <small>{announcement.date}</small>
              </p>
              <button>
                <Link to={`${announcement._id}`}>soma zaidi</Link>
              </button>
            </div>
          ))}
      </div>
      <Footer />
    </>
  );
};

export default Announcement;

// http://localhost:3000/api/v1/blogs
