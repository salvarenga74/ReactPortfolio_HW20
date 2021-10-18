import React from "react";

import aboutMeImg from "../images/IMG_0463.JPG";
import openingImg from "../images/IMG_0465.JPG";
import topTransition from "../images/topTransition.png";
import resumePDF from "../images/Sally_Alvarenga_Resume2021.pdf";

export default function About() {
  return (
    <article>
      <section
        className="jumbotron jumbotron-fluid openingBanner"
        style={{ margin: "0%" }}
      >
        <div className="row">
          <article className="col align-self-center">
            <h2 className="display-3 mt-0 mb-1 text-right">Hey, I'm</h2>
            <h1 className="display-3 mt-0 mb-1 text text-right">
              Sally Alvarenga
            </h1>
            <p className="lead text-right">
              A young and ambitious engineer, certified in full stack web
              development, eager to improve my work and the work of any team I
              become a part of.
            </p>
          </article>
          <article className="col justify-content-left">
            <img
              className=" img-fluid"
              id="headerImage"
              src={openingImg}
              alt="Sally Alvarenga from August 2020"
            />
          </article>
        </div>
      </section>

      <div style={{ marginTop: "-3px", width: "101.5%" }}>
        <img
          className=" img-fluid"
          src={topTransition}
          alt="transition for background"
        />
      </div>

      <section className="container" id="aboutMe">
        <h2>About Me</h2>
        <article className="row aboutMe" style={{ display: "flex" }}>
          <div className=" col aboutMePhoto" style={{ flexBasis: ".5%" }}>
            <img
              className=" img-fluid"
              src={aboutMeImg}
              alt="Sally in her Graduation Outfit"
            />
          </div>
          <section className=" col aboutMeContent">
            <p>
              I received my Bachelor's of Science degree in Biomedical
              Engineering from the University of Texas at Arlington in 2020. I
              then obtained my certification for Full Stack Web Development from
              the SMU Coding Boot Camp powered by Trilogy Education Services.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <article className="text-center" id="resume">
              <a
                href={resumePDF}
                download
                className="btn btn-lg btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Download Sally's Resume
              </a>
            </article>
          </section>
        </article>
      </section>
    </article>
  );
}
