import Carousel from 'react-bootstrap/Carousel';
import Logo from '../../assets/UnboundrLogo.png';
import Founder from '../../assets/home_1.jpg'
import rock from '../../assets/rocket-lunch.png'
import rock_w from '../../assets/rocket-white.png'
import teach from '../../assets/teachings.png';
import online from '../../assets/video-call.png';
import game from '../../assets/gamet.png';
import flex from '../../assets/flexibility.png';


import './Hero.css';
import homeData from '../../Data/Home-data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import program_1 from '../../assets/ice.jpeg'
import comp from '../../assets/OBT_(1).jpg'
import clg from '../../assets/6.jpeg'
import About from '../../assets/Unboundr_Hero_image.jpg'
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import carousel1 from '../../assets/home/1.jpg';
import carousel2 from '../../assets/home/2.jpg';
import carousel3 from '../../assets/home/3.jpg';
import carousel4 from '../../assets/home/4.jpg';
import carousel5 from '../../assets/home/5.jpg';
import carousel6 from '../../assets/ezhilmaran-galleryimg1.jpg';
import carousel7 from '../../assets/ezhilmaran-galleryimg2.jpg';
import carousel8 from '../../assets/ezhilmaran-galleryimg8.jpg';
import carousel9 from '../../assets/ezhilmaran-galleryimg7.jpg';


import { motion } from 'framer-motion';
import GeneralEnquiryForm from './Components/GeneralEnquiryForm';
import AboutGallery from './Components/AboutGallery';
import FAQ from './Components/FAQ';


