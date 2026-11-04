"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { GalleryPhoto } from "./photos";

export default function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
  const [limit, setLimit] = useState(24);
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const visible = photos;
  const active = selected === null ? null : visible[selected];
  const move = (step: number) => setSelected((index) => index === null ? null : (index + step + visible.length) % visible.length);

  useEffect(() => {
    if (selected === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selected]);

  function close() {
    dialog.current?.close();
    setSelected(null);
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16" aria-label="Adventure photos">
      <p className="my-6 text-sm text-slate-600" aria-live="polite">{visible.length} {visible.length === 1 ? "photo" : "photos"} · Select a photo to take a closer look.</p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.slice(0, limit).map((photo, index) => (
          <button type="button" key={photo.src} onClick={() => setSelected(index)} aria-label={`View ${photo.title}`} className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm transition hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#063247]">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={photo.src} alt={photo.title} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition duration-500 motion-safe:group-hover:scale-105" />
              <span className="absolute bottom-4 right-4 rounded-full bg-[#063247]/85 px-3 py-1 text-xs font-bold text-white">View photo ↗</span>
            </div>
            <div className="px-5 py-4"><h2 className="font-bold capitalize">{photo.title}</h2></div>
          </button>
        ))}
      </div>
      {limit < visible.length && <div className="mt-8 text-center"><button type="button" onClick={() => setLimit((count) => count + 24)} className="rounded-full bg-[#063247] px-6 py-3 font-bold text-white hover:bg-[#087C7E]">Load more photos ({visible.length - limit} remaining)</button></div>}
      <dialog ref={dialog} onCancel={close} onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) close(); }} onKeyDown={(event) => { if (event.key === "ArrowRight") { event.preventDefault(); move(1); } if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); } }} aria-label="Photo viewer" className="fixed inset-0 m-auto max-h-[95dvh] w-[min(1100px,95vw)] max-w-none overflow-auto rounded-2xl bg-[#063247] p-4 text-white shadow-2xl backdrop:bg-black/85 md:p-6">
        {active && <>
          <div className="mb-4 flex items-center justify-between gap-4"><p aria-live="polite" className="text-sm">{selected! + 1} / {visible.length}</p><button type="button" autoFocus onClick={close} className="rounded-full border border-white/50 px-4 py-2 font-bold hover:bg-white/20">Close ✕</button></div>
          <div className="relative h-[60dvh]"><Image src={active.src} alt={active.title} fill sizes="95vw" className="object-contain" /></div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4"><button type="button" onClick={() => move(-1)} aria-label="Previous photo" className="rounded-full border border-white/50 px-4 py-2 hover:bg-white/20">← Previous</button><p className="text-center font-bold capitalize">{active.title}</p><button type="button" onClick={() => move(1)} aria-label="Next photo" className="rounded-full border border-white/50 px-4 py-2 hover:bg-white/20">Next →</button></div>
        </>}
      </dialog>
    </section>
  );
}
