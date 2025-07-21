import { Col } from "react-bootstrap";
import Logo from '../assets/UnboundrLogo.png';
import Unboundrx from '../assets/graduate-hat.png';
import Unboundr_Pro from '../assets/briefcase.png';
import Unboundr_E from '../assets/rocket-lunch.png';
import Unboundr_c from '../assets/home.png';

const ProductData = [
  {
   image: Unboundrx ,
  title: 'Unboundr X',
    subtitle:'Campus to Corporate',
    para: 'Develop unseen workplace skills every recruiter values but colleges rarely teach.',
    route:'/unboundr-x'
  },
  {
    image:Unboundr_Pro,
    title: 'Unboundr Pro',
    subtitle:'Fresh Hire & Early Career Labs',
    para: 'Empower young professionals with people skills, problem-solving & personal effectiveness.',
    route:'/unboundr-pro'
  },
  {
    image: Unboundr_E,
    title: 'Unboundr Elevate',
    subtitle:'Emerging Leaders Bootcamp',
    para: 'Shape emotionally intelligent leaders who act with clarity, empathy, and accountability.',
    route:'/Unboundr-Elevate'
  },
  {
    image: Unboundr_c,
    title: 'Unboundr Camp',
    subtitle:'Outbound Learning Adventures',
    para: 'Break barriers, build trust, and discover growth with hands-on learning experiences in great outdoors.',
    route:'/Unboundr-Camp'
  },
];



const ProductSkill = [
  {
    image: Logo,
    title: 'Traits',
    para: 'Focus',
    para2: 'Adaptability',
    para3: 'Resilience',
    route:'/unboundr'
  },
    {
    image: Logo,
    title: 'Traits',
    subtitle:'Campus to Corporate',
    para: 'Develop unseen workplace skills every recruiter values but colleges rarely teach.',
    route:'/unboundr'
  },
  {
    image: Logo,
    title: 'Unboundr Pro',
    subtitle:'Fresh Hire & Early Career Labs',
    para: 'Empower young professionals with people, problem-solving & personal effectiveness.',
    route:'/unboundr-pro'
  },
  {
    image: Logo,
    title: 'Unboundr Elevate',
    subtitle:'Emerging Leaders Bootcamp',
    para: 'Shape emotionally intelligent leaders who act with clarity, empathy, and accountability.',
    route:'/Unboundr Elevate'
  },
  {
    image: Logo,
    title: 'Unboundr Camp',
    subtitle:'Outbound Learning Adventures',
    para: 'Break barriers, build trust, and discover growth with hands-on learning experiences.',
    route:'/Unboundr Camp'
  },
];




const testimonials = [

  {
    name: " Mr.Ezhilmaran",
    role: " Arann Architects",
    text: "Good evening Siva. I have no words to thank you for coming over to our firm to conduct a great team building exercise.The session, I'm sure, will have lasting impression in our minds and will help us bind as a team for years to come.I wholeheartedly thank team Unboundr, i.e., you, Priya and your lovely daughter Tejaswini for pulling it off. The events were fun, flawless and so well orchestrated that there was never a dull moment during the entire session.I sincerely wish Team Unboundr great success.",
    image: "https://i.pravatar.cc/100?img=3",
  },
];




export default {
  ProductData,
  testimonials,
  ProductSkill,
 
};
