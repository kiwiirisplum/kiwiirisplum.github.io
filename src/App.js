import Navbar from "./componenets/navbar/Navbar";
import Home from "./pages/Home";
import About from "./componenets/about/About";
import Project from "./componenets/projects/Project";
import Contact from "./componenets/contact/Contact";
import "./App.scss";
import {Routes, Route} from "react-router-dom";
import Footer from "./componenets/footer/Footer";

function App () {
  return (
    <>
    <Navbar />
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App;
