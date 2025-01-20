import React from 'react'
import "./Feedback.css";


const Feedback = () => {
  return (
    <div>
      <section className="feedback" id="feedback">
        <h1 className="feedback-header text-center">Feedback</h1>
        <div className="container feedback-form my-5">
          {/* <div className=".."> */}
          {/* <div className="feedback-form"> */}
            <form action="https://formspree.io/f/xjkvrwbq" method="POST">
              <div className="row">
                <div className="d-flex mt-3">
                  <div className="me-5 col-md-6 mb-3">
                    <label className="form-label bg-transparent text-white me-2">
                      Name:
                    </label>
                    <input
                      type="text"
                      name="Name"
                      className="form-control bg-transparent text-white"
                      placeholder="Full Name..."
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label bg-transparent text-white me-2">
                      Email-Address:
                    </label>
                    <input
                      type="email"
                      name="Email"
                      className="form-control bg-transparent text-white"
                      placeholder="Enter email-address..."
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label bg-transparent text-white me-2">
                    FeedBack:
                  </label>
                  <textarea
                    type="text"
                    name="Message"
                    className="form-control bg-transparent text-white"
                    placeholder="Please enter your Feedback..."
                    row="5"
                    required
                  ></textarea>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="button btn btn-primary">
                    Send
                  </button>
                </div>
              </div>
            </form>
          {/* </div> */}
          {/* </div> */}
        </div>
      </section>
    </div>
  );
}

export default Feedback
