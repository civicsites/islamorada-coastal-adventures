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
      <div className="bg-[#063247] px-4 py-2 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 text-center text-xs font-semibold md:flex-row md:items-center md:justify-between md:text-left">
          <p>Call to Book: (305) 735-4070</p>
          <p>captain@islamoradacoastaladventures.com</p>
          <p>Islamorada, Florida Keys</p>
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
