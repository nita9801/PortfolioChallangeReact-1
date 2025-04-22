import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="p-5 bg-light text-center">
      <h2>Portfolio</h2>
      <p>Showcase your projects here.</p>
    </section>
  );
};

export { Portfolio };

import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => {
    return (
        <div>
            <h3>{title}</h3>
            <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
            <p>
                <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</a> | 
                <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </p>
        </div>
    );
};

export default Project;