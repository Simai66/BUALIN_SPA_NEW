import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.jpeg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="container-w flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Bualin Thai Massage Therapy logo"
            className="h-10 w-10 rounded-full object-cover shadow-md"
            loading="lazy"
          />
          <span className="text-2xl font-playfair font-semibold text-primary">Bualin Thai Massage Therapy</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-ink">
          {[
            { to: 'home', label: 'Home' },
            { to: 'services', label: 'Services' },
            { to: 'about', label: 'About' },
            { to: 'contact', label: 'Contact' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <a
          href="https://app.squareup.com/appointments/book/5btap1cnsywghf/L78WC3SYY14NQ/start"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Book Now
        </a>
      </nav>
    </header>
  );
}