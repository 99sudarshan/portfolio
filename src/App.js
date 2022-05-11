import React from 'react';
import slide1 from './images/3.jpg';
import slide2 from './images/4.jpg';
import slide3 from './images/5.jpg';
import slide4 from './images/6.jpg';
import slide5 from './images/7.jpg';
import Navigation from './Components/Navigation';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Testimonials from './Components/Pages/Testimonials';
import Portfolio from './Components/Pages/Portfolio';

function App() {

  const option = {
    type: 'loop',
    gap: '1rem',
    autoplay: 'true',
    resetProgress: 'false',
    pauseOnHover: 'true',
    perPage: 1,
    speed: 2000,
    arrows: false,
    trimSpace: false,
    height: '20rem',
    width: '40rem',

  };
  const images = [
    {
      img: ` ${slide1}`
    },
    {
      img: ` ${slide2}`
    },
    {
      img: ` ${slide3}`
    },
    {
      img: `${slide4}`
    },
    {
      img: ` ${slide5}`
    }
  ];

  return (
    <div className="flex flex-col-reverse md:flex-row">
      {/* left column */}
      <Navigation />
      {/* right column */}

      <Routes>
        <Route path="/" element={<Home option={option} images={images} />} />
        <Route path="about" element={<About />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div >
  );
}

export default App;


{/* <div className='flex-1 h-screen overflow-auto'></div> */ }

