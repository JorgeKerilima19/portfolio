import { Routes, Route, createBrowserRouter } from "react-router-dom";
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
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/projects", element: <Projects /> },
      { path: "/skills", element: <Skills /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
