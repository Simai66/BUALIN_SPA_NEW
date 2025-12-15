import { Element } from 'react-scroll';
import SmoothScroll from './components/SmoothScroll.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import EGiftCards from './components/ecada.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white">
        <Navbar />

        <Element name="home">
          <Hero />
        </Element>

        <Element name="services">
          <Services />
        </Element>

        <Element name="giftcards">
          <EGiftCards />
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
            <p>© 2025 Bualin Thai Massage Therapy</p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/bualinthaimassage?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">Instagram</a>
              <a href="https://web.facebook.com/profile.php?id=61582898821738&locale=th_TH" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">Facebook</a>
            </div>
          </div>
        </footer>

      </div>
    </SmoothScroll>
  );
}

export default App;

