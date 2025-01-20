import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <section className="contact mt-5" id="contact">
        <div className="container">
          <h1 className="text-center">Contact Us</h1>
          <div className="row">
            <div className="contact-data">
              <ul className="contact-list contact-section mt-4">
                <li className="phone-no">
                  <i className="bi bi-telephone me-1"></i>07072358083
                </li>
                <li className="email">
                  <i className="bi bi-envelope me-1"></i>opara1487@gmail.com
                </li>
              </ul>
              <form
                className="contact-section"
                action="https://formspree.io/f/xjkvrwbq"
                method="POST"
              >
                <div className="mt-5 d-flex">
                  <div className="input-group-1 me-2">
                    <span className="input-group-text-1 me-2 text-dark">
                      Name
                    </span>
                    <input
                      type="text"
                      name="Name"
                      className="form-control-1 bg-transparent"
                      placeholder="Full Name..."
                      required
                    />
                  </div>
                  <div className="input-group-1">
                    <span className="input-group-text-1 bg-transparent text-dark me-2">
                      Phone Number
                    </span>
                    <input
                      type="tel"
                      name="phone-number"
                      className="form-control-1 bg-transparent"
                      placeholder="Enter Phone-Number..."
                      required
                    />
                  </div>
                </div>
                <div class="mt-3 mb-3">
                  <label for="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    name="Message"
                    id="message"
                    rows="5"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="button-submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact
