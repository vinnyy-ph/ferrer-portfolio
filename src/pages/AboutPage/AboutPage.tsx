import React from 'react';
import './AboutPage.css';
import Hero from '../../components/Hero/Hero';
import { motion } from 'framer-motion';

const containerVariant = {
  offscreen: {},
  onscreen: {
    transition: {
      //stagger
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
};

const fadeInUp = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0
    }
  }
};

const AboutPage: React.FC = () => {
  return (
    <>
      <Hero />
      <motion.section
        className="about-info-section container"
        variants={containerVariant}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        {/* Experience Card */}
        <motion.div className="experience-card" variants={fadeInUp}>
          <h2>Experience</h2>
          <ul>
            <li>
              <h3>November 2024 - Present</h3>
              <p>Pearl Talent</p>
              <span>Content Creation Intern</span>
            </li>
            <li>
              <h3>September 2024 - Present</h3>
              <p>Google Developer Student Clubs</p>
              <span>Content Creation Lead</span>
            </li>
            <li>
              <h3>2023 - 2024</h3>
              <p>College of Engineering Student Council, PLM</p>
              <span>Junior Graphic Designer</span>
            </li>
          </ul>
        </motion.div>

        {/* Education Card */}
        <motion.div className="education-card" variants={fadeInUp}>
          <h2>Education</h2>
          <ul>
            <li>
              <h3>September 2022 - Present</h3>
              <p>Bachelor of Science in Computer Science</p>
              <span>Pamantasan ng Lungsod ng Maynila, Intramuros</span>
            </li>
            <li>
              <h3>2020 - 2022</h3>
              <p>Senior High School, ICT</p>
              <span>Manuel A. Roxas Highschool</span>
            </li>
            <li>
              <h3>2014 - 2020</h3>
              <p>Junior High School</p>
              <span>Benigno Ninoy Aquino High School</span>
            </li>
          </ul>
        </motion.div>
      </motion.section>
    </>
  );
};

export default AboutPage;
