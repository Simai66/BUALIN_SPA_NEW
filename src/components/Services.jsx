import { services, addons } from '../data/services';
import thaiImg from '../assets/thai.svg';
import aromaImg from '../assets/aroma.svg';
import footImg from '../assets/foot.svg';

const images = {
  thai: thaiImg,
  aroma: aromaImg,
  foot: footImg,
};

export default function Services() {
  return (
    <section className="py-16 bg-white section-decor">
      <div className="container-w">
        <h2 className="text-3xl md:text-4xl font-playfair text-ink text-center mb-3">Our Services</h2>
        <p className="text-center text-ink/70 mb-8">Authentic Thai treatments with a gentle touch</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.id} className="card">
              <img
                src={images[s.photo]}
                alt={s.title}
                className="h-36 w-full rounded-xl object-cover ring-1 ring-beige/40"
              />
              <h3 className="mt-4 text-xl font-semibold text-ink">{s.title}</h3>
              <ul className="mt-2 space-y-2">
                {s.items.map((it, idx) => (
                  <li key={idx} className="flex items-center justify-between text-sm">
                    <span className="text-ink/80">{it.duration}</span>
                    <span className="font-semibold text-primary">{it.price}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex gap-3">
                <a href="#" className="btn-outline">Learn More</a>
                <a href="https://line.me/R/ti/p/@bualin" target="_blank" rel="noopener noreferrer" className="btn-primary">Book</a>
              </div>
            </div>
          ))}

          {/* Additional Services card */}
          <div className="card">
            <h3 className="text-xl font-semibold text-ink">Additional Services</h3>
            <ul className="mt-2 space-y-2">
              {addons.map((a, i) => (
                <li key={i} className="flex items-center justify-between text-sm">
                  <span className="text-ink/80">{a.title}</span>
                  <span className="font-semibold text-primary">{a.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="#" className="btn-outline">Learn More</a>
              <a href="https://line.me/R/ti/p/@bualin" target="_blank" rel="noopener noreferrer" className="btn-primary">Book</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}