import React from 'react';
import headshot from '../assets/headshot.jpg';

const AboutMe = () => {
    return (
        <div className="container">
            <h2>About Me</h2>
            <img src={headshot} alt="My Headshot" className="headshot" />
            <p> My name is Christine L. I am currently studying to become a software engineer. and I am excited to see you </p>
                
        </div>
    );
};

export default AboutMe;