import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog';
import Feedback from './components/Feedback/Feedback';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
    {/* <Header/> */}
      <Home/>
      <About/>
      <Services/>
      <Blog/>
      <Feedback/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
