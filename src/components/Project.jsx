import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => (
    <div className="project">
        <h3>{title}</h3>
        {image && <img src={image} alt={`${title} screenshot`} />}
        <p>
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live Demo</a> | 
            <a href={repoLink} target="_blank" rel="noopener noreferrer"> GitHub Repo</a>
        </p>
    </div>
);

export default Project;