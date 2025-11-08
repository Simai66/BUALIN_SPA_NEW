import Room1 from '../assets/Room1.jpeg';
import Room2 from '../assets/Room2.jpeg';
import Room3 from '../assets/Room3.jpeg';


export default function About() {
  return (
    <section className="py-16 bg-beige">
      <div className="container-w">
        <h2 className="text-3xl md:text-4xl font-playfair text-ink text-center mb-8">About Us</h2>
        <div className="grid gap-6 sm:grid-cols-3 mb-8">
          <img src={Room1} alt="Massage room 1" className="w-full h-40 sm:h-56 rounded-2xl object-cover ring-1 ring-beige/40 shadow-md" loading="lazy" />
          <img src={Room2} alt="Massage room 2" className="w-full h-40 sm:h-56 rounded-2xl object-cover ring-1 ring-beige/40 shadow-md" loading="lazy" />
          <img src={Room3} alt="Massage room 3" className="w-full h-40 sm:h-56 rounded-2xl object-cover ring-1 ring-beige/40 shadow-md" loading="lazy" />
        </div>
        <p className="max-w-3xl mx-auto text-center text-ink/80 text-lg leading-relaxed">
          BUALIN Thai Spa combines traditional Thai healing with modern comfort. Our therapists are
          certified professionals dedicated to restoring your energy and balance.
        </p>
      </div>
    </section>
  );
}