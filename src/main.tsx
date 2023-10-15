import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./main.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import {
  About,
  Contact,
  HomePage,
  NotFoundPage,
  Projects,
  ProjectPage,
} from "./pages";
import { AppContextProvider } from "./context/AppContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/portfolio", element: <HomePage /> },
      { path: "/portfolio", element: <HomePage /> },
      { path: "/portfolio/about", element: <About /> },
      { path: "/portfolio/contact", element: <Contact /> },
      {
        path: "/portfolio/projects",
        element: <Projects />,
        children: [
          {
            path: "./:id",
            element: <ProjectPage />,
          },
        ],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </AppContextProvider>
  </React.StrictMode>
);
