import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Homepage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import WorksPage from './pages/WorksPage/Workspage';

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/works" element={<WorksPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;