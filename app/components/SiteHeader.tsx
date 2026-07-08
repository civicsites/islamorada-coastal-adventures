export default function SiteHeader() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/fishing", label: "Fishing" },
    { href: "/snorkeling", label: "Snorkeling" },
    { href: "/eco-tours", label: "Eco Tours" },
    { href: "/sandbar", label: "Sandbar" },
    { href: "/custom-adventure", label: "Custom Adventure" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="bg-[#063247] px-6 py-2 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 text-xs font-semibold md:flex-row md:items-center md:justify-between">
          <p>Call to Book: (305) 735-4070</p>
          <p>captain@islamoradacoastaladventures.com</p>
          <p>Islamorada, Florida Keys</p>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.JPG"
            alt="Islamorada Coastal Adventures logo"
            className="h-25 w-auto object-contain"
          />
        </a>

        <div className="hidden items-center gap-7 text-sm font-bold text-[#063247] lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[#18B7B9]">
              {link.label}
            </a>
          ))}
        </div>

        <details className="relative">
          <summary className="cursor-pointer rounded-md bg-[#063247] px-4 py-2 text-sm font-black uppercase tracking-wide text-white">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 flex w-56 flex-col rounded-md border border-slate-200 bg-white p-3 text-sm font-bold text-[#063247] shadow-lg">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="rounded px-3 py-2 hover:bg-cyan-50">
                {link.label}
              </a>
            ))}
          </div>
        </details>

        <a
          href="tel:3057354070"
          className="hidden rounded-md bg-[#F26B5E] px-5 py-3 text-sm font-black uppercase tracking-wide text-white shadow-md transition hover:bg-[#df5a4f] sm:inline-block"
        >
          Book Now
        </a>
      </nav>
    </header>
  );
}
