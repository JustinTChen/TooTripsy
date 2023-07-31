import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import {
  HashRouter as Router,
  Link,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/style.css";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path='/instagram' element={<Instagram />} />
          {/* TODO: /travels path */}
          <Route path="*" element={<Navigate to="/"/>} />
          <Route component={NotFound} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Instagram() {
  window.location.replace('https://instagram.com/tootripsy');
}

export default App;
