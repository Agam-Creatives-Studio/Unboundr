import React, { useEffect, useRef } from 'react';
import certf from '../../../assets/about.jpg';
import obt1 from '../../../assets/OBT_.jpg';
import obt2 from '../../../assets/OBT_(1) - Copy.jpg';
import obt3 from '../../../assets/8.jpeg';
import obt4 from '../../../assets/3.jpeg';
import ezhilMaaranGallery1 from '../../../assets/ezhilmaran-galleryimg1.jpg';
import ezhilMaaranGallery2 from '../../../assets/ezhilmaran-galleryimg2.jpg';
import ezhilMaaranGallery3 from '../../../assets/ezhilmaran-galleryimg3.jpg';
import ezhilMaaranGallery4 from '../../../assets/ezhilmaran-galleryimg4.jpg';
import ezhilMaaranGallery5 from '../../../assets/ezhilmaran-galleryimg5.jpg';
import ezhilMaaranGallery6 from '../../../assets/ezhilmaran-galleryimg6.jpg';
import ezhilMaaranGallery7 from '../../../assets/ezhilmaran-galleryimg7.jpg';
import ezhilMaaranGallery8 from '../../../assets/ezhilmaran-galleryimg8.jpg';

const images = [
  
  ezhilMaaranGallery1,
  ezhilMaaranGallery2,
  ezhilMaaranGallery3,
  ezhilMaaranGallery4,
  ezhilMaaranGallery5,
  ezhilMaaranGallery6,
  ezhilMaaranGallery7,
  ezhilMaaranGallery8,
  certf,
  obt3,
  obt4,
  obt1,
  obt2,
];

const AboutGallery = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const track = trackRef.current;
    let position = 0;

    const scroll = () => {
      position -= 1;
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="logo-marquee " style={{ overflow: 'hidden', width: '100%' }}>
      <div
        className="logo-track"
        ref={trackRef}
        style={{ display: 'flex', whiteSpace: 'nowrap' }}
      >
        {[...images, ...images].map((img, index) => (
          <div
            key={index}
            className="logo-slide"
            style={{
              flex: '0 0 auto',
              width: '250px',
              height: '180px',
              margin: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={img}
              alt={`Gallery ${index}`}
              className="aboutimg"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '5px',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutGallery;
