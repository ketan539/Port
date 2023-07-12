import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
      <>

        <main className='w-full'>

          <NavBar />
          <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          </Routes>

        </main>

      </>
    </div>
  );
}

export default App;
