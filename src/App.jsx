import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WebDevelopment from "./pages/WebDevelopment";
import Automation from "./pages/Automation";
import UiUx from "./pages/UiUx";
import Content from "./pages/Content";
import Quality from "./pages/Quality";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/automation" element={<Automation />} />
        <Route path="/services/ui-ux-design" element={<UiUx />} />
        <Route path="/services/content-writing" element={<Content />} />
        <Route path="/services/quality-assurance" element={<Quality />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
