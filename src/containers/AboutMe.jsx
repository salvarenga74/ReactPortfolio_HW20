import React from 'react';
import img from '../assets/Images/IMG_0463.JPG'

export default function About() {
  return (
    <section id="aboutMe">
        <h2>About Me</h2>
        <section class="aboutMe" >
            <div class="gradPhoto">
                <img src={img} alt="Sally in her Graduation Outfit"/>
             </div>
            <section class="aboutMeContent">    
                 <p>I received my Bachelor's of Science degree in Biomedical Engineering from the University of Texas at Arlington in 2020. I then obtained my certification for Full Stack Web Development from the SMU Coding Boot Camp powered by Trilogy Education Services.</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>    
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </section>  
        </section>
    </section>
  );
}