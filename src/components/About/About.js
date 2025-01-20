import React from 'react'
import './About.css'
import PaulsTech from '../images/PaulsTech.jpg';
// import Home from '../Home/Home'

const About = () => {
  return (
    <div>
      {/* <Home/> */}
      <section className="py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={PaulsTech}
                className="img-fluid rounded"
                alt="about image"
              />
            </div>
            <div className="col-md-6">
              <h1 className="pb-3">About</h1>
              <p className="lead">
                Paul's Tech is Cool tech company. The CEO Mr. Opara Paul
                Chibuikem, is the founder of this great company, he recently
                started it in the year, 2024. And it was built on the foundation
                of focus and integrity, it came as a thought while he was still
                in school, and he said to himself "hey why not start up a tech
                business where people can learn various things in tech that they
                aren't aware of" and Boom, that's how the company name "Paul's
                tech" came about and with complete focus, integrity and
                dedication, he brought his idea into reality. And today we can
                say we are part a of the tech industries. &#128513;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About
