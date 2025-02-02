import React from 'react';
import './Hero.css';
import CompaniesMarquee from '../CompaniesMarquee/CompaniesMarquee';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import picDefault from '../../assets/pic.png';
import picNotion from '../../assets/picnotion.png';
import { Glow, GlowCapture } from '@codaworks/react-glow';
import { motion } from 'framer-motion';

const sectionContainer = {
  offscreen: {},
  onscreen: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
};

const rightContainer = {
  offscreen: {},
  onscreen: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
};

const fadeInUp = {
  offscreen: { opacity: 0, y: 30 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
};

const Hero: React.FC = () => {
  return (
    <GlowCapture>
      <motion.section
        id="home"
        className="hero-section container"
        variants={sectionContainer}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        {/* LEFT CARD */}
        <motion.div className="hero-left glowable" variants={fadeInUp}>
          <div className="hero-card">
            <div className="hero-image-wrapper">
              <img
                src={picDefault}
                alt="Vincent Ferrer"
                className="hero-image hero-image-notion"
              />
              <img
                src={picNotion}
                alt="Vincent Ferrer Notion"
                className="hero-image hero-image-default"
              />
            </div>
            <div className="hero-card-info glowable">
              <Glow>
                <h2 className="hero-name glowable">Vincent Ferrer</h2>
                <p className="hero-role glowable">
                  I am a Computer Science student based in Manila.
                </p>
              </Glow>
              <div className="hero-socials glowable">
                <a href="https://www.facebook.com/vinneeeey/" aria-label="Facebook"><FaFacebook /></a>
                <a href="https://www.linkedin.com/in/vnferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="https://github.com/vinnyy-ph" aria-label="GitHub"><FaGithub /></a>
                <a href="https://www.instagram.com/aki_iiiiiiiiiiii/" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="hero-right"
          variants={rightContainer}
        >
          <motion.div className="hero-right-info glowable" variants={fadeInUp}>
            <Glow>
              <p className="hero-intro">Hello There! 👋🏻👋🏼👋🏽👋🏾👋🏿</p>
              <h1 className="hero-title">
                I’m <span style={{ color: "#dec79b" }}>Vincent Ferrer</span>, a creative computer science student with pixel-perfect precision.
              </h1>
              <p className="hero-availability">
                <span className="dot"></span> Open for Work
              </p>
              <button className="download-cv-btn">Download CV ↓</button>
            </Glow>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <CompaniesMarquee />
          </motion.div>
        </motion.div>
      </motion.section>
    </GlowCapture>
  );
};

export default Hero;
