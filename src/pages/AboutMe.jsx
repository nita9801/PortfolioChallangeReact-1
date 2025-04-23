import React from 'react';
import headshot from '../assets/headshot.jpg';

const AboutMe = () => {
    return (
        <div className="container">
            <h2>About Me</h2>
            <img src={headshot} alt="My Headshot" className="headshot" />
            <p> My name is Christine Lopez. I am the developer that you are looking for</p>
        </div>
    );
};

export default AboutMe;