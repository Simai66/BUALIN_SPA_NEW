import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress to opacity and blur
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

  // Spring animation config
  const springConfig = {
    type: "spring",
    stiffness: 80,
    damping: 15,
    mass: 2,
    restDelta: 0.001
  };

  return (
    <section ref={ref} className="relative pt-24">
      {/* Background image layer */}
      <div
        className="absolute inset-0 -z-20 bg-center bg-cover"
        style={{ backgroundImage: "url('/images/hero-photo.jpeg')" }}
      />
      {/* Soft gradient overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/50 to-beige/40" />
      <Motion.div 
        className="container-w min-h-[60vh] flex flex-col items-center justify-center text-center py-16"
        style={{ opacity, filter: useTransform(blur, (value) => `blur(${value}px)`) }}
      >
        <Motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...springConfig, delay: 0.1 }}
          className="text-4xl md:text-5xl font-playfair text-ink"
        >
          Relax. Heal. Rebalance.
        </Motion.h1>
        <Motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...springConfig, delay: 0.25 }}
          className="mt-4 max-w-2xl text-lg text-ink/80"
        >
          Experience authentic Thai massage for body and soul.
        </Motion.p>
        <Motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...springConfig, delay: 0.4 }}
          className="mt-8"
        >
          <a
            href="https://app.squareup.com/appointments/book/5btap1cnsywghf/L78WC3SYY14NQ/start"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Schedule a Session
          </a>
        </Motion.div>
      </Motion.div>
    </section>
  );
}