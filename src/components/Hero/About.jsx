import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from '../../assets/team.jpg';
import Founder from '../../assets/home_1.jpg';
import note from '../../assets/about_1.jpg';

import miss from '../../assets/mission.png';
import Log from '../../assets/UnboundrLogo.png';
import vision from '../../assets/shared-vision.png';

import './About.css';
import AboutGallery from './Components/AboutGallery';

const About = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = 'Unboundr - About Us';
    const canonical = document.querySelector("link[rel='canonical']");
    if (canonical) {
      canonical.href = 'https://unboundr.com/about';
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = 'https://unboundr.com/about';
      document.head.appendChild(link);
    }
  }, [])

  return (
    <div>

      <div className="about-section row d-flex justify-content-center align-items-center">
        <motion.h1
          className='fw-bold'
          style={{ textShadow: '4px 4px rgba(0, 0, 0, 0.9)', fontSize: '72px' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          About Us
        </motion.h1>
      </div>

      <section className="about-us pt-5 mb-5">
        <div className="about">
          <motion.img
            className='aboutimg'
            src={Log}
            alt="Logo"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          />
          <div className="text">
            <motion.p
              className='para-section'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              Unboundr is an experiential learning facilitation company committed to transforming the
              way people learn. Through immersive, gamified experiences, we help individuals and teams
              engage deeply with real-world scenarios—making learning active, enjoyable, and lasting.
              Grounded in the Iceberg Competency Model, our programs addresses both visible skills and
              the deeper, often overlooked traits, motives, and mindset that drive lasting success.
              We believe that when learning is experienced, not just taught, it becomes meaningful and
              memorable. Our approach replaces passive instruction with hands-on exploration, breaking
              the monotony of traditional training and inspiring lasting growth.
            </motion.p>
            <motion.p
              className='para-section'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              Whether you are a student preparing for the future, a professional sharpening your skills, or
              an organization building stronger teams, Unboundr ignites your transformation through
              experience and gives you power.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="mission-vision-section">
        <div className="container-mv">
          <div className="mv-box">
            <img src={miss} width='80px' alt="Unboundr Logo" />
            <motion.h2
              className='main-title2'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              Mission
            </motion.h2>
            <motion.p
              className='para-section'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              Our mission is to empower individuals to realize and enhance their potential through immersive, experiential learning that builds confidence, sharpens capabilities, and drives meaningful transformation.
            </motion.p>
          </div>

          <div className="mv-box">
            <img src={vision} width='80px' alt="Unboundr Logo" />
            <motion.h2
              className='main-title2'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              Vision
            </motion.h2>
            <motion.p
              className='para-section'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              Our vision is to be the global leader in experiential learning by 2030, empowering individuals and organizations worldwide to enhance their potential through transformative, experience-driven learning.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="founder-section">
        <div className="container">
          <div className="founder-image ">
            <motion.h2
              className='main-title2 text-center py-4'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              Meet Our Founder
            </motion.h2>
            <motion.img
              src={Founder}
              alt="Founder Photo"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            />
          </div>
          <div className="founder-info">
            <motion.h3
              className='section-title-black text-center'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              Sivakumar Damodaran
            </motion.h3>
            <motion.p
              className='para-section'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              Sivakumar is a Corporate Trainer, Facilitator, C.E.O and Founder of Unboundr, holds a Master’s degree in Computer Applications and is a seasoned entrepreneur with almost two decades of experience leading his own ventures. He is a Certified NLP Life Coach, a Certified Professional Trainer in the Design and Facilitation of Experiential Learning, and a Certified Outbound Trainer.<br /><br />
              “I strongly believe that more than the traditional teaching, experiential learning along with engaging game based methods etch a long-lasting lesson in one’s mind, which ultimately transforms how one leads both personal and professional life.”<br /><br />

            </motion.p>
            <p style={{ textAlign: 'right' }}>– Sivakumar Damodaran, Founder and C.E.O</p>
          </div>
        </div>
      </section>

      <div className="founder-image">
        <motion.h2
          className='main-title2 text-center py-4'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Founder’s Note
        </motion.h2>
        <motion.img
          src={note}
          alt="Founder Photo"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        />
      </div>

      <section className="about-us pt-5 mb-5">
        <div className="text">
          <motion.p
            className='para-section pt-0'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            I strongly believe that more than traditional teaching, experiential learning combined with engaging, game-based methods leaves a deep and lasting impression on the mind. These approaches have the power to transform how one leads both personal and professional life. When I personally experienced such training, I was able to truly understand the concepts—in a way that was both fun and meaningful. It changed my perception, shifted my thinking, and redirected my career path. That experience inspired me deeply, and I knew I wanted to bring the same kind of training to others—to help them discover their strengths, unlock their potential, and live with clarity and confidence. At a personal level, I am passionate about empowering faith, hope, courage, and confidence in people so they can lead fulfilled lives. Through Unboundr, I am committed to creating that transformation in individuals and teams through thoughtfully designed, experience-driven programs.<br /><br />
            I would like to express my heartfelt gratitude to two key people who played a vital role in turning this dream into reality: I am thankful to <b>Bhavya Sathyamurthy</b>, Founder and C.E.O of <a href="https://agamcreatives.com/" target='_blank' className=' fw-bold'>Agam Creative Studio</a>, for helping me bring clarity to my ideas and shaping them into a defined product and service. Bhavya supports MSME owners in gaining recognition, increasing visibility, and building successful businesses. Inspired by her daughter’s lesson—“Sharing is Caring”—she has built Agam’s culture on the foundation of collaboration and impact. Her organization is passionate about creating a ripple effect of joy and peace in families and communities.<br /><br />
            I am equally grateful to <b>Priya</b>, Corporate Trainer, Facilitator, Program Designer, and Soft Skills Trainer, for her innovative ideas and consistent support in designing our programs. Her belief that people learn best through games, activities, and reflection is at the heart of our approach. She has helped ensure that what people learn with us stays with them—and positively transforms the way they think, communicate, and lead in both work and life.

          </motion.p>
          <p style={{ textAlign: 'right' }}>
            — Sivakumar Damodaran<br />
            Founder & C.E.O, Unboundr
          </p>
        </div>
      </section>

      <div className="about-gallery py-5 mb-md-5" style={{ backgroundColor: '#F9F9F9' }}>
        <motion.h2
          className='main-title2 text-center py-4'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Our Gallery
        </motion.h2>

        <AboutGallery />
      </div>


    </div>
  );
};

export default About;
