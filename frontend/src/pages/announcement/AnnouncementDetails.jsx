import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import { useEffect } from "react";

const AnnouncementDetails = () => {
  const { announceId } = useParams();
  const navigate = useNavigate();

  // delete

  const handleClick = () => {
    fetch(`http://localhost:3004/announcements/${announceId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("network response was not ok!");
        }
      })
      .then(
        () =>
          console.log(
            `announcement with id: ${announceId} was deleted sucessfully`
          ),
        navigate("/")
      )
      .catch((error) => {
        console.log(
          `there was error when try to delete announcement: Try again`
        );
      });
  };

  const announcement = useLoaderData();
  return (
    <>
      <div className="p-4">
        <div key={announcement.id}>
          <small>{announcement.date}</small>
          <h3 className="font-bold">{announcement.title}</h3>
          <p className="font-light">{announcement.content}</p>
          <button
            className="bg-red-600 text-white hover:bg-red-700 p-2 rounded"
            onClick={handleClick}
          >
            Delete
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AnnouncementDetails;

export const announcementDetailsLoader = async ({ params }) => {
  const { announceId } = params;
  const res = await fetch(`http://localhost:3004/announcements/${announceId}`);

  if (!res.ok) {
    throw new Response("Author not found", { status: 404 });
  }

  try {
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Response("Invalid JSON response", { status: 500 });
  }
};
