import React, { useState,useEffect } from 'react';
import './Contact.css';
  import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import emailjs from "emailjs-com";
import { toast } from 'react-toastify';


function Contact() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_zw8x5ge", // Replace with your service ID
      "template_pwyhq38", // Replace with your template ID
      e.target,
      "J_BWey6cYBZLaEJyF" // Replace with your public key
    )
    .then((result) => {
      toast.success("Email sent successfully!");
      console.log(result.text);
    })
    .catch((error) => {
      toast.error("Failed to send email.");
      console.error(error.text);
    });
};
 

  return (
    <div className="contact" id="contact">
      <div className="contact-header">
        <h2 data-aos="slide-up" >Contact Me</h2>
        <p>Feel free to get in touch for any inquiries or collaboration opportunities.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button className="super-button mt-3">
      <span className="button-text">Send Message</span>
    </button>
      </form>
    </div>
  );
};

export default Contact;
