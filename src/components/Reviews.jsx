import { useState } from 'react';
import { reviews } from '../data/reviews';

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const current = reviews[index];

  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);

  return (
    <section className="py-16 bg-white">
      <div className="container-w text-center">
        <h2 className="text-3xl md:text-4xl font-playfair text-ink mb-8">Client Reviews</h2>
        <div className="card max-w-2xl mx-auto">
          <p className="text-lg text-ink/80 italic">“{current.quote}”</p>
          <div className="mt-4 flex items-center justify-center gap-2">
            {Array.from({ length: current.rating }).map((_, i) => (
              <span key={i} className="text-gold">★</span>
            ))}
          </div>
          <p className="mt-2 font-medium text-ink">— {current.name}</p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="btn-primary" onClick={prev}>
              Prev
            </button>
            <button className="btn-primary" onClick={next}>
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}