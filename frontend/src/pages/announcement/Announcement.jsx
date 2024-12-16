import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useEffect, useContext } from "react";
import { useAnnouncementContext } from "../../hooks/useAnnouncementsContext";

import { baseURL } from "../../services/api_services"

const Announcement = () => {
  const { announcements, dispatch } = useAnnouncementContext()
  const URL = `${baseURL}announcements`
  // const [announcements, setAnnouncements] = useState(null)

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const response = await fetch(URL)
      const json = await response.json()

      if (response.ok) {
        // setAnnouncements(json)
        dispatch({ type: "SET_ANNOUNCEMENTS", payload: json })
      }
    }

    fetchAnnouncements()
  }, [])

  return (
    <>
      <div className="p-4 bg-green-300">
        <h2>Announcements</h2>
        {announcements && announcements.map((announcement) => (
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
