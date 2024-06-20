import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../components/home/Home";
import About from "../components/Others/AboutUs/About";
import Contact from "../components/Others/Contact/Contact";
import DashLayouts from "../layouts/DashLayouts";
import DashHome from "../components/dashboard/DashHome";
import PrivetRoute from "./PrivetRoute";
import AllEvents from "../components/home/Events/AllEvents";
import EventDetails from "../components/home/Events/EventDetails";
import AddEvent from "../components/dashboard/AddEvent";
import EditEvent from "../components/dashboard/EditEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/all-events",
        element: <AllEvents></AllEvents>,
      },
      {
        path: "/events/:id",
        element: <EventDetails></EventDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/events/${params.id}`),
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashLayouts />
      </PrivetRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashHome></DashHome>,
      },
      {
        path: "/dashboard/all-events",
        element: <AllEvents></AllEvents>,
      },
      {
        path: "/dashboard/add-event",
        element: <AddEvent></AddEvent>,
      },
      {
        path: "/dashboard/event-edit/:id",
        element: <EditEvent></EditEvent>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/events/${params.id}`),
      },
    ],
  },
]);
export default router;
