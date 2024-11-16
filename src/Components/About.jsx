import React,{useEffect} from 'react';
import './About.css';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function About() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <section className="container py-4">
      <div className="row">
        {/* About Me Column */}
        <div className="col-md-6 mb-3">
          <div className="p-4 about " style={{ borderRadius: '8px' }}>
            <h2 data-aos="fade-up" >About Me</h2>
            <p>
              Enthusiastic Full Stack Developer skilled in the MERN stack (MongoDB, Express.js, React.js, Node.js),
              with expertise in designing, developing, and implementing scalable web applications. Focused on delivering
              high-quality, user-centric solutions and committed to continuous learning and best practices.
            </p>


            <div><hr /></div>

            <h2 data-aos="fade-up" data-aos-delay="300">Experience</h2>
            <div className="experience-item">
              <div className="experience-content">
                <div className="job-title">MERN Stack Developer</div>
                <div className="company">Integos Intelligent Solutions</div>
                <div className="experience-date">01-07-2024 - current</div>
              </div>
            </div>

            <div><hr /></div>

            <h2 className="skills-title" data-aos="fade-up" data-aos-delay="400">Skills</h2>
            <div className="skills container">
              <div className="skill-button">JavaScript</div>
              <div className="skill-button">React</div>
              <div className="skill-button">Node.js</div>
              <div className="skill-button">Express.js</div>
              <div className="skill-button">MongoDB</div>
              <div className="skill-button">Angular</div>
              <div className="skill-button">HTML</div>
              <div className="skill-button">CSS</div>
              <div className="skill-button">Bootstrap</div>
              <div className="skill-button">Tailwind CSS</div>
              <div className="skill-button">PHP</div>
              <div className="skill-button">Laravel</div>
              <div className="skill-button">SQL</div>
              <div className="skill-button">REST API</div>


            </div>
          </div>
        </div>

        {/* Skills Column */}
        <div className="col-md-6 mb-3">
          <div className="p-4 skillss" style={{ borderRadius: '8px' }}>

            <section className="education">
              <h2 className="education-title" data-aos="fade-up" >Education</h2>

              <div className="education-item">
                <div className="icon">
                </div>
                <div className="content">
                  <h3 className="degree">MEARN Stack Development</h3>
                  <p className="institution">Luminar Technolab, Calicut</p>
                  <p className="date">2023-24</p>
                </div>
              </div>

              <div className="education-item">
                <div className="icon">
                </div>
                <div className="content">
                  <h3 className="degree">BSc Computer Science</h3>
                  <p className="institution">University of Calicut</p>
                  <p className="date">2020-23</p>
                </div>
              </div>

              <div className="education-item">
                <div className="icon">
                </div>
                <div className="content">
                  <h3 className="degree">Higher Secondary Education</h3>
                  <p className="institution">Directorate of Higher Secondary Education</p>
                  <p className="date">2018-20</p>
                </div>
              </div>

              <div className="education-item">
                <div className="icon">
                </div>
                <div className="content">
                  <h3 className="degree">Secondary Education</h3>
                  <p className="institution">Central Board of Secondary Education</p>
                  <p className="date">2018</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </section>

  );
};

export default About;

