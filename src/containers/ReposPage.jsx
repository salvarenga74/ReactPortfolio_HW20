import React from "react";

import weatherImage from "../images/weatherWebsite.png";
import employeeImage from "../images/videoThumbnail.png";
import workoutImage from "../images/statsPage.png";
import budgetImage from "../images/offlineBudgetTracker.png";
import kTVImage from "../images/kTVCollab.png";
import pharmacyImage from "../images/grayPharmacy.png";

export default function Repos() {
  return (
    //  <!-- PORTFOLIO CARD SECTION -->
    <section className=" container" style={{ marginTop: "50px" }}>
      {/* <!-- Row 1 --> */}
      <h3 id="selfCreatedApplications">Self Created Applications</h3>
      <article
        className=" repoProjectCard justify-content-center"
        style={{ display: "flex" }}
      >
        <div className="card project-card">
          <h4 className="card-header">Weather Dashboard</h4>
          <div className="card-body">
            <img
              src={weatherImage}
              alt="screenshot of repo"
              style={{ width: "100%", height: "180px", textAlign: "center" }}
            />
            <p className="card-text">
              I used two API's form a third-party to build a web application of
              my own. In combination with dynamically changing HTMl and CSS to
              create an overall clean and easy to use weather dashboard.
            </p>
            <a
              href="https://salvarenga74.github.io/WeatherPage_HW06/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
            <a
              href="https://github.com/salvarenga74/WeatherPage_HW06"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
          </div>
        </div>
        <div className="card project-card">
          <h4 className="card-header">Employee Manager</h4>
          <div className="card-body">
            <img
              src={employeeImage}
              alt="screenshot of repo"
              style={{ width: "100%", height: "180px", textAlign: "center" }}
            />
            <p className="card-text">
              This application is a content management systems (CMS),that will
              allow a user to view and manage a database of employees and their
              respective roles inside a company. This command-line application
              uses Node.js, Inquirer, and MySQL.
            </p>

            <a
              href="https://github.com/salvarenga74/EmployeeTracker_HW12"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
          </div>
        </div>
      </article>

      {/* <!-- Row 2 --> */}
      <h3 id="refactoringAssignments">Refactoring Assignments</h3>
      <article
        className="  repoProjectCard justify-content-center"
        style={{ display: "flex" }}
      >
        <div className="card project-card">
          <h4 className="card-header">Workout Tracker</h4>
          <div className="card-body">
            <img
              src={workoutImage}
              alt="screenshot of repo"
              style={{ width: "100%", height: "180px", textAlign: "center" }}
            />
            <p className="card-text">
              In this application the user can view, create, and track different
              exercises through out their daily workouts through the use of
              MongoDB and express routes.
            </p>
            <a
              href="https://desolate-chamber-19294.herokuapp.com/?id=6157ad8b54be660016cb02d3"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
            <a
              href="https://github.com/salvarenga74/Workout_Tracker-HW18"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
          </div>
        </div>
        <div className="card project-card">
          <h4 className="card-header">Offline Budget Tracker</h4>
          <div className="card-body">
            <img
              src={budgetImage}
              alt="screenshot of repo"
              style={{ width: "100%", height: "180px", textAlign: "center" }}
            />
            <p className="card-text">
              This application allows a user to maintain a budget regardless of
              network connection, by cashing and storing data until a network
              connection is established. After connection is made the database
              is updated and the storage is stored data is cleared.{" "}
            </p>
            <a
              href="https://shrouded-citadel-24994.herokuapp.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
            <a
              href="https://github.com/salvarenga74/Offline_Budget_Tracker-HW19"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
          </div>
        </div>
      </article>

      {/* <!-- Row 3 --> */}
      <h3 id="collaborativeProjects">Collaborative Projects</h3>
      <article
        className="repoProjectCard justify-content-center"
        style={{ display: "flex" }}
      >
        <div className="card project-card">
          <h4 className="card-header">kTV Online</h4>
          <div className="card-body">
            <img
              src={kTVImage}
              alt="screenshot of repo"
              style={{ width: "100%", height: "180px", textAlign: "center" }}
            />
            <p className="card-text">
              A fun application created by a team of 3 that can be used to
              karaoke by searching a song and retrieving the corresponding music
              video and lyrics.
            </p>
            <a
              href="https://salvarenga74.github.io/KTV_Live/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
            <a
              href="https://github.com/salvarenga74/KTV_Live"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
          </div>
        </div>
        <div className="card project-card">
          <h4 className="card-header">Gray Pharmacy</h4>
          <div className="card-body">
            <img
              src={pharmacyImage}
              alt="screenshot of repo"
              style={{ width: "100%", height: "180px", textAlign: "center" }}
            />
            <p className="card-text">
              Gray's Memorial Hospital's pharmacy system is designed for staff
              and patients to view their own portal.
            </p>
            <a
              href="https://pure-savannah-55760.herokuapp.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
            <a
              href="https://github.com/salvarenga74/Project02"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
          </div>
        </div>
      </article>
      <article className="text-center" style={{ margin: "50px 0px" }}>
        <a
          href="https://github.com/salvarenga74?tab=repositories"
          className="btn btn-lg btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          View All GitHub Repositories
        </a>
      </article>
    </section>
  );
}
