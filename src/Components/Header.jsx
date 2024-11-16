import React,{useState} from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  const [show,setShow]=useState(false)
    window.addEventListener('scroll',()=>{
        if(window.scrollY>600){
            setShow(true)
        }
        else{
            setShow(false)
        }
    })
  return (
    <header className={`nav ${show && 'nav-black'}`}>
      <div className="logo ms-4">&lt;SANA&gt;</div>
      <nav className="nav-links">
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
