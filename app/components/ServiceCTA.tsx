export default function ServiceCTA() {
    return (
      <section className="px-6 py-16">
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
                Ready to Plan This Trip?
              </p>
  
              <p className="mt-2 font-serif text-4xl italic text-[#5EE0E2]">
                Let&apos;s Get You on the Water.
              </p>
  
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
                Call Captain Matt to talk through availability, timing, pickup
                options, weather, and the best plan for your group.
              </p>
            </div>
  
            <div className="mt-8 flex flex-col gap-3 md:mt-0 md:text-right">
              <p className="text-sm font-black uppercase text-white/80">
                Call to Book
              </p>
  
              <p className="text-4xl font-black">(305) 735-4070</p>
  
              <a
                href="tel:3057354070"
                className="inline-block rounded-md bg-[#F26B5E] px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#df5a4f]"
              >
                Call Now →
              </a>
  
              <a
                href="/"
                className="inline-block rounded-md border border-white/50 px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#063247]"
              >
                Back to Adventures
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }