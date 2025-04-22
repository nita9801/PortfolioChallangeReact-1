import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
    const projects = [
        {
            title: 'Project 1',
            image: 'https://via.placeholder.com/300',
            deployedLink: 'https://example.com/project1',
            repoLink: 'https://github.com/yourusername/project1',
        },
        {
            title: 'Project 2',
            image: 'https://via.placeholder.com/300',
            deployedLink: 'https://example.com/project2',
            repoLink: 'https://github.com/yourusername/project2',
        },
    ];

    return (
        <div className="container">
            <h2>Portfolio</h2>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </div>
    );
};

export default Portfolio;