import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ServiceCTA from "../components/ServiceCTA";

export const metadata = {
    title: "Islamorada Fishing Charters | Islamorada Coastal Adventures",
    description:
      "Private Islamorada fishing charters for backcountry and flats fishing in the Florida Keys. Book a relaxed private fishing trip with Islamorada Coastal Adventures.",
  };
export default function FishingPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-white text-[#102A3A]">
      <section className="relative overflow-hidden bg-[#063247] px-6 py-16 text-white md:py-20">
          <img
            src="/footer-reef.jpg"
            alt="Florida Keys reef background"
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />

          <div className="absolute inset-0 bg-[#063247]/75" />

          <div className="relative z-10 mx-auto grid min-h-[520px] max-w-7xl gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5EE0E2]">
                Islamorada Fishing Charter
              </p>

              <h1 className="mt-4 text-5xl font-black uppercase leading-tight md:text-7xl">
                Backcountry / Flats Fishing
              </h1>

              <p className="mt-6 text-xl leading-8 text-white/85">
                Light tackle fishing in calm, scenic backcountry waters
                throughout the Florida Keys. A private fishing experience built
                around your group, your pace, and your day on the water.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:3057354070"
                  className="rounded-md bg-[#F26B5E] px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white shadow-lg transition hover:bg-[#df5a4f]"
                >
                  Call to Book
                </a>

                <a
                  href="/"
                  className="rounded-md border-2 border-white px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#063247]"
                >
                  Back to Home
                </a>
              </div>
            </div>

            <div className="h-[320px] overflow-hidden rounded-2xl shadow-2xl md:h-[420px]">
              <img
                src="/fishing-page.jpg"
                alt="Backcountry flats fishing in Islamorada"
                className="h-full w-full object-cover object-[center_34%]"
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
            <div className="rounded-xl bg-[#DDF7F5] p-8">
              <h2 className="text-2xl font-black uppercase text-[#063247]">
                What to Expect
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Calm water, beautiful backcountry scenery, and a private
                charter focused on light tackle fishing and a relaxed Florida
                Keys experience.
              </p>
            </div>

            <div className="rounded-xl bg-[#DDF7F5] p-8">
              <h2 className="text-2xl font-black uppercase text-[#063247]">
                Great For
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Families, beginners, experienced anglers, small groups, and
                guests who want a quieter fishing trip away from crowded areas.
              </p>
            </div>

            <div className="rounded-xl bg-[#DDF7F5] p-8">
              <h2 className="text-2xl font-black uppercase text-[#063247]">
                Call to Plan
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Call Captain Matt to talk through availability, timing, pickup
                options, and what type of fishing day is best for your group.
              </p>
            </div>
          </div>
        </section>

        <ServiceCTA />
      </main>

      <SiteFooter />
    </>
  );
}