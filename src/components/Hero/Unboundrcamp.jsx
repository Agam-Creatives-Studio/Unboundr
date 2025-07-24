import React, { useEffect } from 'react';
import './Programs.css';
import About from '../../assets/team.jpg';
import time from '../../assets/clock.png';
import cert from '../../assets/briefing.png';
import role from '../../assets/solution.png';
import teach from '../../assets/teachings.png';
import Unb from '../../assets/graduate-hat.png';
import buil from '../../assets/building.png';
import rock from '../../assets/rocket-white.png';
import stud from '../../assets/student.png';
import programcampData from '../../Data/programcamp';
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
    document.title = 'Unboundr - Experiential Learning & Soft Skills Training';
    const canonical = document.querySelector("link[rel='canonical']");
    if (canonical) {
      canonical.href = 'https://unboundr.com/Unboundr-Camp';
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = 'https://unboundr.com/Unboundr-Camp';
      document.head.appendChild(link);
    }
  }, []);

  const { teamSkills } = programcampData;

  return (
    <div className="program-cont px-md-0 px-3" style={{ backgroundColor: '#2B2A60' }}>
      <div className="program-x-section row d-flex justify-content-center align-items-center">
        <motion.h1 className="fw-bold page-title"
              initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0 }}
        transition={{duration:0.6}}
        viewport={{once: false, amount: 0.2}} >Unboundr-Camp</motion.h1>
      </div>

      <motion.h1 className="main-title2 py-4 text-center" 
            initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0 }}
        transition={{duration:0.6}}
        viewport={{once: false, amount: 0.2}}>Who Is It For ?</motion.h1>

      <div className="container-pro">
        <motion.div className="column" {...fadeUp}>
          <img src={stud} alt="Students" />
          <h3 className="sub-title">Students, Institutions, Teams, Organisations, NGOs</h3>
        </motion.div>
        <motion.div className="column" {...fadeUp}>
          <img src={Unb} alt="Organizations" />
          <h3 className="sub-title">Organizations looking for transformational offsite bonding and capability building</h3>
        </motion.div>
        <motion.div className="column" {...fadeUp}>
          <img src={buil} alt="Institutions" />
          <h3 className="sub-title">Institutions/Organizations aiming to boost placement-readiness, workplace maturity and leadership</h3>
        </motion.div>
      </div>

      <motion.h2 className="main-title2 text-center py-4" {...fadeUp}>What You Learn</motion.h2>

      <motion.div className="grid-container text-white" {...fadeUp}>
        {[ ["Trust Building", "Emotional Intelligence", "Strategic Thinking"],
           ["Decision Making", "Coaching Conversations", "Delegation"],
           ["Emotional Intelligence", "Conflict Navigation", "Accountability"],
           ["Adaptability", "Ownership", "Growth Mindset"] ].map((group, i) => (
          <div className="grid-item" key={i}>
            {group.map((item, j) => (
              <div key={j}>
                <img src={rock} alt="icon" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                {item}<br /><br />
              </div>
            ))}
          </div>
        ))}
      </motion.div>

      <motion.h2 className="main-title2 section-heading py-4" {...fadeUp}>How It Works</motion.h2>

      <div className="card-grid">
        {[
          { img: teach, text: <> <b>Delivery Format:</b><br />Outbound retreats at nature-centric resorts</> },
          { img: time, text: <> <b>Duration:</b><br />Customizable based on your company’s or institution’s requirements.</> },
          { img: role, text: <> <b>Method:</b><br />Hands-on simulations, gamified modules and outdoor activities</> },
          { img: cert, text: <> <b>Based On:</b><br />Iceberg Competency Model - traits, mindset & behavior focused</> }
        ].map((card, idx) => (
          <motion.div className="card" key={idx} {...fadeUp}>
            <img src={card.img} width="400px" alt="Unboundr Card" />
            <div className="card-text">{card.text}</div>
          </motion.div>
        ))}
      </div>

      <div className="container">
        <motion.div className="outcome-grid" {...fadeUp}>
          <h2 className="main-title2 py-4 text-center">Program Highlights</h2>
          <div className="row d-flex justify-content-center">
            {teamSkills.map((benfit, idx) => (
              <motion.div className="col-md-4" key={idx} {...fadeUp}>
                <div className="benifitcard">
                  <img width={50} src={benfit.image} alt={benfit.domain} />
                  <h4>{benfit.domain}</h4>
                  <p>{benfit.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="wrapper pb-5">
        <motion.h1 className="main-title2 py-4 text-center" {...fadeUp}>Ready to unlock real transformation?</motion.h1>

        <div className="container-c">
          <motion.div className="form-section" {...fadeUp}>
            <GeneralEnquiryForm />
          </motion.div>

          <motion.div className="info-section" {...fadeUp}>
            <h5 className="mt-5">Get in Touch</h5>
            <p>Whether you're a college looking to empower students, a company building stronger teams, or an individual seeking to grow—let's start the conversation.</p>
            <p><strong>Email:</strong> <a className="footer-link" href="mailto:connect@unboundr.com">connect@unboundr.com</a></p>
            <p><strong>Phone / WhatsApp:</strong> <a className="footer-link" href="tel:+919363700179">+91 93637 00179</a></p>
            <p><strong>Location:</strong> Chennai, Tamil Nadu, India</p>
            <div className="social-links">
              <p className="follow-us-text">Follow us:</p>
              <a href="https://www.linkedin.com/company/unboundr" target="_blank" rel="noreferrer" className="me-3">
                <i className="fab fa-linkedin fa-lg" style={{ color: '#0e76a8' }}></i>
              </a>
              <a href="https://www.instagram.com/unboundr_experiential" target="_blank" rel="noreferrer" className="me-3">
                <i className="fab fa-instagram fa-lg" style={{ color: '#E1306C' }}></i>
              </a>
              <a href="https://api.whatsapp.com/send?phone=9363700179&text=Hi Team, I'm interested to know more about Unboundr Programs. Thank you!" target="_blank" rel="noreferrer" className="me-3">
                <i className="fab fa-whatsapp fa-lg" style={{ color: '#25D366' }}></i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProgramContent;