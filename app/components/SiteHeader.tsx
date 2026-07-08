export default function SiteHeader() {
    return (
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="bg-[#063247] px-6 py-2 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 text-xs font-semibold md:flex-row md:items-center md:justify-between">
            <p>Call to Book: (305) 735-4070</p>
            <p>captain@islamoradacoastaladventures.com</p>
            <p>Islamorada, Florida Keys</p>
          </div>
        </div>
  
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo.JPG"
              alt="Islamorada Coastal Adventures logo"
              className="h-25 w-auto object-contain"
            />
          </a>
  
          <div className="hidden items-center gap-7 text-sm font-bold text-[#063247] md:flex">
            <a href="/" className="hover:text-[#18B7B9]">Home</a>
            <a href="/fishing" className="hover:text-[#18B7B9]">Fishing</a>
            <a href="/snorkeling" className="hover:text-[#18B7B9]">Snorkeling</a>
            <a href="/eco-tours" className="hover:text-[#18B7B9]">Eco Tours</a>
            <a href="/sandbar" className="hover:text-[#18B7B9]">Sandbar</a>
            <a href="/custom-adventure" className="hover:text-[#18B7B9]">Custom Adventure</a>
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