import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="p-5 bg-light text-center">
      <h2>Resume</h2>
      <a href="/path-to-your-resume.pdf" download className="btn btn-primary">
        Download Resume
      </a>
    </section>
  );
};

export default Resume;

