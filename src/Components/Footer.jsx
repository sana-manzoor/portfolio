import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div class="footer">
  <div class="footer-container">
    <div class="footer-section footer-logo">
      <h2 className="logo">&lt;SANA&gt;</h2>
    </div>
    <div class="footer-section footer-social">
      <ul>
        <li><a href="https://github.com/sana-manzoor/" target="_blank" class="footer-link">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/sana-manzoor-26a151261/" target="_blank" class="footer-link">LinkedIn</a></li>
      </ul>
    </div>
  </div>
</div>
  );
};

export default Footer;
