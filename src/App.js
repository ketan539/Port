import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();

  return (
    <div className="App">
      <>
        <NavBar />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} key="/" />
            <Route exact path="/about" element={<About />} key="/about" />
            <Route exact path="/projects" element={<Projects />} key="/projects" />
          </Routes>
        </AnimatePresence>
        <Footer />
      </>
    </div>
  );
}

export default App;
