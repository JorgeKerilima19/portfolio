import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import {
  About,
  Contact,
  HomePage,
  NotFoundPage,
  Projects,
  Skills,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/", element: <HomePage /> },
      {path:"./portfolio", element:<HomePage/>},
      { path: "/.about", element: <About /> },
      { path: "./contact", element: <Contact /> },
      { path: "./projects", element: <Projects /> },
      { path: "./skills", element: <Skills /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
