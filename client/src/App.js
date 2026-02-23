import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Chatbot from "./pages/Chatbot";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";
import "./App.css";
import BackgroundImage from "./components/BackgroundImage";

function App() {
  return (
    <>
      <Router>
      <BackgroundImage />
        <Navbar />
        <Routes>
          <Route path="/personal-portfolio-aditya/" element={<Home />} />
          <Route path="/personal-portfolio-aditya/contact" element={<Contact />} />
          <Route path="/personal-portfolio-aditya/projects" element={<Projects />} />
          <Route path="/personal-portfolio-aditya/chatbot" element={<Chatbot />} />
          <Route path="/personal-portfolio-aditya/resume" element={<Resume />} />
          <Route path="*" element={<Home />} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;

