// import './App.css';
import Home from './Components/Pages/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './Components/HeroSection';
import ToDo from './Components/Pages/ToDo';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/to-do' element={<ToDo />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
