import React, { useState } from 'react';
import './Works.css';
import haliya from '../../assets/projects/haliya.jpg';
import haribonsquadron from '../../assets/projects/haribonsquadron.png';
import ecarga from '../../assets/projects/ecarga.png';
import vieuxfad from '../../assets/projects/vieux-fad.png';
import site from '../../assets/projects/site.png';
import marhs from '../../assets/projects/roxasweb.jpg';
import notion from '../../assets/projects/beantherenotion.jpg';
import plmsde from '../../assets/projects/plmrecogsde.png';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  link: string;
};

const allProjects: Project[] = [
  {
    id: 1,
    title: 'Haliya | AI Fortune Teller',
    subtitle: 'Haliya is an AI Fortune Teller Chatbot for students around Pamantasan ng Lungsod ng Maynila (PLM).',
    category: 'Tech',
    image: haliya,
    link: 'https://github.com/vinnyy-ph/Haliya-The-AI-Fortune-Teller'
  },
  {
    id: 2,
    title: 'Haribon Squadrons',
    subtitle: 'Haribon Squadrons is a space invaders-like game themed around Pamantasan ng Lungsod ng Maynila (PLM).',
    category: 'Tech',
    image: haribonsquadron,
    link: 'https://example.com/'
  },
  {
    id: 3,
    title: 'eCarga',
    subtitle: 'eCarga is a mobile ride-hailing application exclusively designed for people with mobility disabilities and physical impairments.',
    category: 'Tech',
    image: ecarga,
    link: 'https://github.com/Feinpoint/eCarga'
  },
  {
    id: 4,
    title: 'The Vieux Fad Website',
    subtitle: 'A static website containing information about a fastfood restaurant called the "The Vieux Fad"',
    category: 'Tech',
    image: vieuxfad,
    link: 'https://vieuxfad.vercel.app/'
  },
  {
    id: 5,
    title: 'Manuel A. Roxas High School Website',
    subtitle: 'A static website containing information about the public school "Manuel A. Roxas High School Website"',
    category: 'Tech',
    image: marhs,
    link: 'https://marshs.vercel.app/'
  },
  {
    id: 6,
    title: 'PLM SITE Unofficial Website',
    subtitle: 'A proposed website for the Information Technology organization of Pamantasan ng Lungsod ng Maynila called SITE.',
    category: 'Tech',
    image: site,
    link: 'https://plm-site.vercel.app/'
  },
  {
    id: 7,
    title: 'Bean There, Notion That: Video Recap',
    subtitle: "An aftermovie for the event of Notion @ PLM: Bean There, Notion That. The video highlighted the cafe and the workshop.",
    category: 'Video',
    image: notion,
    link: 'https://www.facebook.com/watch/?v=555823316980733'
  },
  {
    id: 8,
    title: 'PLM 2023 Recognition Same Day Edit',
    subtitle: 'A same day edit video for the Recognition of Pamantasan ng Lungsod ng Maynila. The video highlighted the awardings.',
    category: 'Video',
    image: plmsde,
    link: 'https://drive.google.com/file/d/1PdfOCBJSx2E5X0K-Cce2nuoNfzlW7Mbi/view?pli=1'
  },
];

const categories = ['All', 'Design', 'Video', 'Tech'];

const containerVariant = {
  offscreen: {},
  onscreen: {}
};

const fadeInUp = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 1.0 },
  }),
};

const Works: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? allProjects
    : allProjects.filter((proj) => proj.category === activeCategory);

  return (
    <motion.section id="works" className="works-section container">
      <motion.h2
        initial="offscreen"
        animate="onscreen"
        variants={fadeInUp}
      >
        Works &amp; Projects
      </motion.h2>
      <motion.p
        initial="offscreen"
        animate="onscreen"
        variants={fadeInUp}
      >
        Here are some recent design projects I've been working on. I enjoyed the process of bringing these ideas to life.
      </motion.p>

      <motion.div
        className="works-filters"
        initial="offscreen"
        animate="onscreen"
        variants={fadeInUp}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cat === activeCategory ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <motion.div className="works-grid" variants={containerVariant}>
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              className="works-card"
              key={project.id}
              custom={index}
              variants={fadeInUp}
              initial="offscreen"
              animate="onscreen"
              exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
            >
              <div className="works-image-wrapper">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} />
                </a>
              </div>
              <h3>{project.title}</h3>
              <p className="works-subtitle">{project.subtitle}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default Works;
