import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import { AboutUs, ContactUs, Home, NotFound } from "../pages/index.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/contactus", element: <ContactUs /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default routes;
