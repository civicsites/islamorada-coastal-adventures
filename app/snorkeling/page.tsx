import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ServiceCTA from "../components/ServiceCTA";

export const metadata = {
  title: "Islamorada Snorkeling Tours | Islamorada Coastal Adventures",
  description:
    "Private Islamorada snorkeling tours in the Florida Keys with clear water, reef scenery, tropical fish, and a relaxed private boat experience.",
};

export default function SnorkelingPage() {
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
                Private Florida Keys Snorkeling
              </p>

              <h1 className="mt-4 text-5xl font-black uppercase leading-tight md:text-7xl">
                Islamorada Snorkeling Tours
              </h1>

              <p className="mt-6 text-xl leading-8 text-white/85">
                Enjoy private snorkeling in Islamorada and the Florida Keys with clear
                water, tropical fish, reef scenery, and a relaxed experience designed
                around your group.
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
                src="/snorkeling-4.jpeg"
                alt="Private snorkeling tour in the Florida Keys"
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
                Clear water, reef views, tropical fish, and time in the water at
                a relaxed pace.
              </p>
            </div>

            <div className="rounded-xl bg-[#DDF7F5] p-8">
              <h2 className="text-2xl font-black uppercase text-[#063247]">
                Great For
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Families, couples, small groups, beginners, and guests who want
                a private snorkeling experience.
              </p>
            </div>

            <div className="rounded-xl bg-[#DDF7F5] p-8">
              <h2 className="text-2xl font-black uppercase text-[#063247]">
                Call to Plan
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Call to discuss timing, conditions, pickup options, and the best
                snorkeling plan for your group.
              </p>
            </div>
          </div>
        </section>
        <section className="px-6 py-16 bg-[#F8FAFC]">
  <div className="mx-auto max-w-5xl">
    <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5EE0E2]">
      Snorkeling FAQs
    </p>

    <h2 className="mt-3 text-3xl font-black uppercase text-[#063247]">
      Islamorada Snorkeling Questions
    </h2>

    <div className="mt-8 space-y-6">
      <div>
        <h3 className="text-xl font-black text-[#063247]">
          Where can you snorkel in Islamorada?
        </h3>
        <p className="mt-2 leading-7 text-slate-700">
          Islamorada offers access to clear Florida Keys water, reef areas,
          tropical fish, and scenic snorkeling locations. Trip plans can vary
          based on weather, water conditions, and your group.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-black text-[#063247]">
          Are Islamorada snorkeling tours good for beginners?
        </h3>
        <p className="mt-2 leading-7 text-slate-700">
          Yes. Private snorkeling trips can be planned for beginners,
          families, couples, and small groups looking for a relaxed experience
          on the water.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-black text-[#063247]">
          Can we combine snorkeling with a sandbar or sightseeing trip?
        </h3>
        <p className="mt-2 leading-7 text-slate-700">
          Yes. Custom private trips can combine snorkeling with sandbar time,
          sightseeing, eco touring, or other Florida Keys activities.
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