import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
/* import Contact from './pages/contact/contact'; */
import Home from './pages/home/Home';
import About from './pages/About/ABout';
import Tour from './pages/Tour/Tour';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/contact/contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
