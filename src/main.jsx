import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddSaddle from "./Component/AddSaddle/AddSaddle.jsx";
import Home from "./Component/AddSaddle/Home.jsx";
import MySaddle from "./Component/AddSaddle/MySaddle.jsx";
import BayAsaddle from "./Component/AddSaddle/BayAsaddle.jsx";
import Schedule from "./Component/AddSaddle/Schedule.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/horses",
        element: <AddSaddle />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/mysaddle",
        element: <MySaddle />,
      },
      {
        path: "/buysaddle",
        element: <BayAsaddle />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
