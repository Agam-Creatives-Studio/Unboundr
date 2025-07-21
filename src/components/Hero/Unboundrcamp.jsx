import React from 'react';
import './Programs.css';  // Ensure your styles are linked here
import About from '../../assets/team.jpg';  // Assuming you're using this image elsewhere
import { useEffect } from 'react'
import time from '../../assets/clock.png';
import cert from '../../assets/briefing.png';
import role from '../../assets/solution.png';
import teach from '../../assets/teachings.png';
import Unb from '../../assets/graduate-hat.png';
import buil from '../../assets/building.png';
import rock from '../../assets/rocket-white.png'
import stud from '../../assets/student.png';
import programcampData from '../../Data/programcamp';

import { motion } from 'framer-motion';
import GeneralEnquiryForm from './Components/GeneralEnquiryForm';

const ProgramContent = () => {

  //scroll-to-top
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [])

    //seo tags START
   useEffect(() => {
    document.title = "Unboundr - Experiential Learning & Soft Skills Training";
    const canonical = document.querySelector("link[rel='canonical']");
    if (canonical) {
      canonical.href = "https://unboundr.com/Unboundr-Camp";
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = 'https://unboundr.com/Unboundr-Camp';
      document.head.appendChild(link);
    }

    return () => {
      // Optional: remove canonical if navigating away
    };
  }, []);
   //seo tags END 

  const {
    teamSkills
  } = programcampData;


  return (
    <div className='program-cont px-md-0 px-3' style={{ backgroundColor: '#2B2A60' }}>
      <div className="program-x-section row d-flex justify-content-center align-items-center">
           <motion.h1
                 className='fw-bold page-title'
                 initial={{ opacity: 0, y: 50 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, ease: 'easeOut' }}
               >
                 Unboundr-Camp
               </motion.h1>
      </div>

      <h1 className='main-title2 py-4' style={{ textAlign: 'center' }} data-aos="fade-up">Who Is It For ?</h1>
      <div class="container-pro">
        {/* <!-- Column 1 --> */}
        <div class="column" data-aos="fade-up">
          <img src={stud} alt="Students" />

          <h3 className='sub-title'>Students, Faculty Teams, Corporate Teams, NGOs</h3>
        </div>

        {/* <!-- Column 2 --> */}
        <div class="column" data-aos="fade-up">
          <img src={Unb} alt="Students" />
          <h3 className='sub-title'>Organizations looking for transformational offsite bonding and capability building</h3>
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
      <div class="grid-container text-white" style={{ color: 'white' }} data-aos="fade-up">
        <div class="grid-item"><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} /> Trust Building
          <br /><br /><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} /> Emotional Intelligence<br />
          <br /> <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Strategic Thinking<br />
        </div>

        <div class="grid-item">    <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Decision Making<br />
          <br /> <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Coaching Conversations
          <br /> <br /><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Delegation
        </div>

        <div class="grid-item"><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Emotional Intelligence<br />
          <br /> <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Conflict Navigation
          <br /> <br /><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Accountability

        </div>



        <div class="grid-item">
          <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Adaptability
          <br /> <br /><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Ownership
          <br /> <br /><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Growth Mindset
        </div>

      </div>
      {/* 
           3 col */}

      {/* <!-- Section Heading --> */}
      <h2 class="main-title2 section-heading py-4" data-aos="fade-up">How It Works</h2>

      {/* <!-- Card Grid --> */}
      <div class="card-grid" data-aos="fade-up">

        {/* <!-- Card 1 --> */}
        <div class="card" data-aos="fade-up">
          <img src={teach} width='400px' alt="Unboundr Logo" />
          <div class="card-text"><b>Delivery Format:</b><br /> Outbound retreats at nature-centric resorts</div>
        </div>
        {/* 
               <!-- Card 2 --> */}
        <div class="card" data-aos="fade-up">
          <img src={time} width='400px' alt="Unboundr Logo" />
          <div class="card-text"> <b>Duration:</b><br />Customizable based on your company's or institution’s requirements.</div>
        </div>

        {/* <!-- Card 3 --> */}
        <div class="card" data-aos="fade-up">
          <img src={role} width='400px' alt="Unboundr Logo" />
          <div class="card-text"> <b>Method:</b><br />Hands-on simulations, gamified modules and outdoor activities</div>
        </div>

        {/* <!-- Card 4 --> */}
        <div class="card" data-aos="fade-up">
          <img src={cert} width='400px' alt="Unboundr Logo" />
          <div class="card-text"> <b>Based On:</b><br />Iceberg Competency Model - traits, mindset & behavior focused</div>
        </div>

      </div>
      {/* Program Highlights Table */}
      <div className='container'>
        <div className="outcome-grid" data-aos="fade-up">
          <h2 className="main-title2 py-4" style={{ textAlign: 'center' }} data-aos="fade-up">Program Highlights</h2>
          <div className='row d-flex justify-content-center'>
            {teamSkills.map((benfit) => (
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

        {/* <!-- Contact Section --> */}


        <div class="wrapper pb-5">
          <h1 style={{ textAlign: 'center' }} class="main-title2 py-4"> Ready to unlock real transformation?</h1>

          <div class="container-c ">
            {/* <!-- Left: Contact Form --> */}
            <div class="form-section">
              <GeneralEnquiryForm />
            </div>

            {/* <!-- Right: Contact Info --> */}
            <div class="info-section">
              <h5 className='mt-5' >Get in Touch</h5>
              <p>Whether you're a college looking to empower students, a company building stronger teams, or an individual seeking to grow—let's start the conversation.</p>
              <p><strong>Email:</strong> <a className=' footer-link' href="mailto:connect@unboundr.com">connect@unboundr.com</a></p>
              <p><strong>Phone / WhatsApp:</strong> <a className=' footer-link' href="tel:+919363700179">+91 93637 00179</a></p>
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
    </div>
  );
};

export default ProgramContent;
