// import './App.css';
import Home from './Components/Pages/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './Components/HeroSection';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
