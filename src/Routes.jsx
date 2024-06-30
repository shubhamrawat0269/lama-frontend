import App from "./App";
import { createBrowserRouter } from "react-router-dom";

import { Home, ProjectList, UserDashboard } from "./pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Nopage />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [],
      },
      {
        path: "/projects",
        element: <ProjectList />,
      },
      {
        path: "/dashboard/:id",
        element: <UserDashboard />,
      },
    ],
  },
]);

export default routes;
