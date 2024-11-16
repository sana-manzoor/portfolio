import React,{useEffect} from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Hero() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 >Hello, I'm <span className="hh" data-aos="fade-left">Fathima Sana</span></h1>
        <div className='d1 mb-3' data-aos="fade-down" data-aos-delay="600">
          Full-stack Developer | MERN Stack | Passionate Coder
        </div>
        
        <Link to="about" smooth={true} duration={500} className='mt-5' >
        <button className="super-button">
      <span className="button-text">ABOUT</span>
    </button>
        </Link>
        <a  href="/new_resume3.pdf" className='ms-5' download="My_Resume.pdf" >
        <button className="super-button">
      <span className="button-text">RESUME <i className="fa-solid fa-circle-down"></i></span>
    </button>
        </a>

      </div>
    </section>
  );
};

export default Hero;
