export default function SiteHeader() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/fishing", label: "Fishing" },
    { href: "/snorkeling", label: "Snorkeling" },
    { href: "/eco-tours", label: "Eco Tours" },
    { href: "/sandbar", label: "Sandbar" },
    { href: "/custom-adventure", label: "Custom Adventure" },
    { href: "/about", label: "About" },
    { href: "/reviews", label: "Reviews" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="bg-[#063247] px-4 py-2 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs font-semibold leading-tight md:flex-row md:items-center md:justify-between md:text-sm">
          <p>Call to Book: (305) 735-4070</p>
          <p>Matt@islamoradacoastaladventures.com</p>

          <div className="flex items-center justify-center gap-3">
            <p>Islamorada, Florida Keys</p>

            <a
              href="https://www.facebook.com/IslamoradaCoastalAdventures"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-sm font-black text-white shadow-sm transition hover:scale-105 hover:bg-[#0f5fc2]"
            >
              f
            </a>

            <a
              href="https://www.instagram.com/islamorada_coastal_adventures/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FEDA75] via-[#D62976] to-[#4F5BD5] text-[10px] font-black text-white shadow-sm transition hover:scale-105"
            >
              IG
            </a>
          </div>
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
