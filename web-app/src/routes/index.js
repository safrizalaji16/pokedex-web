import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import Home from "../pages/Home";

const route = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default route;
