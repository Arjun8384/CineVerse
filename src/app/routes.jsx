import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;