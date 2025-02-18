import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="p-5">
      <h2>Contact</h2>
      <p>Email: your.email@example.com</p>
      <a href="https://github.com/yourprofile"><FaGithub size={30} /></a>
      <a href="https://linkedin.com/in/yourprofile"><FaLinkedin size={30} /></a>
    </section>
  );
};

export default Contact;
