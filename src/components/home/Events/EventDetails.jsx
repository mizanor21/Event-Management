import { useLoaderData } from "react-router-dom";

const EventDetails = () => {
  const eventDetails = useLoaderData();
  console.log(eventDetails);
  return (
    <div>
      <p>{eventDetails?.title}</p>
      <img src={eventDetails?.image} alt="" />
    </div>
  );
};

export default EventDetails;
