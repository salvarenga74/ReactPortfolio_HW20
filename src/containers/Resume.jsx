import React from "react";
import resumePDF from "../images/Sally_Alvarenga_Resume2021.pdf";
import resumePage1 from "../images/Sally_Alvarenga_Resume2021 (1).jpg";
import resumePage2 from "../images/Sally_Alvarenga_Resume2021 (2).jpg";

export default function About() {
  return (
    <section className="container" id="aboutMe">
      <h2>October 2021 Resume</h2>

      <article className="col resumeSection" style={{ display: "flex" }}>
        <div className="resumePage" style={{ border: "solid" }}>
          <img src={resumePage1} alt="page1  of resume" />
        </div>
        <div className="resumePage" style={{ border: "solid" }}>
          <img src={resumePage2} alt="page2 of resume" />
        </div>
      </article>

      <article
        className="text-center"
        id="resume"
        style={{ margin: "60px 0px" }}
      >
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
  );
}
