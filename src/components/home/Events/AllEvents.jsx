import { useEffect, useState } from "react";
import Event from "./Event";
import axios from "axios";

const AllEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/events")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container mx-auto max-w-[1200px] mb-20">
      <div className="border-l-4 border-orange-600 pl-2 mx-3 lg:mx-0">
        <h2 className="text-4xl font-serif uppercase">Upcoming Events</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5 mx-3 lg:mx-0">
        {events.map((event, i) => (
          <Event key={i} event={event}></Event>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
