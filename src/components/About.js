import React from "react";
import "../App.css";

export default function About() {
  return (
    <div className="container-fluid p-0">
      {/* <!-- About--> */}
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h2 className="mb-0">Kimberly Rodriguez</h2>
          <div>
            <h3 className="mb-0">
              <span className="text-primary">Full Stack Software Engineer</span>
            </h3>
          </div>
          <p className="lead mb-5"></p>
          <p>
            I am a software engineer with knowledge of technologies like React, MySQL & JavaScript.
            <br>
            For additonal details about my work please view my portfolio and
            experience section.
            
          </p>
          <p>Talk to you soon!</p>
          <br />
          <br />
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
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}
