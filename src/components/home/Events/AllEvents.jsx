import { useEffect, useState } from "react";
import Event from "./Event";
import axios from "axios";
import SkaletonLoader from "../../Others/SkaletonLoader/SkaletonLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://event-server-7w6i.onrender.com/events")
      .then((response) => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        toast.error("Error fetching events", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
        });
      });
  }, []); // Empty dependency array ensures this effect runs only once

  const handleDeleteEvent = async (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      try {
        await axios.delete(
          `https://event-server-7w6i.onrender.com/events/${id}`
        );
        setEvents(events.filter((event) => event._id !== id));
        toast.success("Event deleted successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
      } catch (error) {
        console.error(error);
        setLoading(false);
        toast.error("Error deleting event", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
        });
      }
    }
  };

  if (loading) {
    return (
      <div className="flex gap-5 justify-center min-h-screen container mx-auto max-w-[1200px]">
        <SkaletonLoader></SkaletonLoader>
        <SkaletonLoader></SkaletonLoader>
        <SkaletonLoader></SkaletonLoader>
        <SkaletonLoader></SkaletonLoader>
      </div>
    );
  }

  return (
    <div className="md:p-5">
      <ToastContainer /> {/* Place ToastContainer at the top level */}
      <div className="border-l-4 border-orange-600 pl-2 mx-3 lg:mx-0">
        <h2 className="text-4xl font-serif uppercase">Upcoming Events</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5 mx-3 lg:mx-0">
        {events.map((event, i) => (
          <Event key={i} event={event} onDelete={handleDeleteEvent} />
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
