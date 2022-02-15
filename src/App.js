import "./App.scss";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="projects">Projects</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
