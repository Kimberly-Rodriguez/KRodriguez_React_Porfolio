import React from "react";
import "../App.css";

export default function Contact() {
  return (
    <section className="resume-section" id="contact">
      <div className="resume-section-content">
        <h2 className="mb-5">Contact</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            {/* <!-- <h3 className="mb-0">krodriguez@gmail.com</h3>
                <div className="subheading mb-3">Web Developer</div> --> */}
            <div>
              <div className="subheading mb-5">
                Los Angeles, CA · (818) 219-5714 · <a href="mailto:krodriguez.ucla@gmail.com"> krodriguez@gmail.com </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="social-icons">
            <a className="social-icon" href="https://www.bit.ly/kmbrly-rdrgz">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="social-icon" href="https://www.bit.ly/kr-github">
              <i className="fab fa-github"></i>
            </a>
            <a
              className="social-icon"
              href="https://twitter.com/KimRodriguezLA"
            >
              <i className="fab fa-twitter"></i>
            </a>
            {/* <!-- <a className="social-icon" href="mailto:krodriguez.ucla@gmail.com"><i className="fab fa-gmail"></i></a> --> */}
          </div>
        </div>
      </div>
    </section>
  );
}
