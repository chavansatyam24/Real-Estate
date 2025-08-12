import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
 // ✅ Add this
 import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar />   {/* ✅ Include navbar */}
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
