import React from 'react';
import { useNavigate } from 'react-router-dom';
import Project from '../components/Project';

const Portfolio = () => {
    const navigate = useNavigate();

    const projects = [
        {
            title: 'PeakeFit',
            image: 'src/assets/Screenshot 2024-12-15 154124.png',
            deployedLink: 'https://nita9801.github.io/PeakeFit/',
            repoLink: 'https://github.com/nita9801/PeakeFit.git',
        },
        {
            title: 'Fizz',
            image: 'src/assets/screenshot.png',
            deployedLink: 'https://fizz-pv3d.onrender.com',
            repoLink: 'https://github.com/nita9801/Fizz.git',
        },
    ];

    return (
        <div className="container">
            <h2>Portfolio</h2>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
            <button onClick={() => navigate('/')} className="btn btn-primary">
                Return to Home
            </button>
        </div>
    );
};

export default Portfolio;