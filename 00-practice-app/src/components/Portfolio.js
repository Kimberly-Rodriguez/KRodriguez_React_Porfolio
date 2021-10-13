import React from 'react';
import '../App.css';

export default function Portfolio() {
  return (

<section id="work">
<h1>Work</h1>
<div>
  <a
    className="feature"
    href="https://parksmart2021.herokuapp.com/"
    target="_blank"
  >
    <img
      className="feature"
      src="assets/images/parkSmart.png"
      alt="project's #2 main landing page -- with a dropdown menu and submit button"
    />
    <div className="subtitle">
      <h3>ParkSmart</h3>
    </div>
  </a>
  <a
  className="link"
  href="https://kimberly-rodriguez.github.io/job-search/"
  target="_blank"
  ><img
    className="img"
    src="assets/images/jobsearchApplication.png"
    alt="project's #1 main landing page -- with a dropdown menu and submit button"
  />
  <div className="subtitle">
    <h3>Job Search Application </h3>
  </div>
</a>
<a
className="link"
href="https://watch.screencastify.com/v/3nvaGZMmsU24T3TVdhDS"
target="_blank"
><img
  className="img"
  src="assets/images/e_Commerce_Back_End.png"
  alt="video shot/layout of routes and backend application running"
/>
<div className="subtitle">
  <h3>E-Commerce-Back-End</h3>
</div>
</a>
  <a
    className="link"
    href="https://kimberly-rodriguez.github.io/weather-dashboard/"
    target="_blank"
    ><img
      className="img"
      src="assets/images/weatherDashboard.png"
      alt="the weather dashboard project's landing page"
    />
    <div className="subtitle">
      <h3>Weather Dashboard</h3>
    </div>
  </a>
  <a
    className="link"
    href="https://kimberly-rodriguez.github.io/work-day-scheduler/"
    target="_blank"
    ><img
      className="img"
      src="assets/images/workdaySheduler.png"
      alt="the work day scheduler project's landing page"
    />
    <div className="subtitle">
      <h3>Work Day Scheduler</h3>
    </div>
  </a>
  
</div>
</section>

);
}