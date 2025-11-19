import { useState, useRef, useEffect } from 'react';
import { motion as Motion, useScroll, useTransform, useSpring } from 'framer-motion';
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

const images = [
  { src: Room1, alt: "Massage room 1" },
  { src: Room2, alt: "Massage room 2" },
  { src: Room3, alt: "Massage room 3" }
];

function ImageCard({ src, alt, index, hoveredIndex, setHoveredIndex }) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile scroll effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to height: starts at 140px, grows to 420px at center, back to 140px
  const heightTransform = useTransform(scrollYProgress, [0, 0.5, 1], ["140px", "420px", "140px"]);
  const height = useSpring(heightTransform, { stiffness: 300, damping: 30 });

  // Desktop hover logic
  const isHovered = hoveredIndex === index;
  const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

  return (
    <Motion.div
      ref={ref}
      className="relative overflow-hidden rounded-2xl shadow-md ring-1 ring-beige/40"
      style={{
        height: isMobile ? height : '240px',
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      animate={{
        scale: isHovered ? 1.1 : isOtherHovered ? 0.9 : 1,
        height: isHovered ? '300px' : '240px',
        filter: isOtherHovered ? 'blur(2px)' : 'blur(0px)',
        opacity: isOtherHovered ? 0.7 : 1,
        borderRadius: isHovered ? '12px' : '24px',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </Motion.div>
  );
}

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
          {images.map((img, index) => (
            <ImageCard
              key={index}
              index={index}
              src={img.src}
              alt={img.alt}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
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