import React from 'react'
import './Home.css';
import Tech1 from "../images/Tech 5.jpg";
import Tech2 from "../images/Tech 2.png";
import Tech3 from "../images/Tech 3.jpg";
import one from '../images/Tech 6.jpg';
import Header from '../Header/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        // data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        class="scrollspy-example"
        tabindex="0"
      >
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner" id='home'>
            <div className="carousel-item active">
              <img src={one} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="text-white welcome">Welcome to Paul's Tech</h1>
                <p className="welcome-page">Elevate your skills in tech.</p>
                <a href="#services">
                  <button className="Get-Started">Get Started</button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Tech2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h2>We learn Everyday</h2>
                <p>Come and Enhance your skills.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Tech3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h2>You are welcome</h2>
                <p>We are happy to have you.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home
