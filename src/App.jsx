import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe.jsx';
import Contact from './components/contact.jsx';
import Resume from './pages/resume.jsx';
import Footer from './components/footer.jsx';


export default function App() {
  return (
      <Router>
          <header>
              <h1>My Portfolio</h1>
              <nav>
                  <ul>
                      <li><Link to="/about">About Me</Link></li>
                      <li><Link to="/">Portfolio</Link></li>
                      <li><Link to="/resume">Resume</Link></li>
                      <li><Link to="/contact">Contact</Link></li> 
                  </ul>
              </nav>
          </header>
          <main>
              <Routes>
                  <Route path="/about" element={<AboutMe />} />
                  <Route path="/" element={<Portfolio />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/contact" element={<Contact />} /> 
              </Routes>
          </main>
          <Footer/>
      </Router>
  );
}