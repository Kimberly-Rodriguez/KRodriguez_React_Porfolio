import React from "react";
import "../App.css";


export default function About() {
  return (
    <div className="container-fluid p-0">
      {/* <!-- About--> */}
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">Kimberly Rodriguez</h1>
          <div>
            <h3 className="mb-0"><span className="text-primary">Web Developer</span></h3>
          </div>
          <p className="lead mb-5"></p>
          <p>
            I am a full-stack web developer in the making, currently learning
            programming languages like React, MySQL and JavaScript.
          </p>
          <p>
            Prior to this career shift, I was a civic innovator with more than
            seven years of experience in the highest levels of local government.
          </p>
          <p>
            I led and supported initiatives around open data, economic
            development, housing accessibility, and youth leadership.
          </p>
          <p>
            For additonal details about my work experience please view my resume
            section or if you simply wish to connect feel free to reference my
            contact section.
          </p>
          <p>Talk to you soon!</p>
          <br />
          <br />
          <div className="social-icons">
            <a className="social-icon" href="https://www.bit.ly/kmbrly-rdrgz"><i className="fab fa-linkedin-in"></i></a>
            <a className="social-icon" href="https://www.bit.ly/kr-github"><i className="fab fa-github"></i></a>
            <a className="social-icon" href="https://twitter.com/KimRodriguezLA"><i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}
