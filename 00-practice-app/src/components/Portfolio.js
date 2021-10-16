import React from "react";
import "../App.css";
import parksmart from "../images/parkSmart.png";


export default function Portfolio() {
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Portfolio</h2>

        <div className="resume-section-content">
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <a
                href="https://parksmart2021.herokuapp.com/"
                target="_blank"
                className="mb-0"
                className="link"
                alt="project"
              >
                <img
                  className="img"
                  src={parksmart}
                  alt="ParkSmart App landing page"
                />
                <div>
                  <h3 className="subtitle">ParkSmart</h3>
                </div>
              </a>
              <div className="subheading mb-3">
                find public parking by neighborhood
              </div>
            </div>
            
            <div className="flex-grow-1">
              <a
                href="https://kimberly-rodriguez.github.io/job-search/"
                target="_blank"
                className="mb-0"
                className="link"
                alt="project"
              >
                <img
                  className="img"
                  src={parksmart}
                  alt="Job Search landing page"
                />
                <div>
                  <h3 className="subtitle">Job Search </h3>
                </div>
              </a>
              <div className="subheading mb-3">
                users to identify opportunities in their area
              </div>
            </div>
            
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
              <a
                href="https://watch.screencastify.com/v/3nvaGZMmsU24T3TVdhDS"
                target="_blank"
                className="mb-0"
                className="link"
                alt="project"
              >
                <img
                  className="img"
                  src={parksmart}
                  alt="E-Commerce landing page"
                />
                <div>
                  <h3 className="subtitle">E-Commerce</h3>
                </div>
              </a>
              <div className="subheading mb-3">
                Backend application 
              </div>
            </div>
            
            <div className="flex-grow-1">
              <a
                href="https://kimberly-rodriguez.github.io/weather-dashboard/"
                target="_blank"
                className="mb-0"
                className="link"
                alt="project"
              >
                <img
                  className="img"
                  src={parksmart}
                  alt="Weather Dashboard landing page"
                />
                <div>
                  <h3 className="subtitle">Weather Dashboard</h3>
                </div>
              </a>
              <div className="subheading mb-3">
                five day weather forecast with weather API  
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
              <a
                href="https://kimberly-rodriguez.github.io/work-day-scheduler/"
                target="_blank"
                className="mb-0"
                className="link"
                alt="project"
              >
                <img
                  className="img"
                  src={parksmart}
                  alt="Workday landing page"
                />
                <div>
                  <h3 className="subtitle">Workday Scheduler</h3>
                </div>
              </a>
              <div className="subheading mb-3">
                to stay on track of daily task by the hour
              </div>
            </div>
            
            <div className="flex-grow-1">
              <a
                href="https://intense-sierra-76167.herokuapp.com/?id=6168e3fd2e66b50016485ee4"
                target="_blank"
                className="mb-0"
                className="link"
                alt="project"
              >
                <img
                  className="img"
                  src={parksmart}
                  alt="Workout Tracker landing page"
                />
                <div>
                  <h3 className="subtitle">Workout Tracker</h3>
                </div>
              </a>
              <div className="subheading mb-3">
                user can track workout and accomplish health goals
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
