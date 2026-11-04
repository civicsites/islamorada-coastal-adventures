import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ServiceCTA from "../components/ServiceCTA";
import PhotoGallery from "./PhotoGallery";
import { getGalleryPhotos } from "./photos";

export const metadata = {
  title: "Photo Gallery | Islamorada Coastal Adventures",
  description: "Explore photos of fishing, snorkeling, sandbar trips, and eco tours with Islamorada Coastal Adventures in the Florida Keys.",
  alternates: { canonical: "/gallery" },
};

export default async function GalleryPage() {
  const photos = await getGalleryPhotos();
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#F4FAFA] text-[#102A3A]">
        <section className="relative overflow-hidden bg-[#063247] px-6 py-20 text-white md:py-28">
          <img src="/sandbar2.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#063247]/90 to-[#063247]/30" />
          <div className="relative mx-auto max-w-7xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5EE0E2]">Our days on the water</p>
            <h1 className="mt-4 text-5xl font-black uppercase md:text-7xl">Adventure Gallery</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/90">Reef discoveries, sandbar smiles, and unforgettable catches. Take a look at life out here in the Florida Keys.</p>
          </div>
        </section>
        <PhotoGallery photos={photos} />
        <ServiceCTA />
      </main>
      <SiteFooter />
    </>
  );
}
