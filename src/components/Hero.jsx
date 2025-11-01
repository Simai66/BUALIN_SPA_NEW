import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-beige/30" />
      <div className="container-w min-h-[60vh] flex flex-col items-center justify-center text-center py-16">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-playfair text-ink"
        >
          Relax. Heal. Rebalance.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 max-w-2xl text-lg text-ink/80"
        >
          Experience authentic Thai massage for body and soul.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <a
            href="https://line.me/R/ti/p/@bualin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Your Session
          </a>
        </motion.div>
      </div>
    </section>
  );
}