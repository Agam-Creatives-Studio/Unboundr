import React from 'react';
import './Programs.css';
import About from '../../assets/team.jpg';
import Unb from '../../assets/graduate-hat.png';
import buil from '../../assets/building.png';
import rock from '../../assets/rocket-lunch.png'
import stud from '../../assets/student.png';

const ProgramContent = () => {
  return (
    
    <div className='program-cont' style={{backgroundColor:'#2B2A60'}}>
        <div className="program-x-section">
        {/* You can add a background image here */}
      </div>

      <h1 className='main-title2' style={{textAlign:'center'}}>Who It’s For ?</h1>
      <div class="container-pro">
    {/* <!-- Column 1 --> */}
    <div class="column">
      <img src={stud} alt="Students"/>

      <h3>Interns, management trainees, and entry-level hires (0–3 years experience)</h3>
    </div>

    {/* <!-- Column 2 --> */}
    <div class="column">
      <img src={Unb} alt="Students"/>
      <h3>Startups, SMEs, and growing teams looking to boost early employee performance</h3>
    </div>

    {/* <!-- Column 3 --> */}
    <div class="column">
      <img src={buil} alt="Students"/>
      <h3>Institutions aiming to boost placement-readiness, confidence, and communication</h3>
      </div>
  </div>
{/* 2 pro */}

{/* <!-- Top 3 Column Section --> */}
 

  {/* <!-- Centered Heading --> */}
  <h2 class="main-title2 text-center">What You Learn</h2>

  {/* <!-- 4x3 Grid Paragraphs --> */}
  <div class="grid-container">
    <div class="grid-item"><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} /> Professional Communication
      <br/><br/><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Collaboration<br/>
     <br/> <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Time Management <br/>
   </div>
    
    <div class="grid-item">    <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Task Prioritization<br/>
     <br/> <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Conflict Resolution
     <br/> <br/><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Feedback Culture
   </div>

    <div class="grid-item"><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Critical Thinking<br/>
   <br/> <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Decision Making
     <br/> <br/><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Accountability

      </div>
    
  
    
    <div class="grid-item">
            <img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Adaptability     
            <br/> <br/><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Ownership     
             <br/> <br/><img src={rock} alt="Unboundr Logo" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Growth Mindset
    </div>
   
  </div>
{/* 
3 col */}

{/* <!-- Section Heading --> */}
  <h2 class="main-title2 section-heading">How It Works</h2>

  {/* <!-- Card Grid --> */}
  <div class="card-grid">

    {/* <!-- Card 1 --> */}
    <div class="card">
      <img src={rock} width='400px' alt="Unboundr Logo"/>
      <div class="card-text">Time Management Delivery Format: On-campus workshops, hybrid bootcamps, outbound retreats</div>
    </div>
{/* 
    <!-- Card 2 --> */}
    <div class="card">
      <img src={rock} width='400px' alt="Unboundr Logo"/>
      <div class="card-text">Delivery Format: Onsite (office) or Online (virtual labs)</div>
    </div>

    {/* <!-- Card 3 --> */}
    <div class="card">
      <img src={rock} width='400px' alt="Unboundr Logo"/>
      <div class="card-text">Duration: 1–2 days, customizable formats</div>
    </div>

    {/* <!-- Card 4 --> */}
    <div class="card">
      <img src={rock} width='400px' alt="Unboundr Logo"/>
      <div class="card-text">Method: Gamified simulations, breakout activities, real-time debriefs</div>
    </div>

  </div>
 {/* Program Highlights Table */}
   <div className='container'>
        <div className="outcome-grid">
          <h2 className="main-title2" style={{ textAlign: 'center',color:'white' }}>Program Highlights</h2>
          <table className="outcome-table">
            <thead>
              <tr>
                <th>Skill Domain</th>
                <th>Transformation Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Communication</td>
                <td>Clear, confident verbal & written communication</td>
              </tr>
              <tr>
                <td>Productivity</td>
                <td>Sharper time use, deadline discipline</td>
              </tr>
              <tr>
                <td>Collaboration</td>
                <td>Cooperative problem-solving in dynamic teams</td>
              </tr>
              <tr>
                <td>Conflict Management</td>
                <td>Professional responses to friction & feedback</td>
              </tr>
              <tr>
                <td>Responsibility</td>
                <td>Mindset shift from “task taker” to “value creator”</td>
              </tr>
            </tbody>
          </table>
        </div>
     </div>

   {/* <!-- Contact Section --> */}
 <div class="contact-section pb-5">
    
    {/* <!-- Left Side: Form --> */}
    <div class="contact-left">
      <h2 className='main-title2 mb-5' style={{textAlign:'center'}}>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>

    {/* <!-- Right Side: Image --> */}
    {/* <div class="contact-right">
      <img style={{height:'500px'}} src={cont} alt="Contact Us Illustration" />
    </div> */}
  
  </div>
  </div>
  );
};

export default ProgramContent;
