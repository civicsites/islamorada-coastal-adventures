export default function SiteHeader() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/fishing", label: "Fishing" },
    { href: "/snorkeling", label: "Snorkeling" },
    { href: "/eco-tours", label: "Eco Tours" },
    { href: "/sandbar", label: "Sandbar" },
    { href: "/custom-adventure", label: "Custom Adventure" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="bg-[#063247] px-4 py-2 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 text-center text-xs font-semibold md:flex-row md:items-center md:justify-between md:text-left">
          <p>Call to Book: (305) 735-4070</p>
          <p>captain@islamoradacoastaladventures.com</p>
          <p>Islamorada, Florida Keys</p>
          <a
            href="https://www.facebook.com/IslamoradaCoastalAdventures"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            >
              <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.9h2.78l-.44 2.91h-2.34V22c4.78-.76 8.45-4.92 8.45-9.94Z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/islamorada_coastal_adventures/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#FEDA75] via-[#D62976] to-[#4F5BD5] text-[10px] font-black text-white transition hover:scale-105"
          >
            IG
          </a>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-4 md:flex-row md:justify-between md:px-6">
        <a href="/" className="flex items-center justify-center">
          <img
            src="/logo.JPG"
            alt="Islamorada Coastal Adventures logo"
            className="h-20 w-auto object-contain md:h-24"
          />
        </a>

        <div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-xs font-black uppercase tracking-wide text-[#063247] md:w-auto md:text-sm">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[#18B7B9]">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="tel:3057354070"
          className="rounded-md bg-[#F26B5E] px-5 py-3 text-sm font-black uppercase tracking-wide text-white shadow-md transition hover:bg-[#df5a4f]"
        >
          Book Now
        </a>
      </nav>
    </header>
  );
}
