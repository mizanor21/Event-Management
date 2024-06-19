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
      // {
      //   path: "/all-events/:id",
      //   element: <EventDetails></EventDetails>,
      //   loader: () =>
      // },
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
    ],
  },
]);
export default router;
