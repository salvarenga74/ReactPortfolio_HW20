import React from 'react';

export default function About() {
    return (
    <footer className="row" style={{marginBottom: "0%"}}>
    <p className="col-8" style={{textAlign: "end"}}> copyright 2021 Sally Alvarenga. All Rights Reserved.</p>
    <a className="btn btn-sm btn-primary" href="https://www.linkedin.com/in/sally-alvarenga-2020/">
      <i className=" fab fa-linkedin fa-2x" style={{textAlign: "end"}} ></i>
    </a>
    <a className="btn btn-sm btn-primary" href="https://github.com/salvarenga74">
      <i className="fab fa-github fa-2x" style={{textAlign: "end"}}></i>
    </a>
  </footer>
    );
}