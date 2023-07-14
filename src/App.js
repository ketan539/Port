import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <>

        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>     
        <Footer/>    
      </>
    </div>
  );
}

export default App;
