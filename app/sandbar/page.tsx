import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ServiceCTA from "../components/ServiceCTA";

export const metadata = {
    title: "Islamorada Sandbar Excursions | Islamorada Coastal Adventures",
    description:
      "Private Islamorada sandbar excursions for families, couples, and groups. Swim, relax, and enjoy the shallow clear water of the Florida Keys.",
  };
export default function SandbarPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-white text-[#102A3A]">
        <section className="relative overflow-hidden bg-[#063247] px-6 py-20 text-white">
          <img
            src="/footer-reef.jpg"
            alt="Florida Keys reef background"
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />

          <div className="absolute inset-0 bg-[#063247]/75" />

          <div className="relative z-10 mx-auto grid min-h-[520px] max-w-7xl gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5EE0E2]">
                Islamorada Sandbar Excursions
              </p>

              <h1 className="mt-4 text-5xl font-black uppercase leading-tight md:text-7xl">
                Sandbar Excursions
              </h1>

              <p className="mt-6 text-xl leading-8 text-white/85">
                Relax, swim, float, and enjoy the shallow clear water of the
                Florida Keys. A private sandbar trip is perfect for families,
                couples, and groups who want an easy day on the water.
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
                src="/sandbar-page.jpg"
                alt="Islamorada sandbar excursion"
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
                Clear shallow water, time to swim and float, relaxing views, and
                a private trip built around your group.
              </p>
            </div>

            <div className="rounded-xl bg-[#DDF7F5] p-8">
              <h2 className="text-2xl font-black uppercase text-[#063247]">
                Great For
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Families, kids, couples, friend groups, and anyone who wants a
                low-stress day enjoying the Florida Keys water.
              </p>
            </div>

            <div className="rounded-xl bg-[#DDF7F5] p-8">
              <h2 className="text-2xl font-black uppercase text-[#063247]">
                Call to Plan
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Call to discuss availability, pickup options, weather, and the
                best sandbar plan for your group.
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