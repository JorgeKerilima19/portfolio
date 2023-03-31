import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import {
  About,
  Contact,
  HomePage,
  NotFoundPage,
  Projects,
  Skills,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Route>
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
