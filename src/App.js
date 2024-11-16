import './App.css';
import { Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';




function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route />
      </Routes> */}
     
    <Header />
    <Hero />
    <About />
    <Projects />
<Contact/>
    <Footer/>
    <ToastContainer />

  
    
    </div>
  );
}

export default App;
