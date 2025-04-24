import React from 'react';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h2>Resume</h2>
            <a href="/resume.pdf" download>Download My Resume</a>
            <h3>Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
            </ul>
            <button onClick={() => navigate('/')} className="btn btn-primary">
                Return to Home
            </button>
        </div>
    );
};

export default Resume;