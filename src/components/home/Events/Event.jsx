import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";

const Event = ({ event }) => {
  const { title, date, price, time, location, image } = event;

  // Split the date into day and month
  const [day, month] = date.split(" ");

  return (
    <div className="font-serif bg-slate-50 grid grid-cols-1 lg:grid-cols-2 shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1">
      <div className="relative">
        <img className="w-full max-h-[300px]" src={image} alt={title} />
        <div className="absolute top-0 left-0 text-2xl text-white p-3 bg-gradient-to-r from-orange-400 to-orange-600 justify-center text-center">
          <h3 className="leading-none font-bold">{day}</h3>
          <h3 className="leading-none">{month.slice(0, 3).toUpperCase()}</h3>
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
        <div className=" justify-self-end text-center">
          {" "}
          {/* Align button to bottom right */}
          <button className="px-4 py-2 w-full rounded-md bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-400 text-sm font-bold text-white">
            TICKETS & DETAILS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
