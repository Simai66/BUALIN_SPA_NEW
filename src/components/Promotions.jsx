export default function Promotions() {
  const promos = [
    { id: 1, title: 'Weekday Calm', text: '10% off Mon–Thu', color: 'bg-accent-beige/50' },
    { id: 2, title: 'Couple Retreat', text: 'Save 15% for two', color: 'bg-accent-beige/60' },
    { id: 3, title: 'New Guest', text: 'First visit 100 THB off', color: 'bg-accent-beige/70' },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container-w">
        <h2 className="text-3xl md:text-4xl font-playfair text-ink text-center mb-10">Promotions</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {promos.map((p) => (
            <div key={p.id} className="card text-center">
              <div className={`h-36 w-full rounded-xl ${p.color}`} />
              <h3 className="mt-4 text-xl font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-ink/70">{p.text}</p>
              <a
                href="https://line.me/R/ti/p/@bualin"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block btn-primary"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}