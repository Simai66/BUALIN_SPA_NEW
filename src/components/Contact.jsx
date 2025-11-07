export default function Contact() {
  return (
    <section className="py-16 bg-white">
      <div className="container-w">
        <h2 className="text-3xl md:text-4xl font-playfair text-ink text-center mb-8">Contact</h2>
        <div className="max-w-3xl mx-auto text-center space-y-2 text-ink/80">
          <p>Open daily: 10:00 AM – 6:00 PM</p>
          <p>Tel: 0449532590</p>
          <p>Facebook: Bualin Thai massage therapy   | IG: @bualinthaimassage</p>
          <p>Suite 1 shop 10/670 Bellarine Highway , Leopold 3224</p>
          <a
            className="text-primary hover:text-primary/80"
            href="https://maps.google.com/?q=Bualin%20Thai%20Massage%20Therapy"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <div className="mt-8 h-56 rounded-2xl bg-beige/50" />
      </div>
    </section>
  );
}