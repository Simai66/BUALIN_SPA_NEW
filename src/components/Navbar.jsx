import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

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
        <div className="text-2xl font-playfair font-semibold text-primary">
          BUALIN Thai Spa
        </div>
        <div className="hidden md:flex items-center gap-6 text-ink">
          {[
            { to: 'home', label: 'Home' },
            { to: 'services', label: 'Services' },
            { to: 'about', label: 'About' },
            { to: 'promotions', label: 'Promotions' },
            { to: 'reviews', label: 'Reviews' },
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
          href="https://line.me/R/ti/p/@bualin"
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