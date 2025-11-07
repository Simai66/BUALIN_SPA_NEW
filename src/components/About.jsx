import banner from '../assets/spa_banner.svg';

export default function About() {
  return (
    <section className="py-16 bg-beige">
      <div className="container-w">
        <h2 className="text-3xl md:text-4xl font-playfair text-ink text-center mb-8">About Us</h2>
        <img src={banner} alt="Bualin Thai Massage Therapy" className="w-full max-w-4xl mx-auto rounded-2xl shadow-md mb-8" />
        <p className="max-w-3xl mx-auto text-center text-ink/80 text-lg leading-relaxed">
          BUALIN Thai Spa combines traditional Thai healing with modern comfort. Our therapists are
          certified professionals dedicated to restoring your energy and balance.
        </p>
      </div>
    </section>
  );
}