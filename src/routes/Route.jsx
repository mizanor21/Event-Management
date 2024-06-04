import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../components/home/Home";
import About from "../components/Others/AboutUs/About";
import Contact from "../components/Others/Contact/Contact";
import DashLayouts from "../layouts/DashLayouts";
import DashHome from "../components/dashboard/DashHome";

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
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashLayouts />,
    children: [
      {
        path: "/dashboard",
        element: <DashHome></DashHome>,
      },
    ],
  },
]);
export default router;
