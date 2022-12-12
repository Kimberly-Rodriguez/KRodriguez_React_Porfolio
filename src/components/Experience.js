import React from "react";
import "../App.css";
import pdf from "../images/kimberlyrodriguezResume.png";

{
  /* <a href="assets/images/KimberlyRodriguezResume.png" download>Resume</a> */
}

export default function Resume() {
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        <a className="subheading mb-3" href={pdf} download>
          Download Resume{" "}
        </a>
        <br />
        <br />
        <div className="resume-section-content">
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Data Programs Lead</h3>
              <div className="subheading mb-3">
                City of Los Angeles, Office of the Mayor
              </div>
              {/* <p>Launched the inaugural Open Data Literacy Program, training over 400+ residents, and increased usage 
                of open data portals by 40% citiwide, surpassing previous years.
              Reconfigured constituent request portal to better support user experience, improving productivity by 20%
          </p> */}
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">September 2017 - August 2021</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Project Manager</h3>
              <div className="subheading mb-3">
                {" "}
                Office of Budget and Innovation, Office of the Mayor
              </div>
              <p>
                Built interactive community asset map with 250 strategic
                contacts for coalition building efforts. Managed four research
                fellows and served as interim team lead to complete team's
                foundational research.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">
                October 2016 - September 2017
              </span>
            </div>
          </div>
        </div>
        <div className="subheading mb-3">Programming Languages & Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <i className="fab fa-html5"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-css3-alt"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-js-square"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-react"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-node-js"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-npm"></i>
          </li>
        </ul>
      </div>
    </section>
  );
}
