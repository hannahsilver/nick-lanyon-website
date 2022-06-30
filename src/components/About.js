import React from "react";
import aboutPhoto from "./images/aboutPhoto.jpg";
import {Link} from 'react-router-dom'
import MailLink from "./pages/MailLink";


function About(mailTo) {
    return(
        <div className="about">
                <div className="about-copy">
                    <h2>I am a Montréal-based musician, composer, and producer.</h2>
                    <p>Working from my home studio and at <a href="https://autolandaudio.com/" className="about-link">Autoland Audio</a>, I have experience with scoring film, audio engineering, and playing multiple instruments in recording sessions. I’m passionate about intricate arrangements, evocative harmony, and imaginative songwriting. Check out 
                    my <Link to="nicklanyon/" className="about-link">portfolio</Link> for recent examples of my work 
                    or <MailLink mailTo="mailTo:nicklanyon93@gmail.com" label="get in touch"></MailLink> to discuss a project.</p>
                </div>
                <div className="about-photo">
                    <img src={aboutPhoto} alt="Nick Lanyon in studio" />
                </div>
        </div>
    )
}

export default About