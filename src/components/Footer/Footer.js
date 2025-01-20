import React from 'react';
import './Footer.css';
import Logo from '../images/PaulsTech.jpg';

const Footer = () => {
  return (
    <div>
      <footer className="footer mt-5" id="footer">
        {/* <div className="container"> */}
          {/* <div className="footer-body"> */}
            <div className="footer-data">
              {/* <h4 className='...'></h4> */}
              <div className="footer-section me-5">
                <img
                  src={Logo}
                  className="img-fluid mt-3"
                  width={200}
                  height={100}
                  alt="logo"
                />
                <p className="text-white logo-text mt-3">
                  Paul's Tech is the Coolest tech company. The CEO Mr. Opara
                  Paul Chibuikem, is the founder of this great company, he
                  recently started it in the year, 2024.
                </p>
              </div>
                <div className="footer-section me-3">
                  <h3 className="text-white mt-3">Location</h3>
                  <li className="text-white online">Online</li>
                </div>
                <div className="footer-section mt-3">
                  <h3 className="text-white">Contact</h3>
                  <ul className="contact-footer-list mt-3">
                    <li className="contact-phone-no text-white d-flex">
                      <i className="bi bi-telephone-fill me-3"></i>07072358083
                    </li>
                    <li className="contact-email text-white d-flex mt-3">
                      <i className="bi bi-envelope-fill me-3"></i>
                      opara1487@gmail.com
                    </li>
                  </ul>
                </div>
                <div className="footer-section mt-3 ms-5">
                  <h3 className="text-white ms-2">Social</h3>
                  <ul className="contact-footer-list mt-3">
                    <a className="link" href="https://wa.me/qr/B2TXGIMARHP3C1">
                      <li className="social-whatsapp text-white d-flex me-5">
                        <i className="bi bi-whatsapp me-3"></i>WhatsApp
                      </li>
                    </a>
                    <a
                      className="link"
                      href="https://www.instagram.com/paulstech2024/profilecard/?igsh=MXkwaHQ3b2xudTFxdQ=="
                    >
                      <li className="social text-white d-flex me-5">
                        <i className="bi bi-instagram me-3"></i>Instagram
                      </li>
                    </a>
                    <a
                      className="link"
                      href="https://x.com/Pauls_Tech2024?t=utxCaZZiDcEFnXIkmIWDZA&s=09"
                    >
                      <li className="social text-white d-flex me-5">
                        <i className="bi bi-twitter-x me-3"></i>Twitter
                      </li>
                    </a>
                    <a
                      className="link"
                      href="https://www.linkedin.com/in/paul-opara-280b81195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    >
                      <li className="social text-white d-flex me-5">
                        <i className="bi bi-linkedin me-3"></i>LinkedIn
                      </li>
                    </a>
                  </ul>
                </div>
            </div>
            <hr />
            <p className="text-center text-white">
              Copyrights @ 2024 Paul's Tech
            </p>
          {/* </div> */}
        {/* </div> */}
      </footer>
    </div>
  );
}

export default Footer
