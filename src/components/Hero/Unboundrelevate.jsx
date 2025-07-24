import React, { useEffect } from 'react';
import './Programs.css';
import time from '../../assets/clock.png';
import cert from '../../assets/briefing.png';
import role from '../../assets/solution.png';
import teach from '../../assets/teachings.png';
import Unb from '../../assets/graduate-hat.png';
import buil from '../../assets/building.png';
import rock from '../../assets/rocket-white.png';
import stud from '../../assets/student.png';
import programeleData from '../../Data/programele';
import { motion } from 'framer-motion';
import GeneralEnquiryForm from './Components/GeneralEnquiryForm';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
  viewport: { once: false, amount: 0.2 },
};

const ProgramContent = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = "Unboundr - Experiential Learning & Soft Skills Training";
    const canonical = document.querySelector("link[rel='canonical']");
    if (canonical) {
      canonical.href = "https://unboundr.com/Unboundr-Elevate";
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = 'https://unboundr.com/Unboundr-Elevate';
      document.head.appendChild(link);
    }
  }, []);

  const { professionalSkills } = programeleData;

  return (
    <div className='program-cont px-md-0 px-3' style={{ backgroundColor: '#2B2A60' }}>
      <div className="program-x-section row d-flex justify-content-center align-items-center">
        <motion.h1 className='fw-bold page-title' 
              initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0 }}
        transition={{duration:0.6}}
        viewport={{once: false, amount: 0.2}}>
          Unboundr-Elevate
        </motion.h1>
      </div>

      <motion.h1 className='main-title2 py-4 text-center' 
            initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0 }}
        transition={{duration:0.6}}
        viewport={{once: false, amount: 0.2}}>
        Who Is It For ?
      </motion.h1>

      <div className="container-pro">
        <motion.div className="column" {...fadeUp}>
          <img src={stud} alt="Students" />
          <h3 className='sub-title'>Team Leads, Project Managers, First-time Managers</h3>
        </motion.div>

        <motion.div className="column" {...fadeUp}>
          <img src={Unb} alt="Startups" />
          <h3 className='sub-title'>Professionals transitioning from individual contributor to leadership roles</h3>
        </motion.div>

        <motion.div className="column" {...fadeUp}>
          <img src={buil} alt="Institutions" />
          <h3 className='sub-title'>Companies aiming to boost confidence, communication and leadership</h3>
        </motion.div>
      </div>

      <motion.h2 className="main-title2 text-center py-4" {...fadeUp}>What You Learn</motion.h2>

      <motion.div className="grid-container" {...fadeUp}>
        {[
          ['Professional Communication', 'Collaboration', 'Time Management'],
          ['Task Prioritization', 'Conflict Resolution', 'Feedback Culture'],
          ['Critical Thinking', 'Decision Making', 'Accountability'],
          ['Adaptability', 'Ownership', 'Growth Mindset']
        ].map((group, i) => (
          <motion.div className="grid-item" key={i}>
            {group.map((text, j) => (
              <div key={j}>
                <img src={rock} alt="" style={{ width: 20, height: 20, marginRight: 10 }} />
                {text}
                <br /><br />
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>

      <motion.h2 className="main-title2 section-heading py-4" {...fadeUp}>How It Works</motion.h2>

      <div className="card-grid">
        {[
          { img: teach, text: "On-campus workshops, hybrid bootcamps, outbound retreats, online programs", label: "Delivery Format" },
          { img: time, text: "On-campus workshops, hybrid bootcamps, outbound retreats", label: "Duration" },
          { img: role, text: "Hands-on simulations, gamified modules and outdoor activities", label: "Method" },
          { img: cert, text: "Iceberg Competency Model - traits, mindset & behavior focused", label: "Based on" },
        ].map((item, i) => (
          <motion.div className="card" key={i} {...fadeUp}>
            <img src={item.img} width="400px" alt={item.label} />
            <div className="card-text"><b>{item.label}:</b><br />{item.text}</div>
          </motion.div>
        ))}
      </div>

      <motion.div className="container" {...fadeUp}>
        <div className="outcome-grid">
          <motion.h2 className="main-title2 py-4 text-center" {...fadeUp}>Program Highlights</motion.h2>
          <div className='row d-flex justify-content-center'>
            {professionalSkills.map((benefit, index) => (
              <motion.div className='col-md-4' key={index} {...fadeUp}>
                <div className="benifitcard">
                  <img width={50} src={benefit.image} alt={benefit.domain} />
                  <h4>{benefit.domain}</h4>
                  <p>{benefit.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div className="wrapper pb-5" {...fadeUp}>
          <h1 className="main-title2 py-4 text-center">Ready to unlock real transformation?</h1>
          <div className="container-c">
            <div className="form-section">
              <GeneralEnquiryForm />
            </div>
            <div className="info-section">
              <h5 className='mt-5'>Get in Touch</h5>
              <p>Whether you're a college looking to empower students, a company building stronger teams, or an individual seeking to grow—let's start the conversation.</p>
              <p><strong>Email:</strong> <a className='footer-link' href="mailto:connect@unboundr.com">connect@unboundr.com</a></p>
              <p><strong>Phone / WhatsApp:</strong> <a className='footer-link' href="tel:+919363700179">+91 93637 00179</a></p>
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
                  href="https://api.whatsapp.com/send?phone=9363700179&text=Hi Team,\nI'm interested to know more about Unboundr Programs. Thank you!"
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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProgramContent;
