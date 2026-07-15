export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#102A3A]">
      {/* TOP HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="bg-[#063247] px-4 py-1 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-0.5 text-[11px] font-semibold leading-tight md:flex-row md:items-center md:justify-between">
            <p>Call to Book: (305) 735-4070</p>
            <p>captain@islamoradacoastaladventures.com</p>
            <p>Islamorada, Florida Keys</p>
          </div>
        </div>

        <nav className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-3 md:flex-row md:justify-between md:px-6">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/logo.JPG"
              alt="Islamorada Coastal Adventures logo"
              className="h-16 w-auto object-contain md:h-25"
            />
          </a>

          <div className="flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-[11px] font-bold text-[#063247] sm:text-sm md:w-auto md:gap-7">
            <a href="/fishing" className="hover:text-[#18B7B9]">
              Fishing
            </a>
            <a href="/snorkeling" className="hover:text-[#18B7B9]">
              Snorkeling
            </a>
            <a href="/eco-tours" className="hover:text-[#18B7B9]">
              Eco Tours
            </a>
            <a href="/sandbar" className="hover:text-[#18B7B9]">
              Sandbar
            </a>
            <a href="/custom-adventure" className="hover:text-[#18B7B9]">
              Custom Adventure
            </a>

            <a href="/about" className="hover:text-[#18B7B9]">
              About
          </a>
        </div>

        <a
          href="https://www.mycaptain.com/booking/islamoradacoastaladventures?_gl=1*1793zsn*_gcl_au*NTQ5MTI4NTc4LjE3ODA4NzU3NTQ"
          className="rounded-md bg-[#F26B5E] px-4 py-2 text-xs font-black uppercase tracking-wide text-white shadow-md transition hover:bg-[#df5a4f] md:px-5 md:py-3 md:text-sm"
        >
          Book Now
        </a>
      </nav>
    </header>
      {/* HERO */ }
  <section className="relative overflow-hidden bg-[#063247]">
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,50,71,0.95),rgba(6,50,71,0.72),rgba(6,50,71,0.25))]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(24,183,185,0.25),_transparent_35%)]" />
    <img
      src="/footer-reef.jpg"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen"
    />

    {/* Placeholder background until we add real boat photo */}
    <div className="absolute inset-0 opacity-10">
      <div className="h-full w-full bg-[linear-gradient(135deg,#0B6F88_0%,#18B7B9_45%,#DDF7F5_100%)]" />
    </div>

    <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
      <div className="max-w-2xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#5EE0E2]">
          Private Florida Keys Charters
        </p>

        <h1 className="text-5xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl">
          Private
          <br />
          Florida Keys
          <br />
          <span className="font-serif italic normal-case text-[#37D6D8]">
            Charters
          </span>
        </h1>

        <p className="mt-7 max-w-xl text-xl font-semibold leading-8 text-white">
          Fishing. Snorkeling. Ecological Tours. Sandbar Excursions. Build
          Your Own Adventure.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#18B7B9] text-2xl">
            ☎
          </div>
          <div>
            <p className="text-sm font-bold uppercase text-white/80">
              Call to Book
            </p>
            <p className="text-3xl font-black text-white">
              (305) 735-4070
            </p>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://www.mycaptain.com/booking/islamoradacoastaladventures?_gl=1*1793zsn*_gcl_au*NTQ5MTI4NTc4LjE3ODA4NzU3NTQ"
            className="rounded-md bg-[#F26B5E] px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white shadow-lg transition hover:bg-[#df5a4f]"
          >
            Book Your Adventure →
          </a>

          <a
            href="#adventures"
            className="rounded-md border-2 border-white px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#063247]"
          >
            View Charters
          </a>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="ml-auto h-[500px] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
          <img
            src="/hero-boat.jpg"
            alt="Islamorada Coastal Adventures boat on clear Florida Keys water"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  </section>

  {/* HOTEL PICKUP STRIP */ }
  <section className="bg-[#063247] px-6 py-6 text-white">
    <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 text-center">
      <span className="text-3xl">🏨</span>
      <p className="text-xl font-black md:text-2xl">
        Staying at a hotel? We can arrange pickup at your hotel dock when
        available or the nearest marina.
      </p>
    </div>
  </section>

  {/* FEATURE STRIP */ }
  <section className="border-b border-slate-200 bg-[#F7F3EA] px-6 py-6">
    <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
      <div className="flex items-center gap-4 border-slate-300 md:border-r">
        <span className="text-4xl text-[#075E78]">👥</span>
        <div>
          <p className="font-black text-[#063247]">Private Charters</p>
          <p className="text-sm text-slate-600">Just your crew</p>
        </div>
      </div>

      <div className="flex items-center gap-4 border-slate-300 md:border-r">
        <span className="text-4xl text-[#075E78]">👨‍👩‍👧‍👦</span>
        <div>
          <p className="font-black text-[#063247]">Family Friendly</p>
          <p className="text-sm text-slate-600">All ages welcome</p>
        </div>
      </div>

      <div className="flex items-center gap-4 border-slate-300 md:border-r">
        <span className="text-4xl text-[#075E78]">⚓</span>
        <div>
          <p className="font-black text-[#063247]">
            Retired Navy SEAL Captain
          </p>
          <p className="text-sm text-slate-600">Experience you can trust</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-4xl text-[#075E78]">📍</span>
        <div>
          <p className="font-black text-[#063247]">Hotel or Marina Pickup</p>
          <p className="text-sm text-slate-600">Convenient and easy</p>
        </div>
      </div>
    </div>
  </section>

  {/* ADVENTURE CARDS */ }
  <section id="adventures" className="bg-white px-6 py-20">
    <div className="mx-auto max-w-7xl">
      <div className="text-center">
        <p className="font-serif text-3xl italic text-[#18B7B9]">
          Explore the Keys
        </p>
        <h2 className="mt-1 text-4xl font-black uppercase tracking-tight text-[#063247] sm:text-5xl">
          Choose Your Adventure
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-5">
        {[
          {
            id: "fishing",
            icon: "🐟",
            image: "/backcountry-flats-fishing.jpg",
            title: "Backcountry / Flats Fishing",
            text: "Light tackle fishing in calm, scenic backcountry waters.",
          },
          {
            id: "snorkeling",
            icon: "🤿",
            image: "/snorkeling-reef-with-fish.jpg",
            title: "Private Snorkeling Tours",
            text: "Vibrant reefs, tropical fish, and crystal clear waters.",
          },
          {
            id: "eco-tours",
            icon: "🌿",
            image: "/eco-tour.jpg",
            title: "Ecological Tours",
            text: "Explore the natural beauty of the Florida Keys.",
          },
          {
            id: "sandbar",
            icon: "🏖️",
            image: "/sandbar-excursions.jpg",
            title: "Sandbar Excursions",
            text: "Relax, swim, float, and soak up the Florida sun.",
          },
          {
            id: "custom-adventure",
            icon: "🧭",
            image: "/sandbar-family.jpg",
            title: "Build Your Own Adventure",
            text: "Mix, match, and customize your perfect day.",
          },
        ].map((card) => (
          <a
            href={`/${card.id}`}
            id={card.id}
            key={card.title}
            className="block scroll-mt-32 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="relative px-5 pb-7 pt-10 text-center">
              <div className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#18B7B9] text-2xl shadow-lg">
                {card.icon}
              </div>

              <h3 className="text-xl font-black uppercase leading-6 text-[#063247]">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {card.text}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>

  {/* FLEXIBILITY SECTION */ }
  {/* FLEXIBILITY SECTION */ }
  <section id="about" className="bg-white px-6 pb-20">
    <div className="mx-auto grid max-w-7xl gap-8 rounded-xl bg-[#DDF7F5] p-6 md:grid-cols-2 md:p-8">
      <div className="h-[300px] overflow-hidden rounded-lg md:h-[340px]">
        <img
          src="/sandbar-family.jpg"
          alt="Islamorada sandbar snorkeling adventure"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-black uppercase leading-tight text-[#063247] sm:text-4xl">
          Flexibility Is Our Specialty
        </h2>

        <p className="mt-1 font-serif text-3xl italic text-[#18B7B9] sm:text-4xl">
          It&apos;s Your Day.
        </p>

        <p className="mt-5 leading-8 text-slate-700">
          Want to go fishing in the morning and hang out on a sandbar in the
          afternoon? Add snorkeling to your eco tour? No problem. We&apos;ll
          help you build the perfect custom itinerary for an unforgettable
          day on the water.
        </p>

        <a
          href="https://www.mycaptain.com/booking/islamoradacoastaladventures?_gl=1*1793zsn*_gcl_au*NTQ5MTI4NTc4LjE3ODA4NzU3NTQ"
          className="mt-7 w-fit rounded-md bg-[#063247] px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#075E78]"
        >
          Build Your Custom Adventure →
        </a>
      </div>
    </div>
  </section>

  {/* WHY CHOOSE US */ }
  <section id="reviews" className="bg-white px-6 pb-20">
    <div className="mx-auto max-w-7xl">
      <h2 className="text-center text-4xl font-black uppercase tracking-tight text-[#063247]">
        Why Choose Islamorada Coastal Adventures?
      </h2>

      <div className="mt-10 grid gap-8 md:grid-cols-4">
        {[
          {
            icon: "🛡️",
            title: "Experienced & Local",
            text: "Captain-led charters with deep local knowledge.",
          },
          {
            icon: "🚤",
            title: "Top Quality Boats",
            text: "Comfortable boats built for safety and performance.",
          },
          {
            icon: "⭐",
            title: "5-Star Experiences",
            text: "Happy guests and real adventures on the water.",
          },
          {
            icon: "🐠",
            title: "Sustainable & Respectful",
            text: "We protect what we love for future generations.",
          },
        ].map((item) => (
          <div key={item.title} className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DDF7F5] text-4xl">
              {item.icon}
            </div>
            <h3 className="mt-5 text-lg font-black uppercase text-[#063247]">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* FINAL CTA */ }
  <section id="booking" className="px-6 pb-6">
    <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl shadow-xl">
      <img
        src="/footer-reef.jpg"
        alt="Florida Keys reef background"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />

      <div className="absolute inset-0 bg-[#063247]/75" />

      <div className="relative z-10 p-8 text-white md:flex md:items-center md:justify-between">
        <div>
          <p className="text-4xl font-black uppercase">
            Ready For Your Next Adventure?
          </p>

          <p className="mt-2 font-serif text-4xl italic text-[#5EE0E2]">
            Let&apos;s Get You on the Water!
          </p>
        </div>

        <div className="mt-8 md:mt-0 md:text-right">
          <p className="text-sm font-black uppercase text-white/80">
            Call to Book Today
          </p>

          <p className="text-4xl font-black">(305) 735-4070</p>

          <a
            href="https://www.mycaptain.com/booking/islamoradacoastaladventures?_gl=1*1793zsn*_gcl_au*NTQ5MTI4NTc4LjE3ODA4NzU3NTQ"
            className="mt-4 inline-block rounded-md bg-[#F26B5E] px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#df5a4f]"
          >
            Book Your Adventure Now →
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* FOOTER */ }
      <footer id="contact" className="relative overflow-hidden bg-[#063247] px-6 py-12 text-white">
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
                className="h-30 w-auto object-contain"
              />
            </div>

            <p className="mt-5 text-sm leading-6 text-white/75">
              Private charters in the beautiful Florida Keys. Fishing,
              snorkeling, eco tours, sandbars, and custom adventures — your
              day, your way.
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
              <a href="#adventures" className="hover:text-white">
                Fishing
              </a>
              <a href="#about" className="hover:text-white">
                Custom Adventure
              </a>
              <a href="#adventures" className="hover:text-white">
                Snorkeling
              </a>
              <a href="#about" className="hover:text-white">
                About Us
              </a>
              <a href="#adventures" className="hover:text-white">
                Eco Tours
              </a>
              <a href="#reviews" className="hover:text-white">
                Reviews
              </a>
              <a href="#adventures" className="hover:text-white">
                Sandbar Excursions
              </a>
              <a href="https://www.mycaptain.com/booking/islamoradacoastaladventures?_gl=1*1793zsn*_gcl_au*NTQ5MTI4NTc4LjE3ODA4NzU3NTQ" className="hover:text-white">
                Book Now
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-black uppercase tracking-wide">Contact</h3>

            <div className="mt-5 space-y-3 text-sm leading-6 text-white/75">
              <a href="https://www.mycaptain.com/booking/islamoradacoastaladventures?_gl=1*1793zsn*_gcl_au*NTQ5MTI4NTc4LjE3ODA4NzU3NTQ" className="block hover:text-white">
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
            <div></div>
            <h3 className="font-black uppercase tracking-wide">Hours</h3>

            <div className="mt-5 space-y-3 text-sm leading-6 text-white/75">
              <p>Daily: 7:00 AM – 7:00 PM</p>
              <p>By reservation</p>
              <p>Weather permitting</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/80 md:flex md:items-center md:justify-between">
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

      <a
        href="/accessibility"
        aria-label="View accessibility statement"
        className="fixed bottom-24 right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#063247] text-2xl text-white shadow-xl transition hover:bg-[#18B7B9] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#18B7B9]"
      >
        ♿
      </a>
    </main >
  );
}