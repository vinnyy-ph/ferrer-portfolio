import React from 'react';
import './Footer.css';
import { Glow, GlowCapture } from '@codaworks/react-glow';
import { motion } from 'framer-motion';

const footerContainerVariant = {
  offscreen: {},
  onscreen: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
    },
  },
};

const Footer: React.FC = () => {
  return (
    <GlowCapture>
      <motion.div
        variants={footerContainerVariant}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <Glow color='hsl(338.69 100% 48.04%)'>
          <motion.section
            className="cta-section container glowable"
            variants={fadeInUp}
          >
            <h2>Let's create something amazing together ✨</h2>
            <p>
              Reach out and let’s make it happen. I’m also available for full-time or
              part-time opportunities to push the boundaries of design and deliver
              exceptional work.
            </p>
            <button className="cta-button">Let’s Talk 👋</button>
          </motion.section>
        </Glow>

        <motion.footer className="footer" variants={fadeInUp}>
          <div className="container footer-content">
            <p><strong>Vincent Ferrer</strong> &copy; 2025. All Rights Reserved.</p>
            <p>Project in CS Elective 🚀</p>
          </div>
        </motion.footer>
      </motion.div>
    </GlowCapture>
  );
};

export default Footer;
