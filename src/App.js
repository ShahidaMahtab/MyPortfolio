import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import DrawerComponent from "./components/DrawerComponent/DrawerComponent";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DrawerComponent />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
