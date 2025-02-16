import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Booking from "../Pages/Booking/Booking";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import Shop from "../Pages/Shop/Shop";
import Error from "../Shared/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/booking",
        element: <Booking></Booking>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
    ],
  },
]);
