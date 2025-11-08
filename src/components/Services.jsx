import { services, addons } from '../data/services';
import thaiImg from '../assets/thai.svg';
import aromaImg from '../assets/aroma.svg';
import footImg from '../assets/foot.svg';
// Real photos for services
import photo1 from '../assets/photo.jpeg';
import photo2 from '../assets/photo2.png';
import photoRex from '../assets/photo_rex.png';
import hotstoneImg from '../assets/hotstone.svg';
import herbalImg from '../assets/herbal.svg';
import photo4 from '../assets/photo4.png';
import photoEiei from '../assets/photo-eiei.jpeg';
import photo_1 from '../assets/photo_1.png';
import photo3 from '../assets/photo3.png';
import logoImg from '../assets/LOGO.jpeg';
import spaBanner from '../assets/spa_banner.svg';
import shop1 from '../assets/shop1.jpeg';
import shop from '../assets/shop.jpeg';   
import Hot_stone from '../assets/Hot_stone.png';
import Herbal_comp from '../assets/Herbal_comp.png';


// Map service photo keys to actual images
// We now use real photos for the three core services
const images = {
  thai: photoRex,   // Traditional Thai Massage
  aroma: photo1,    // Relaxation Massage
  foot: photo2,     // Combination Massage
  photo_rex: photoRex, // Fallback key used in services.js for Relaxation
  // Additional available images
  photo: photo1,
  photo2: photo2,
  photo4: photo4,
  photo_1: photo_1,
  photo_eiei: photoEiei,
  photo3: photo3,
  logo: logoImg,
  shop1: shop1,
  shop: shop,
  spa_banner: spaBanner,
  // SVGs (if needed anywhere)
  thai_svg: thaiImg,
  aroma_svg: aromaImg,
  foot_svg: footImg,
  hotstoneImg: Hot_stone, 
  herbalImg: Herbal_comp,

};

const addonIcons = {
  'Hot stone': hotstoneImg,
  'Herbal compress': herbalImg,
};

export default function Services() {
  return (
    <section className="py-16 bg-white section-decor">
      <div className="container-w">
        <h2 className="text-3xl md:text-4xl font-playfair text-ink text-center mb-3">Our Services</h2>
        <p className="text-center text-ink/70 mb-8">Authentic Thai treatments with a gentle touch</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.id} className="card h-full flex flex-col">
              <img
                src={images[s.photo]}
                alt={s.title}
                className="h-36 w-full rounded-xl object-cover ring-1 ring-beige/40"
              />
              <h3 className="mt-4 text-xl font-semibold text-ink">{s.title}</h3>
              {s.description && (
                <p className="mt-2 text-ink/70 text-sm leading-relaxed">{s.description}</p>
              )}
              <div className="my-3 text-center text-beige/70">✦ ✧ ✦</div>
              <ul className="mt-2 space-y-2">
                {s.items.map((it, idx) => (
                  <li key={idx} className="flex items-center justify-between text-sm">
                    <span className="text-ink/80">{it.duration}</span>
                    <span className="font-semibold text-primary">{it.price}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 flex gap-3">
                <a href={s.bookingUrl || 'https://app.squareup.com/appointments/book/5btap1cnsywghf/L78WC3SYY14NQ/start'} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book</a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services - enhanced UI */}
        <div className="mt-12">
          <div className="flex items-end justify-between mb-4">
            <div>
              <h3 className="text-2xl font-playfair text-ink">Additional Services</h3>
              <p className="text-ink/70 text-sm">Enhance your session with premium add-ons</p>
            </div>
          </div>
          {/* Add function to send message to LINE with price */}
          {/**/}
          {/**/}
          {/* Inline handler for add-on */}
          {/* We keep it simple to avoid affecting other parts */}
          
          <div className="grid gap-4 sm:grid-cols-2">
            {addons.map((a, i) => (
              <div key={i} className="addon-card" aria-label={`Add-on ${a.title} priced ${a.price}`}>
                <div className="icon-circle">
                  <img src={addonIcons[a.title]} alt="" className="w-7 h-7" />
                </div>
                <div className="flex-1">
                <div className="flex items-center">
                    <span className="font-semibold text-ink">{a.title}</span>
                  </div>
                  <p className="text-ink/60 text-xs mt-1">A perfect complement to your massage</p>
                </div>
                <button
                  onClick={() => {
                    const url = `https://line.me/R/msg/text/?${encodeURIComponent(msg)}`;
                    window.open(url, '_blank');
                  }}
                  className="btn-primary btn-sm"
                >{a.price}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}