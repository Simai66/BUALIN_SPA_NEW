import { motion as Motion } from 'framer-motion';
import Room1 from '../assets/Room1.jpeg';
import Room2 from '../assets/Room2.jpeg';
import Room3 from '../assets/Room3.jpeg';

// Animation variants with subtle spring effect
const headerVariants = {
  hidden: { 
    opacity: 0, 
    filter: 'blur(10px)',
    y: -30 
  },
  visible: { 
    opacity: 1, 
    filter: 'blur(0px)',
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    filter: 'blur(10px)',
    scale: 0.9,
    y: 40
  },
  visible: { 
    opacity: 1, 
    filter: 'blur(0px)',
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 10,
      mass: 2 
    }
  }
};

const textVariants = {
  hidden: { 
    opacity: 0, 
    filter: 'blur(8px)',
    y: 20
  },
  visible: { 
    opacity: 1, 
    filter: 'blur(0px)',
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 14,
      delay: 0.2
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function About() {
  return (
    <section className="py-16 bg-beige">
      <div className="container-w">
        <Motion.h2 
          className="text-3xl md:text-4xl font-playfair text-ink text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headerVariants}
        >
          About Us
        </Motion.h2>
        <Motion.div 
          className="grid gap-6 sm:grid-cols-3 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <Motion.img 
            src={Room1} 
            alt="Massage room 1" 
            className="w-full h-40 sm:h-56 rounded-2xl object-cover ring-1 ring-beige/40 shadow-md" 
            loading="lazy"
            variants={imageVariants}
          />
          <Motion.img 
            src={Room2} 
            alt="Massage room 2" 
            className="w-full h-40 sm:h-56 rounded-2xl object-cover ring-1 ring-beige/40 shadow-md" 
            loading="lazy"
            variants={imageVariants}
          />
          <Motion.img 
            src={Room3} 
            alt="Massage room 3" 
            className="w-full h-40 sm:h-56 rounded-2xl object-cover ring-1 ring-beige/40 shadow-md" 
            loading="lazy"
            variants={imageVariants}
          />
        </Motion.div>
        <Motion.p 
          className="max-w-3xl mx-auto text-center text-ink/80 text-lg leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={textVariants}
        >
          BUALIN Thai Spa combines traditional Thai healing with modern comfort. Our therapists are
          certified professionals dedicated to restoring your energy and balance.
        </Motion.p>
      </div>
    </section>
  );
}