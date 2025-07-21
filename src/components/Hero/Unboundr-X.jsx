import React, { useEffect } from 'react';
import './Programs.css';
import About from '../../assets/team.jpg';
import time from '../../assets/clock.png';
import cert from '../../assets/briefing.png';
import role from '../../assets/solution.png';
import teach from '../../assets/teachings.png';
import '../Hero/unbounder-x.css';
import Unb from '../../assets/graduate-hat.png';
import buil from '../../assets/building.png';
import rock from '../../assets/rocket-white.png'
import stud from '../../assets/student.png';
import programxData from '../../Data/programx';

import { motion } from 'framer-motion';
import GeneralEnquiryForm from './Components/GeneralEnquiryForm';

const ProgramContent = () => {

  //scroll to top
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);

    //seo tags START
     useEffect(() => {
      document.title = "Unboundr - Experiential Learning & Soft Skills Training";
      const canonical = document.querySelector("link[rel='canonical']");
      if (canonical) {
        canonical.href = "https://unboundr.com/Unboundr-X";
      } else {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = ' https://unboundr.com/Unboundr-X';
        document.head.appendChild(link);
      }
  
      return () => {
        // Optional: remove canonical if navigating away
      };

    }, []);
     //seo tags END

  const {
    skillDomains
  } = programxData;

  return (
    <div className='program-cont px-md-0 px-3' style={{ backgroundColor: '#2B2A60' }}>
      <div className="program-x-section row d-flex justify-content-center align-items-center">
        <motion.h1
          className='fw-bold page-title'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Unboundr-X
        </motion.h1>
      </div>

      <h1 className='main-title2 py-4' style={{ textAlign: 'center' }} data-aos="fade-up">Who Is It For ?</h1>
      <div class="container-pro">
        {/* <!-- Column 1 --> */}
        <div class="column" data-aos="fade-up">
          <img src={stud} alt="Students" />

          <h3 className='sub-title'>Final-year and pre-final-year college students</h3>
        </div>

        {/* <!-- Column 2 --> */}
        <div class="column" data-aos="fade-up">
          <img src={Unb} alt="Students" />
          <h3 className='sub-title'>Streams: Engineering, IT, Management, Arts & Science</h3>
        </div>

        {/* <!-- Column 3 --> */}
        <div class="column" data-aos="fade-up">
          <img src={buil} alt="Students" />
          <h3 className='sub-title'>Institutions aiming to boost placement-readiness, confidence, communication and leadership</h3>
        </div>
      </div>
      {/* 2 pro */}

      {/* <!-- Top 3 Column Section --> */}


      {/* <!-- Centered Heading --> */}
      <h2 class="main-title2 text-center py-4" data-aos="fade-up">What You Learn</h2>

      {/* <!-- 4x3 Grid Paragraphs --> */}
      <div class="grid-container" style={{ boxShadow: '1px', borderRadius: '20px' }} data-aos="fade-up">
        <div class="grid-item text-white"><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Business English
          <br /><br /><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Email Etiquette<br />
          <br /> <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Team Collaboration<br />
        </div>

        <div class="grid-item text-white">    <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Leadership Communication<br />
          <br /> <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Resume Building
          <br /> <br /><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Interview Mastery
        </div>

        <div class="grid-item text-white"><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Time Management<br />
          <br /> <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Focus
          <br /> <br /><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Stress Handling

        </div>



        <div class="grid-item text-white">
          <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Integrity
          <br /> <br /><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Initiative
          <br /> <br /><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Growth Mindset
        </div>

      </div>
      {/* 
    3 col */}

      {/* <!-- Section Heading --> */}
      <h2 class="main-title2 section-heading py-4" data-aos="fade-up">How It Works</h2>

      {/* <!-- Card Grid --> */}
      <div class="card-grid">

        {/* <!-- Card 1 --> */}
        <div class="card" data-aos="fade-up">
          <img src={teach} width='400px' alt="Unboundr Logo" />
          <div class="card-text"><b>Delivery Format:</b><br /> On-campus workshops, hybrid bootcamps, outbound retreats, online programs</div>
        </div>
        {/* 
        <!-- Card 2 --> */}
        <div class="card" data-aos="fade-up">
          <img src={time} width='400px' alt="Unboundr Logo" />
          <div class="card-text"><b>Duration:</b><br />Customizable based on your company's or institution’s requirements.</div>
        </div>

        {/* <!-- Card 3 --> */}
        <div class="card" data-aos="fade-up">
          <img src={role} width='400px' alt="Unboundr Logo" />
          <div class="card-text"><b>Method:</b><br />Hands-on simulations, gamified modules and outdoor activities</div>
        </div>

        {/* <!-- Card 4 --> */}
        <div class="card" data-aos="fade-up">
          <img src={cert} width='400px' alt="Unboundr Logo" />
          <div class="card-text"><b>Based on:</b><br /> Iceberg Competency Model - traits, mindset & behavior focused</div>
        </div>

      </div>
      {/* Program Highlights Table */}
      <div className='container'>
        <div className="outcome-grid" data-aos="fade-up">
          <h2 className="main-title2 py-4" style={{ textAlign: 'center' }} data-aos="fade-up">Program Highlights</h2>
          <div className='row d-flex justify-content-center'>
            {skillDomains.map((benfit) => (
              <div className='col-md-4'>
                <div className="benifitcard">
                  <img width={50} src={benfit.image}></img>
                  <h4>{benfit.domain}</h4>
                  <p>{benfit.outcome}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <!-- Contact Section --> */}


      <div class="wrapper py-4">
        <h1 style={{ textAlign: 'center' }} class="main-title2 pb-4"> Ready to unlock real transformation?</h1>

        <div class="container-c ">
          {/* <!-- Left: Contact Form --> */}
          <div class="form-section">
               <GeneralEnquiryForm/>
          </div>

          {/* <!-- Right: Contact Info --> */}
          <div class="info-section">
            <h5 className='mt-5' >Get in Touch</h5>
            <p>Whether you're a college looking to empower students, a company building stronger teams, or an individual seeking to grow—let's start the conversation.</p>
            <p><strong>Email:</strong> <a className=' footer-link' href="mailto:connect@unboundr.com"> connect@unboundr.com</a></p>
            <p><strong>Phone / WhatsApp:</strong> <a className=' footer-link' href="tel:+919363700179"> +91 93637 00179</a></p>
            <p><strong>Location:</strong> Chennai, Tamil Nadu, India</p>
            <div className="social-links">
              <p className="follow-us-text">Follow us:</p>
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
        </div>

      </div>
    </div>
  );
};

export default ProgramContent;
