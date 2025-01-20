import React from 'react'
import './Services.css';
import PhoneRepair from '../images/Phone-Repair.jpg';
import Webdevelopment from '../images/Programming.jpg';
import AI from '../images/AI.jpg';
import Graphicsdesign from '../images/Graphics Design.jpg';
import PhoneTracking from '../images/PhoneTracking.jpg';

const Services = () => {
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <h1 className="text-center" id="services">
            {" "}
            Services{" "}
          </h1>
          <p className="text-center">
            We offer different services, that you may want to engage in or get
            your hands on. You can contact me and tell me what you want to learn
            in the contact section.
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="image1 p-3 mt-3">
                {/* <div className="card-body"> */}
                <h4 className="skills">Phone Repair</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="image2 p-3 mt-3">
                {/* <img
                  src={Webdevelopment}
                  className="card-img-top"
                  alt="Web development"
                /> */}
                <div className="card-body">
                  <h4 className="skills">Programming/Web development</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="image3 p-3 mt-3">
                {/* <img
                  src={AI}
                  className="card-img-top"
                  alt="Artificial Intelligence"
                /> */}
                <div className="card-body">
                  <h4 className="skills">Artificial Intelligence</h4>
                </div>
              </div>
            </div>
            {/* <br/> */}
            <div className="col-md-4">
              <div className="image4 p-3 mt-5">
                {/* <img
                  src={Graphicsdesign}
                  className="card-img-top"
                  alt="Graphics Design"
                /> */}
                <div className="card-body">
                  <h4 className="skills">Graphics design</h4>
                </div>
              </div>
            </div>
            {/* <br/> */}
            <div className="col-md-4">
              <div className="image5 p-3 mt-5 tracking-card">
                {/* <img
                  src={PhoneTracking}
                  className="card-img-top"
                  alt="Phone Tracking"
                /> */}
                <div className="card-body">
                  <h4 className="skills">Phone Tracking</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services
