import { services } from '../data/services';
import thaiImg from '../assets/thai.svg';
import aromaImg from '../assets/aroma.svg';
import footImg from '../assets/foot.svg';
import hotstoneImg from '../assets/hotstone.svg';
import herbalImg from '../assets/herbal.svg';

const images = {
  thai: thaiImg,
  aroma: aromaImg,
  foot: footImg,
  hotstone: hotstoneImg,
  herbal: herbalImg,
};

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="container-w">
        <h2 className="text-3xl md:text-4xl font-playfair text-ink text-center mb-10">
          Our Services
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.id} className="card">
              <img
                src={images[s.id]}
                alt={s.title}
                className="h-36 w-full rounded-xl object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{s.durations.join(' • ')}</p>
              <p className="mt-2 font-medium text-primary">{s.price}</p>
              <a href="#" className="mt-4 inline-block text-primary hover:text-primary/80 transition-colors">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}