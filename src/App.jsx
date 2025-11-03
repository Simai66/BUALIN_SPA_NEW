import { Element } from 'react-scroll';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

  <Element name="home">
    <Hero />
  </Element>

  <Element name="services">
    <Services />
  </Element>

  <Element name="about">
    <About />
  </Element>

      {/* Booking section removed per request */}

      <Element name="contact">
        <Contact />
      </Element>

      <footer className="bg-primary text-white">
        <div className="container-w py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2025 BUALIN Thai Spa</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80">LINE</a>
            <a href="#" className="hover:opacity-80">Instagram</a>
            <a href="#" className="hover:opacity-80">Facebook</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
