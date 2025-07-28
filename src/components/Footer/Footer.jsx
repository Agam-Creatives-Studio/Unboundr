import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../../assets/UnboundrLogo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer p-md-5 p-3 mx-md-5 mx-2">

      <Row>
        {/* Column 1 - About Us */}
        <Col xs={12} md={3} className="footer-col">
          <h5>About Us</h5>
          <img className='footlog' src={Logo} alt="Logo" width="100" />
          <p className='para-section1 text-start' style={{ color: 'black' }}>
            Unboundr is an experiential learning facilitation company delivering immersive, gamified learning experiences that make real-world skill-building active, engaging, and lasting. </p>
        </Col>

        {/* Column 2 - Quick Links */}
        <Col xs={12} md={3} className="footer-col">
          <h5>Quick Links</h5>
          <ul className='para-section1' style={{ listStyle: 'none', paddingLeft: "2px", marginLeft: 0 }}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact-us'>Contact Us</Link></li>
            <div className="social-links">

              <div className="pt-3">
                <h5>Follow Us</h5>

                <a href="https://www.linkedin.com/company/unboundr" target="_blank" rel="noopener noreferrer" className="me-3" title="LinkedIn">
                  <i className="fab fa-linkedin fa-lg" style={{ color: '#0e76a8' }}></i>
                </a>

                <a href="https://www.instagram.com/unboundr_experiential?igsh=MW45N2pmYWw0ODAzZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="me-3" title="Instagram">
                  <i className="fab fa-instagram fa-lg" style={{ color: '#E1306C' }}></i>
                </a>



                <a
                  href="https://api.whatsapp.com/send?phone=9363700179&text=Hi Team,
I'm interested to know more about Unboundr Programs. Thank you!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3"
                  title="WhatsApp"
                >
                  <i className="fab fa-whatsapp fa-lg" style={{ color: '#25D366' }}></i>
                </a>
              </div>

            </div>
          </ul>
        </Col>

        {/* Column 3 - Programs */}
        <Col xs={12} md={3} className="footer-col">
          <h5>Programs</h5>
          <ul className='para-section1' style={{ listStyle: 'none', paddingLeft: "0px", marginLeft: 0 }}>
            <li><Link to="/Unboundr-X">Unboundr X</Link></li>
            <li><Link to="/Unboundr-Pro">Unboundr Pro</Link></li>
            <li><Link to="/Unboundr-Elevate">Unboundr Elevate</Link></li>
            <li><Link to="/Unboundr-Camp">Unboundr Camp</Link></li>
          </ul>
        </Col>

        {/* Column 4 - Contact Details */}
        <Col xs={12} md={3} className="footer-col">
          <h5>Contact</h5>

          <p className="contact-item">
            <i className="fa fa-phone"></i> <a className=' footer-link ms-2' href="tel:+919363700179"> +91 93637 00179</a>
          </p>

          <p className="contact-item">
            <i className="fa fa-envelope"></i> <a className=' footer-link ms-1' href="mailto:connect@unboundr.com"> connect@unboundr.com</a>
          </p>

          <p className="contact-item d-flex">
            <i className="fa fa-map-marker-alt fs-5"></i><p className='ms-2'> Chennai, Tamil Nadu, India</p> </p>


        </Col>

      </Row>

      {/* Bottom Row */}
      <Row className="pt-4">
        <Col xs={12} md={6} className="text-md-start">
          <p className="footer-copy mb-0">
            © 2025 Unboundr. All rights reserved.
          </p>
        </Col>
        <Col xs={12} md={6} className="text-md-end">
          <p className="footer-copy mb-0">
            Online Presence Powered by: <a target="_blank" rel="noopener noreferrer" className=' footer-link fw-bold' style={{ color: "#2B2A60" }} href="https://agamcreatives.com/"> : Agam Creative Studio</a> </p>
        </Col>
      </Row>

    </footer>
  );
}
