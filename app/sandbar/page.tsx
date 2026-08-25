import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ServiceCTA from "../components/ServiceCTA";

export const metadata = {
  title: "Islamorada Sandbar Charters | Islamorada Coastal Adventures",
  description:
    "Private Islamorada sandbar charters for families, couples, and groups. Relax, swim, and enjoy the shallow clear waters of the Florida Keys.",
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
                Islamorada Sandbar Charters
              </h1>

              <p className="mt-6 text-xl leading-8 text-white/85">
                Relax, swim, float, and enjoy a private Islamorada sandbar charter
                in the shallow clear waters of the Florida Keys. Perfect for families,
                couples, and groups looking for an easy day on the water.
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
          <section className="px-6 py-16 bg-[#F8FAFC]">
  <div className="mx-auto max-w-5xl">
    <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5EE0E2]">
      Sandbar Trip FAQs
    </p>

    <h2 className="mt-3 text-3xl font-black uppercase text-[#063247]">
      Islamorada Sandbar Questions
    </h2>

    <div className="mt-8 space-y-6">
      <div>
        <h3 className="text-xl font-black text-[#063247]">
          What is an Islamorada sandbar trip?
        </h3>
        <p className="mt-2 leading-7 text-slate-700">
          An Islamorada sandbar trip is a private boat excursion to shallow,
          clear Florida Keys water where your group can swim, float, relax,
          and enjoy time on the water at your own pace.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-black text-[#063247]">
          Are Islamorada sandbar trips good for families and kids?
        </h3>
        <p className="mt-2 leading-7 text-slate-700">
          Yes. Sandbar trips are a great option for families, kids, couples,
          and groups looking for a relaxed and easy day on the water.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-black text-[#063247]">
          How long is an Islamorada sandbar charter?
        </h3>
        <p className="mt-2 leading-7 text-slate-700">
          Trip length can vary depending on availability and the experience
          you want. Contact Captain Matt or check the booking page for current
          trip options and pricing.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-black text-[#063247]">
          Can we combine a sandbar trip with snorkeling or sightseeing?
        </h3>
        <p className="mt-2 leading-7 text-slate-700">
          Yes. Custom private trips can combine sandbar time with snorkeling,
          sightseeing, eco touring, or other Florida Keys activities.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-black text-[#063247]">
          What should we bring on a sandbar trip?
        </h3>
        <p className="mt-2 leading-7 text-slate-700">
          Bring sun protection, towels, drinks, and anything else you want for
          a comfortable day on the water. Captain Matt can help you plan for
          weather and trip conditions.
        </p>
      </div>
    </div>
  </div>
</section>

        <ServiceCTA />
      </main>

      <SiteFooter />
    </>
  );
}