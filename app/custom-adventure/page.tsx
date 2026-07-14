import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ServiceCTA from "../components/ServiceCTA";

export const metadata = {
    title: "Custom Florida Keys Boat Adventures | Islamorada Coastal Adventures",
    description:
      "Build your own private Florida Keys boat adventure with fishing, snorkeling, sandbar time, eco touring, sightseeing, and relaxing on the water.",
  };
export default function CustomAdventurePage() {
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
                Build Your Own Florida Keys Adventure
              </p>

              <h1 className="mt-4 text-5xl font-black uppercase leading-tight md:text-7xl">
                Build Your Own Adventure
              </h1>

              <p className="mt-6 text-xl leading-8 text-white/85">
                Mix fishing, snorkeling, sandbar time, eco touring,
                sightseeing, and relaxing on the water into one custom private
                trip designed around your perfect day.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://www.mycaptain.com/booking/islamoradacoastaladventures?_gl=1*1793zsn*_gcl_au*NTQ5MTI4NTc4LjE3ODA4NzU3NTQ"
                  className="rounded-md bg-[#F26B5E] px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white shadow-lg transition hover:bg-[#df5a4f]"
                >
                  Book Now
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
                src="/custom-adventure-page.jpg"
                alt="Custom Florida Keys adventure"
                className="h-full w-full object-cover"
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
                A flexible trip where your group can combine activities and
                build a day that fits your pace, interests, and comfort level.
              </p>
            </div>

            <div className="rounded-xl bg-[#DDF7F5] p-8">
              <h2 className="text-2xl font-black uppercase text-[#063247]">
                Great For
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Groups with mixed interests, families, repeat guests, and anyone
                who wants something more personal than a standard tour.
              </p>
            </div>

            <div className="rounded-xl bg-[#DDF7F5] p-8">
              <h2 className="text-2xl font-black uppercase text-[#063247]">
                Call to Plan
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Call Captain Matt to build your custom itinerary and talk
                through timing, pickup options, conditions, and activity
                choices.
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