function ControlledCarousel() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);


  //seo tags START
  useEffect(() => {
    document.title = "Gamified Corporate Training & Experiential Learning | Unboundr";

    const metaDescription = document.querySelector("meta[name='description']");

    if (metaDescription) {
      metaDescription.content = "Drive results through experiential learning, corporate training, and gamified coaching for teams, founders, and students. Training that transforms.";
    }
    else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Drive results through experiential learning, corporate training, and gamified coaching for teams, founders, and students. Training that transforms.';
      document.head.appendChild(meta);

    }

    const canonical = document.querySelector("link[rel='canonical']");
    if (canonical) {
      canonical.href = "https://unboundr.com/";
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = 'https://unboundr.com/';
      document.head.appendChild(link);
    }



    return () => {
      // Optional: remove canonical if navigating away
    };
  }, []);

  useEffect(() => {
    // Organization schema
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Unboundr",
      "url": "https://unboundr.com",
      "logo": "https://unboundr.com/assets/UnboundrLogo-Bp4kQ9OD.png",
      "description": "Unboundr offers experiential learning and gamified training programs for students, startup founders, and corporate teams.",
      "sameAs": [
        "https://www.linkedin.com/company/unboundr",
        "https://www.instagram.com/unboundr_experiential?igsh=MW45N2pmYWw0ODAzZQ%3D%3D&utm_source=qr"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-93637 00179",
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": "English"
      }
    });

    // WebSite schema
    const siteScript = document.createElement('script');
    siteScript.type = 'application/ld+json';
    siteScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Unboundr",
      "url": "https://unboundr.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://unboundr.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    });

    document.head.appendChild(orgScript);
    document.head.appendChild(siteScript);

    // Cleanup (optional, but good for SPA)
    return () => {
      document.head.removeChild(orgScript);
      document.head.removeChild(siteScript);
    };
  }, []);
  //seo tags END

  const {
    ProductData, testimonials
  } = homeData

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  return (
    <>

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        data-bs-pause="false"
      >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
        </div>

        {/* ✅ Static Caption Outside the Slider */}
        <div className="custom-caption d-none d-md-block " style={{ zIndex: 10 }}>

          <h1>Corporate Training That Transforms Through Gamified Learning</h1>
          <p>
            Unleashing the untapped power of people through gamified,
            experiential learning. Because real transformation begins where
            textbooks end.
          </p>

        </div>

        <div className="carousel-inner">

         
          <div className="carousel-item active">
            <img src={carousel8} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carousel6} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carousel7} className="d-block w-100" alt="..." />
          </div>
              <div className="carousel-item">
            <img src={carousel9} className="d-block w-100" alt="..." />
          </div>
           <div className="carousel-item ">
            <img src={carousel3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carousel1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carousel4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carousel5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100" alt="..." />
          </div>
          

        </div>
      </div>



      {/* section one is completed  */}


      <div className="container pb-md-5 pb-3 mb-md-5 mt-md-0 mt-5">
        <motion.div
          className="section-title text-center pt-md-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="main-title2">Who We Are ?</h2>
        </motion.div>

        <div className="row align-items-center px-md-0 px-2">
          {/* <!-- Left Column: Dummy Image --> */}
          <motion.div className="col-md-6 mb-md-0 mb-4 "
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <img src={About} alt="corporate training workshop Chennai" className="img-fluid rounded shadow " data-aos="fade-right" />
          </motion.div>

          {/* <!-- Right Column: Dummy Content --> */}
          <motion.div className="col-md-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h2 className='section-title-black'> Gamified Coaching & Corporate Training for Future-Ready Skills</h2>
            <p style={{ textAlign: 'justify' }}>
              Unboundr is a future-skills education company that empowers students, young professionals, and corporate teams through experiential learning. We offer corporate training and gamified coaching through immersive, game-based programs grounded in psychology-backed coaching and real-world simulations. Our approach builds essential communication, leadership, and critical thinking skills, helping people thrive not just survive in a rapidly changing world.</p>

            <div className="mt-md-0 mt-4 pb-md-0 pb-4">
              <h2 className='section-title-black '>Why Unboundr?</h2>

              <div className="conten">
                <div className='pb-1' style={{ display: "flex", alignItems: "center" }}>
                  <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                  Gamified Coaching, Experiential Learning – not boring lectures
                </div>
                <div className='pb-1' style={{ display: "flex", alignItems: "center" }}>
                  <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                  Designed by Certified NLP, Corporate & Outbound Trainers
                </div>
                <div className='pb-1' style={{ display: "flex", alignItems: "center" }}>
                  <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                  Rooted in Iceberg Competency Framework
                </div>
                <div className='pb-1' style={{ display: "flex", alignItems: "center" }}>
                  <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                  Customizable for colleges, startups, MSMEs and corporates
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                  Delivered onsite, online, or at outbound retreats
                </div>
              </div>
            </div>


          </motion.div>
        </div>
      </div>


      <div className='program-container pb-md-5 pb-3 mb-md-5 mb-3'>
        <motion.div
          className="section-title text-center pt-4 row d-flex justify-content-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="col-md-9">
            <h2 className="main-title2 mb-3">Our Programs</h2>
            <p className="text-white text-center para-section1">
              Unboundr delivers impactful programs in corporate training, startup coaching, and student readiness through experiential, gamified learning.
            </p>
          </div>
        </motion.div>

        <div className="row">
          {
            ProductData.map((product, index) => (
              <motion.div key={index} className="col-md-3 "
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false }}
              >
                <div className="home-programs-card px-4 py-4">
                  <div className='d-flex flex-column align-items-center justify-content-between'>
                    <div>
                      <img width={70} className='mb-3' alt='experiential team-building program' src={product.image} />
                      <p className='sub-title'>{product.title}</p>
                      <p style={{ fontWeight: 'bold' }} className='title'>{product.subtitle}</p>
                      <p className=' text-center'>{product.para}</p>
                    </div>
                    <div className='pt-3'>
                      <Link to={`${product.route}`} className="carousel-btn primary">Read More</Link>

                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>


      <div className="" id="services">
        <div className="container pb-5">
          <motion.div
            className="section-title text-center pt-md-0 pt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h2 className="main-title2">Our Delivery Modes</h2>
          </motion.div>

          <div className="row justify-content-center">
            {/* Left Column */}
            <div className="col-md-6 d-flex flex-column">
              <motion.div
                className="service-desc mb-4"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <img src={teach} width='80px' alt="gamified coaching for leadership development" />
                <motion.p
                  className="section-title1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: false }}
                >
                  <b>Onsite Workshops</b>
                </motion.p>
                <motion.p
                  className="para-section"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  We bring the learning experience to your campus or workplace.
                  Interactive, face-to-face sessions built for real-time collaboration, peer learning, and hands-on simulations—right where your teams operate.
                </motion.p>
              </motion.div>

              <motion.div
                className="service-desc"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <img src={game} width='80px' alt="gamified coaching for leadership development" />
                <motion.p
                  className="section-title1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: false }}
                >
                  <b>Outbound Programs</b>
                </motion.p>
                <motion.p
                  className="para-section"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  Take your learning out of the boardroom and into nature.
                  Conducted at retreat spaces or adventure venues, these experiences blend physical challenges with leadership lessons, emotional insight, and team bonding.
                </motion.p>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="col-md-6 d-flex flex-column">
              <motion.div
                className="service-desc mb-4"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <img src={online} width='80px' alt="gamified coaching for leadership development" />
                <motion.p
                  className="section-title1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: false }}
                >
                  <b>Virtual Bootcamps</b>
                </motion.p>
                <motion.p
                  className="para-section"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  Distance is no barrier to transformation.
                  Our online programs are high-engagement and designed for modern learners—with breakout rooms, live facilitation, scenario-based challenges, and downloadable action sheets.
                </motion.p>
              </motion.div>

              <motion.div
                className="service-desc"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <img src={flex} width='80px' alt="gamified coaching for leadership development" />
                <motion.p
                  className="section-title1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: false }}
                >
                  <b>Blended Custom Paths</b>
                </motion.p>
                <motion.p
                  className="para-section"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  Not every team learns the same way—and that’s where we thrive.
                  We design flexible learning paths combining onsite intensives, online reinforcement, and outbound breakthroughs, tailored to your people, timelines, and goals.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className='program-container'>
        <motion.h2
          className='main-title2 text-center pb-0 pt-4'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Our Methodology
        </motion.h2>

        <motion.p
          style={{ color: 'white' }}
          className='para-section text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          Based on the Iceberg Competency Model
        </motion.p>

        <div className='programs mt-5'>
          {[
            {
              title: 'Traits',
              items: ['Focus', 'Adaptability', 'Resilience']
            },
            {
              title: 'Motives',
              items: ['Growth Mindset', 'Ethics', 'Empathy']
            },
            {
              title: 'Self-Image',
              items: ['Presence', 'Confidence', 'Ownership']
            },
            {
              title: 'Social Roles',
              items: ['Collaboration', 'Feedback', 'Leadership']
            },
            {
              title: 'Skills',
              items: ['Communication', 'Critical Thinking', 'Time Management']
            }
          ].map((program, index) => (
            <motion.div
              key={program.title}
              className="program"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <p
                className='section-title-black text-center mt-2'
                style={{ fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase' }}
              >
                {program.title}
              </p>
              <motion.img
                className='mb-2'
                src={program_1}
                alt=''
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              />
              <ul
                className='para-section'
                style={{ listStyleType: 'none', paddingLeft: 0, textAlign: 'center' }}
              >
                {program.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: false }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="caption"></div>
            </motion.div>
          ))}
        </div>
      </div>


      <div className="container pb-5">
        <h2 className='main-title2 text-center py-md-5 py-4' data-aos="fade-up">For Institutions</h2>
        <div className="row align-items-center px-2" data-aos="fade-up">
          {/* <!-- Left Column: Dummy Image --> */}
          <motion.div className="col-md-6 pb-md-0 pb-4"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}>
            <img src={clg} alt="campus to corporate student training" className="contant-img img-fluid rounded shadow" />
          </motion.div>

          {/* <!-- Right Column: Dummy Content --> */}
          <motion.div className="col-md-6 "
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}>
            <h2 className='section-title-black'>Build Career-Ready Graduates</h2>
            <p>
              If your students excel academically but struggle in interviews or real-world settings, it is not a subject knowledge issue—it is a people skills gap.</p>
            <h2 className='section-title-black pt-md-0 pt-4'>We help institutions:</h2>
            <div className="conten">
              <div className='pb-1' style={{ display: "flex", alignItems: "center" }}>
                <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                Improve placement-readiness and employability metrics
              </div>
              <div className='pb-1' style={{ display: "flex", alignItems: "center" }}>
                <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                Reduce employer dissatisfaction enriching soft skills in graduates
              </div>
              <div className='pb-1' style={{ display: "flex", alignItems: "center" }}>
                <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                Develop confident communicators, collaborators, team players and leaders
              </div>
              <div className='pb-1' style={{ display: "flex", alignItems: "center" }}>
                <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                Customizable experiential learning programs tailored for diverse student domains
              </div>
              <div className='pb-1' style={{ display: "flex", alignItems: "center" }}>
                <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                Scalable modules aligned with real-world industry expectations
              </div>
            </div>


            
              <div className="py-4">
                <Link to="/contact-us" className="carousel-btn primary">Enquire Now</Link>
              </div>
          </motion.div>
        </div>
      </div>
      <div className='program-container '>
        <div className=" pb-5">
          <motion.h2
            className='main-title2 text-center pt-4 pb-md-5 pb-4 '
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            For Companies
          </motion.h2>

          <div className="row align-items-center" data-aos="fade-up">
            {/* <!-- Left Column: Dummy Image --> */}
            <motion.div className="col-md-6 ps-md-5"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}>

          <div className="py-3">
                <h2 className='section-title-white'>Unlock Your Team’s Real Potential</h2>
              <p className='para-section1'>
                Even your best hire struggles without clarity, confidence, or collaboration. We help you build a workforce that thinks, adapts, leads, and grows.</p>
          </div>
              <h2 className='section-title-white'>Why Unboundr?</h2>
              <ul className='para-section1' style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li className='pb-2'><img src={rock_w} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Startups and MSMEs with lean but promising teams</li>
                <li className='pb-2'><img src={rock_w} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />L&D teams needing fresh, non-theory formats</li>
                <li className='pb-1'><img src={rock_w} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />CSR teams looking for youth-skilling impact partners</li>

              </ul>

              <div className="py-4">
                <Link to="/contact-us" className="carousel-btn primary">Enquire Now</Link>
              </div>

            </motion.div>

            {/* <!-- Right Column: Dummy Content --> */}
            <motion.div className="col-md-6"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}>
              <img src={comp} alt="Unboundr Logo" className="contant-img img-fluid rounded shadow" />
            </motion.div>
          </div>
        </div></div >
      {/* test slider */}
      < div className='test pb-5' >
        <motion.h2
          className='main-title2 text-center pt-5'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Client Testimonial
        </motion.h2>

        <div className="testimonial-slider">

          <Slider {...settings}>
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-card d-flex row justiyf-content-center align-items-center">
                <p className="testimonial-text">“{t.text}”</p>
                <h4 className="testimonial-name para-section1" style={{ textAlign: 'center' }}>{t.name}</h4>
                <p className="testimonial-role">{t.role}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div >


      <div className='program-container py-0   '>

        <section className=" col-md-9 mx-auto ">
          <motion.div
            className=""
            style={{ backgroundColor: '#ffffff00' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="founder-image">
              <motion.h2
                className='main-title2 text-center py-4 py-md-4'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
              >
                Meet Our Founder
              </motion.h2>
              <div className="d-flex justify-content-center">
                <motion.img
                  src={Founder}
                  alt="Founder Photo"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false }}
                />
              </div>
            </div>
            <motion.div
              className="founder-info"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <h3 className='section-title-black text-center text-white'>Sivakumar Damodaran</h3>
              <p className='para-section1 pb-md-4 pb-3'>
                Sivakumar Damodaran is a Corporate Trainer, Facilitator, C.E.O and Founder of Unboundr, holds a Master’s degree in Computer Applications and is a seasoned entrepreneur with almost two decades of experience leading his own ventures. He is a Certified NLP Life Coach, a Certified Professional Trainer in the Design and Facilitation of Experiential Learning, and a Certified Outbound Trainer.
              </p>
            </motion.div>
          </motion.div>
        </section>
      </div>

      <div className="about-gallery py-md-5 py-4 " style={{ backgroundColor: '#F9F9F9' }}>
        <motion.h2
          className='main-title2 text-center pb-4'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Our Gallery
        </motion.h2>

        <AboutGallery />
      </div>
{/* <hr />
      <div>
        <FAQ/>
      </div> */}

      {/* <!-- Contact Section --> */}

      <div className="program-container">
        <div className=" wrapper py-5 px-3">
          <h1 style={{ textAlign: 'center' }} className="main-title2 pb-4">
            Ready to unlock real transformation?
          </h1>

          <div className="container-c">
            {/* Left: Contact Form */}
            <div className="form-section">
              <GeneralEnquiryForm />
            </div>

            {/* Right: Contact Info */}
            <div className="info-section px-2">
              <h5 className="mt-5" >
                Get in Touch
              </h5>
              <p>
                Whether you're a college looking to empower students, a company building stronger teams, or an individual
                seeking to grow—let's start the conversation.
              </p>
              <p>
                <strong>Email:</strong> <a className=' footer-link' href="mailto:connect@unboundr.com"> connect@unboundr.com</a>
              </p>
              <p>
                <strong>Phone / WhatsApp:</strong> <a className=' footer-link' href="tel:+919363700179"> +91 93637 00179</a>
              </p>
              <p>
                <strong>Location:</strong> Chennai, Tamil Nadu, India
              </p>

              <div className="social-links">
                <p className="follow-us-text">Follow us:</p>
                <a
                  href="https://www.linkedin.com/company/unboundr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin fa-lg" style={{ color: '#0e76a8' }}></i>
                </a>

                <a
                  href="https://www.instagram.com/unboundr_experiential?igsh=MW45N2pmYWw0ODAzZQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3"
                  title="Instagram"
                >
                  <i className="fab fa-instagram fa-lg" style={{ color: '#E1306C' }}></i>
                </a>

                <a
                  href="https://api.whatsapp.com/send?phone=9363700179&text=Hi%20Team,I%27m%20interested%20to%20know%20more%20about%20Unboundr%20Programs.%C2%A0Thank%C2%A0you!"
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
    </>
  );
}
export default ControlledCarousel;

