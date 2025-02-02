import React from 'react';
import './CompaniesMarquee.css';
import { Glow, GlowCapture } from '@codaworks/react-glow';

const logos = [
    { src: '/logos/pea.png', alt: 'Pearl Talent' },
    { src: '/logos/google.png', alt: 'Google' },
    { src: '/logos/ing.png', alt: 'ING' },
    { src: '/logos/ubisoft.png', alt: 'Ubisfot' },
    { src: '/logos/riot.png', alt: 'Riot Games' },
    { src: '/logos/activision.png', alt: 'Activision' },
];

const CompaniesMarquee: React.FC = () => {
  return (
    <GlowCapture>
    <div className="companies-marquee-wrapper">
      <Glow>
      <h4 className='glowable'>Companies I Worked With</h4>
      </Glow>
      <div className="marquee">
        <div className="marquee-content">
          {logos.map((logo, index) => (
            <div className="marquee-item" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div className="marquee-item" key={`dup-${index}`}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </GlowCapture>
  );
};

export default CompaniesMarquee;
