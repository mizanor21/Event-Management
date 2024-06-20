import { AiTwotoneDelete } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const Event = ({ event, onDelete, onEdit }) => {
  const { _id, title, date, price, time, location, image } = event;

  // Split the date into day and month
  const [day, month] = date.split(" ");

  // Define the delete function
  const handleDelete = () => {
    // Call the onDelete prop with the event id
    if (onDelete) {
      onDelete(_id);
    }
  };

  return (
    <div className="font-serif bg-slate-50 grid grid-cols-1 lg:grid-cols-2 shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1">
      <div className="relative">
        <img className="w-full h-full" src={image} alt={title} />
        <div className="absolute top-0 left-0 text-2xl text-white p-3 bg-gradient-to-r from-orange-300 to-orange-600 justify-center text-center">
          <h3 className="leading-none font-bold">{day}</h3>
          <h3 className="leading-none">{month?.slice(0, 3)?.toUpperCase()}</h3>
        </div>
      </div>
      <div className="p-6 flex flex-col justify-between">
        <div>
          <div className="border-l-4 pl-3 border-double border-orange-500">
            <p className="text-xl font-bold">{title}</p>
            <p className="text-orange-500">Tickets from {price}</p>
          </div>
          <div className="my-5">
            <div className="flex items-center">
              <IoTimeOutline className="text-orange-500" />
              <p className="text-sm font-bold ml-2">Start {time}</p>
            </div>
            <div className="flex items-center">
              <CiLocationOn className="text-orange-500" />
              <p className="text-sm font-bold ml-2">{location}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Link
            to={`/events/${_id}`}
            className="px-4 py-2 rounded-md bg-gradient-to-r from-orange-300 to-orange-600 hover:from-orange-600 hover:to-orange-300 text-sm font-bold text-white"
          >
            DETAILS
          </Link>
          {/* Conditionally render the delete button only if onDelete prop is present */}
          <div className="flex gap-2">
            {onDelete && (
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded-md bg-gradient-to-r from-orange-300 to-orange-600 hover:from-orange-600 hover:to-orange-300 text-sm font-bold text-white"
              >
                <AiTwotoneDelete />
              </button>
            )}
            <Link
              to={`/dashboard/event-edit/${_id}`}
              className="px-4 py-2 rounded-md bg-gradient-to-r from-orange-300 to-orange-600 hover:from-orange-600 hover:to-orange-300 text-sm font-bold text-white"
            >
              <FaEdit />
            </Link>
            {/* {onEdit && (
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
