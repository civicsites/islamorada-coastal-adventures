import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ServiceCTA from "../components/ServiceCTA";

export const metadata = {
  title: "Private Islamorada Boat Charters | Islamorada Coastal Adventures",
  description:
    "Create a private Islamorada boat charter with fishing, snorkeling, sandbar time, eco touring, sightseeing, and a custom Florida Keys experience.",
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
                Private Islamorada Boat Charters
              </h1>

              <p className="mt-6 text-xl leading-8 text-white/85">
                Create your own private Islamorada boat charter with fishing,
                snorkeling, sandbar time, eco touring, sightseeing, and relaxing
                on the water. Your trip is customized around your group and your day.
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
        <section className="px-6 py-16 bg-[#F8FAFC]">
  <div className="mx-auto max-w-5xl">
    <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5EE0E2]">
      Custom Charter FAQs
    </p>

    <h2 className="mt-3 text-3xl font-black uppercase text-[#063247]">
      Custom Florida Keys Adventure Questions
    </h2>

    <div className="mt-8 space-y-6">
      <div>
        <h3 className="text-xl font-black text-[#063247]">
          What can we include in a custom private boat charter?
        </h3>
        <p className="mt-2 leading-7 text-slate-700">
          Your group can combine activities such as fishing, snorkeling,
          sandbar time, eco touring, sightseeing, and relaxing on the water
          into one private Florida Keys adventure.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-black text-[#063247]">
          Are custom boat trips good for families and groups?
        </h3>
        <p className="mt-2 leading-7 text-slate-700">
          Yes. Custom trips are a great option for families, couples, small
          groups, and guests with different interests who want a flexible day
          on the water.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-black text-[#063247]">
          How do we plan a custom Islamorada boat adventure?
        </h3>
        <p className="mt-2 leading-7 text-slate-700">
          Contact Captain Matt to discuss your group, timing, conditions, and
          activities. He can help build a private itinerary around the type of
          Florida Keys experience you want.
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