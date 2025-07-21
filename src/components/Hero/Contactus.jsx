import React from 'react'
import { useEffect } from 'react'
import './Contactus.css'
import ContactUsForm from './Components/ContactUsForm';
function Contactus() {

  //scroll-to-top
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
        canonical.href = "https://unboundr.com/contact-us";
      } else {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = 'https://unboundr.com/contact-us';
        document.head.appendChild(link);
      }
  
      return () => {
        // Optional: remove canonical if navigating away
      };
    }, []);
     //seo tags END 

  return (
    <div>
      <div className="landing_page">
        <div className="responsive-container-block big-container">
          <div className="responsive-container-block container">
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 left-one">
              <div className="content-box">
                <p className="main-title2">
                  Ready to unlock real transformation?
                </p>
                <p className='text-black'>
                  Whether you're a college looking to empower students, a company building stronger teams, or an individual seeking to grow—let's start the conversation.</p>
                <div class="info-section">
                  <p className='para-section'><strong>Email:</strong> <a className=' footer-link ms-1' href="mailto:connect@unboundr.com">connect@unboundr.com</a></p>
                  <p className='para-section'><strong>Phone / WhatsApp:</strong><a className=' footer-link ms-1' href="tel:+919363700179">+91 93637 00179</a></p>
                  <p className='para-section'><strong>Location:</strong> <span className="text-black ms-1">Chennai, Tamil Nadu, India</span></p>
                  <div className="social-links">
                    <p className="para-section follow-us-text"><b>Follow us:</b></p>
                    <a href="https://www.linkedin.com/company/unboundr" target="_blank" rel="noopener noreferrer" className="me-3" title="LinkedIn">
                      <i className="fab fa-linkedin fa-lg" style={{ color: '#0e76a8' }}></i>
                    </a>

                    <a href="#" target="_blank" rel="noopener noreferrer" className="me-3" title="Instagram">
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
            <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6 right-one" id="i1zj">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus
