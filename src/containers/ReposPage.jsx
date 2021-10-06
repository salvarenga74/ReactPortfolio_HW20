import React from 'react';
import image1 from '../assets/Images/aboutMe.png';
import image1 from '../assets/Images/aboutMe.png';
import image1 from '../assets/Images/aboutMe.png';

export default function Repos() {
  return (
     <main id="myApplications">
        <h2>My Applications</h2>

        <article >
            <h3>HTML Structuring</h3>
            <section class="cardContent">
                <p>Repository show casing a live page using HTML structuring elements from week one of coding bootcamp.</p>
                <a class="button" href="https://github.com/salvarenga74/prework-about-me" target="_blank" >View my Repo</a>
            </section>
            <a href="https://salvarenga74.github.io/prework-about-me/" target="_blank">
                  <img className="pageImage" src={image1} alt="Screen grab of deployed project Titles About Me"
                      style={{ width: '286px', height: '241px' }}/>
            </a>
        </article>

        <article>
            <h3>CSS Styling Work</h3>
            <section class="cardContent"> 
                <p>First completed homework that showcases my trouble shooting abilities in HTML and CSS elements by adding semantics and simplifying code.</p>
                <a href="https://github.com/salvarenga74/HW01-HoriseonTicket" class="button" target="_blank">View my Repo</a>
            </section>
        <a href="https://salvarenga74.github.io/HW01-HoriseonTicket/" target="_blank">
            {/* <img class="pageImage" src="./assets/Images/homework1.png" alt="Screen grab of deployed project Titles About Me" 
                style="width:286px;height:241px"> */}
        </a>
        </article>
        
        <article>
            <h3>Some Other Class Activity</h3>
            <section class="cardContent">
                <p>Class Activity showing how I have learned to design a Page that collects user information using CSS elements.</p>
                <a href="https://github.com/salvarenga74/Student-Activity-22" class="button" target="_blank">View my Repo</a>
            </section>
            <a href="https://salvarenga74.github.io/Student-Activity-22/" target="_blank">
                 {/* <img class="pageImage" src="assets/Images/studentActivity.png" alt="Screen grab of deployed project Titles About Me" 
                    style="width:286px;height:241px"> */}
             </a>
        </article>    
    </main>
  );
}