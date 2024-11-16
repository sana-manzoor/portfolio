import React, { useEffect } from 'react';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="projects" className="projects">
      <h2 className='mt-5'>My Projects</h2>
      <div className="project-list">
        <div className="project-card" data-aos="fade-up">

          <div className="project-info">
            <h3>Food Delivery Application</h3>
            <p>Full-stack MERN application with a React.js front end, Node.js and Express back-end, and MongoDB for database management.Provides a seamless ordering experience for customers and efficient order management for restaurant owners.</p>
            <a href="https://github.com/sana-manzoor/food-app" target="_blank" rel="noopener noreferrer" className="project-link mb-3 ">
              View Project
            </a>
          </div>
        </div>

        <div className="project-card" data-aos="fade-up" data-aos-delay="200">

          <div className="project-info">
            <h3>Ecommerce Application</h3>
            <p>MERN e-commerce application with React.js front-end and Node.js/Express back-end,using MongoDB for data storage.Integrated Stripe for secure payment processing and Mail.js forautomated emails,enabling seamless online shopping functionality. </p>
            <a href="https://github.com/project2" target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        </div>

        <div className="project-card" data-aos="fade-up" data-aos-delay="300">

          <div className="project-info">
            <h3>Library Management System</h3>
            <p>A two-module MERN application for book reservations,with React.js for the front-end and Node.js/Express for the back-end. Implemented MongoDB as the database, supporting separate modules for Admin and Students. </p>
            <a href="https://github.com/sana-manzoor/library" target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
          
        </div>

        <div className="project-card" data-aos="fade-up" data-aos-delay="400">

          <div className="project-info">
            <h3>Book Review Application</h3>
            <p> Engineered a robust database solution utilizing MongoDB to enhance data retrieval efficiency by 30%, improving overall performance in response times for users interacting with both frontend and backend components. </p>
            <a href="https://github.com/sana-manzoor/book_review" target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        </div>

      </div>
    </section>

  );
};

export default Projects;
