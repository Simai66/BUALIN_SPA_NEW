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
      <nav className="container-w flex items-center justify-between py-4 gap-2">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 shrink">
          <img
            src={logo}
            alt="Bualin Thai Massage Therapy logo"
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover shadow-md shrink-0"
            loading="lazy"
          />
          <span className="text-base sm:text-lg lg:text-2xl font-playfair font-semibold text-primary truncate">
            Bualin Thai Massage Therapy
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-6 text-ink shrink-0">
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
              className="cursor-pointer hover:text-primary transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <a
          href="https://app.squareup.com/appointments/book/5btap1cnsywghf/L78WC3SYY14NQ/start"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm sm:text-base whitespace-nowrap shrink-0"
        >
          Book Now
        </a>
      </nav>
    </header>
  );
}