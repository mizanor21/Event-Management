import { useEffect, useState } from "react";
import Event from "./Event";
import axios from "axios";
import SkaletonLoader from "../../Others/SkaletonLoader/SkaletonLoader";

const Events = () => {
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
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex gap-5 justify-center min-h-screen container max-w-[1200px] mx-auto">
        <SkaletonLoader></SkaletonLoader>
        <SkaletonLoader></SkaletonLoader>
        <SkaletonLoader></SkaletonLoader>
        <SkaletonLoader></SkaletonLoader>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-[1200px] mb-20">
      <div className="border-l-4 border-orange-600 pl-2 mx-3 lg:mx-0">
        <h2 className="text-4xl font-serif uppercase">Upcoming Events</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5 mx-3 lg:mx-0">
        {events.slice(0, 4).map((event, i) => (
          <Event key={i} event={event}></Event>
        ))}
      </div>
    </div>
  );
};

export default Events;
