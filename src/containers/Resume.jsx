import React from 'react';
import aboutMeImg from '../images/IMG_0463.JPG';
import resumePDF  from '../images/Sally_Alvarenga_Resume2021.pdf'

export default function About() {
  return (
   <section className="container" id="aboutMe">
    <h2>October 2021 Resume</h2>
      <article className="col aboutMe">
          <div className=" aboutMePhoto ">
              <img className=" img-fluid" src={aboutMeImg} alt="Sally in her Graduation Outfit"/>
          </div>
          <section className="  aboutMeContent">    
               <p>I received my Bachelor's of Science degree in Biomedical Engineering from the University of Texas at Arlington in 2020. I then obtained my certification for Full Stack Web Development from the SMU Coding Boot Camp powered by Trilogy Education Services.</p> 
     
            <article className="text-center" id="resume">
                <a href={resumePDF} download classNameName="btn btn-lg btn-primary"
                  target="_blank" rel="noreferrer">Download Sally's Resume</a>
            </article>
                  
          </section>  
      </article>
    </section>
  );
}