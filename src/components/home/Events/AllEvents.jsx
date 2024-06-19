import { useEffect, useState } from "react";
import Event from "./Event";
import axios from "axios";
import SkaletonLoader from "../../Others/SkaletonLoader/SkaletonLoader";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/events")
      .then((response) => {
        setEvents(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Set loading to false even if there is an error
      });
  }, []); // Empty dependency array ensures this effect runs only once

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
