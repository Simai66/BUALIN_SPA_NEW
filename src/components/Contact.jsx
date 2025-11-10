import shop from '../assets/shop.jpeg';

export default function Contact() {
  return (
    <section className="py-16 bg-white">
      <div className="container-w">
        <h2 className="text-3xl md:text-4xl font-playfair text-ink text-center mb-12">Contact</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Shop Image */}
            <div>
              <img
                src={shop}
                alt="Bualin Thai Massage Therapy shop front"
                className="w-full h-auto rounded-2xl ring-1 ring-beige/40 shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Opening Hours */}
              <div className="space-y-3">
                <h3 className="text-2xl font-playfair font-semibold text-ink">Opening Hours</h3>
                <p className="text-ink/80">Open daily: 10:00 AM – 6:00 PM</p>
              </div>

              {/* Get in Touch */}
              <div className="space-y-3">
                <h3 className="text-2xl font-playfair font-semibold text-ink">Get in Touch</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-ink/60 mb-1">Phone</p>
                    <a 
                      href="tel:0449532590" 
                      className="text-lg text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      0449532590
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-ink/60 mb-2">Socials</p>
                    <div className="flex gap-4">
                      <a
                        href="https://www.facebook.com/bualinthaimassagetherapy"
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] hover:bg-[#1877F2]/90 text-white transition-colors"
                        aria-label="Visit our Facebook page"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/bualinthaimassage"
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#FCAF45] via-[#E1306C] to-[#833AB4] hover:opacity-90 text-white transition-opacity"
                        aria-label="Visit our Instagram page"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Find Us */}
              <div className="space-y-3">
                <h3 className="text-2xl font-playfair font-semibold text-ink">Find Us</h3>
                <div className="space-y-3">
                  <p className="text-ink/80">
                    Suite 1 shop 10/670 Bellarine Highway, Leopold 3224
                  </p>
                  <a
                    href="https://maps.app.goo.gl/G8BzufMBjC2e8XzYA"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-sm hover:shadow-md"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}