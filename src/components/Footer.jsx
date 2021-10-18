import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <footer className="row" style={{ marginBottom: "0%", display: "block" }}>
      <div style={{ display: "flex" }}>
        <p className="col-8" style={{ textAlign: "end" }}>
          Copyright 2021 Sally Alvarenga. All Rights Reserved.
        </p>
        <div className="iconContainer">
          <a
            className="btn btn-md btn-primary"
            href="https://www.linkedin.com/in/sally-alvarenga-2020/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className="btn btn-md btn-primary"
            href="https://github.com/salvarenga74"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
}
