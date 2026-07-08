export default function SiteFooter() {
    return (
      <footer
        id="contact"
        className="relative overflow-hidden bg-[#063247] px-6 py-12 text-white"
      >
        <img
          src="/footer-reef.jpg"
          alt="Florida Keys reef background"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
  
        <div className="absolute inset-0 bg-[#063247]/88" />
  
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <div className="inline-flex rounded-lg bg-white p-2">
              <img
                src="/logo.JPG"
                alt="Islamorada Coastal Adventures logo"
                className="h-24 w-auto object-contain"
              />
            </div>
  
            <p className="mt-5 text-sm leading-6 text-white/75">
              Private charters in the beautiful Florida Keys. Fishing,
              snorkeling, eco tours, sandbars, and custom adventures — your day,
              your way.
            </p>
  
            <div className="mt-6 flex gap-4 text-2xl text-white/80">
              <span>●</span>
              <span>◎</span>
              <span>◉</span>
              <span>G</span>
            </div>
          </div>
  
          <div>
            <h3 className="font-black uppercase tracking-wide">Quick Links</h3>
  
            <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-white/75">
              <a href="/fishing" className="hover:text-white">
                Fishing
              </a>
              <a href="/custom-adventure" className="hover:text-white">
                Custom Adventure
              </a>
              <a href="/snorkeling" className="hover:text-white">
                Snorkeling
              </a>
              <a href="/" className="hover:text-white">
                About Us
              </a>
              <a href="/eco-tours" className="hover:text-white">
                Eco Tours
              </a>
              <a href="/" className="hover:text-white">
                Reviews
              </a>
              <a href="/sandbar" className="hover:text-white">
                Sandbar Excursions
              </a>
              <a href="tel:3057354070" className="hover:text-white">
                Book Now
              </a>
            </div>
          </div>
  
          <div>
            <h3 className="font-black uppercase tracking-wide">Contact</h3>
  
            <div className="mt-5 space-y-3 text-sm leading-6 text-white/75">
              <a href="tel:3057354070" className="block hover:text-white">
                ☎ (305) 735-4070
              </a>
  
              <a
                href="mailto:captain@islamoradacoastaladventures.com"
                className="block hover:text-white"
              >
                ✉ captain@islamoradacoastaladventures.com
              </a>
  
              <p>📍 Islamorada, Florida Keys</p>
  
              <p>Pickup at hotel docks when available or the nearest marina.</p>
            </div>
          </div>
  
          <div>
            <h3 className="font-black uppercase tracking-wide">Hours</h3>
  
            <div className="mt-5 space-y-3 text-sm leading-6 text-white/75">
              <p>Daily: 7:00 AM – 7:00 PM</p>
              <p>By reservation</p>
              <p>Weather permitting</p>
            </div>
          </div>
        </div>
  
        <div className="relative z-10 mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/80 md:flex md:items-center md:justify-between">
          <p>© 2026 Islamorada Coastal Adventures. All Rights Reserved.</p>
  
          <div className="mt-3 flex gap-5 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    );
  }