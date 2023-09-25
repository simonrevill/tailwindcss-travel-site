import { RouteObject } from "react-router-dom";
import App from "../App";
import Stays from "../views/Stays";
import Flights from "../views/Flights";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Stays />,
      },
      {
        path: "/flights",
        element: <Flights />,
      },
    ],
  },
];

export default routes;
