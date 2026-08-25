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
                Islamorada Backcountry & Flats Fishing Charters
              </h1>

              <p className="mt-6 text-xl leading-8 text-white/85">
                Experience private Islamorada fishing charters in the calm, scenic
                backcountry waters of the Florida Keys. Enjoy light tackle flats and
                backcountry fishing built around your group, your pace, and your day
                on the water.
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
                src="/backcountryfishing.jpeg"
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
        <section className="px-6 py-16 bg-[#F8FAFC]">
  <div className="mx-auto max-w-5xl">
    <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5EE0E2]">
      Fishing Charter FAQs
    </p>

    <h2 className="mt-3 text-3xl font-black uppercase text-[#063247]">
      Islamorada Fishing Charter Questions
    </h2>

    <div className="mt-8 space-y-6">
      <div>
        <h3 className="text-xl font-black text-[#063247]">
          How much does an Islamorada fishing charter cost?
        </h3>
        <p className="mt-2 leading-7 text-slate-700">
          Islamorada Coastal Adventures offers private fishing trips with
          options based on trip length and the type of day you want on the
          water. Contact Captain Matt or use the booking page to see current
          availability and pricing.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-black text-[#063247]">
          Are your Islamorada fishing charters good for kids?
        </h3>
        <p className="mt-2 leading-7 text-slate-700">
          Yes. Trips can be planned for families, beginners, experienced
          anglers, and small groups. Captain Matt can tailor the day to your
          group and experience level.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-black text-[#063247]">
          What kind of fishing do you offer in Islamorada?
        </h3>
        <p className="mt-2 leading-7 text-slate-700">
          Trips focus on light tackle, flats, backcountry, mangrove, and
          inshore fishing around Islamorada and the Florida Keys.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-black text-[#063247]">
          What fish can we catch in Islamorada?
        </h3>
        <p className="mt-2 leading-7 text-slate-700">
          Depending on the season and conditions, anglers may target species
          such as snook, redfish, tarpon, trout, snapper, and other Florida
          Keys inshore and backcountry fish.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-black text-[#063247]">
          Do you offer backcountry and mangrove fishing?
        </h3>
        <p className="mt-2 leading-7 text-slate-700">
          Yes. Backcountry and mangrove fishing are a major part of the
          Islamorada experience and can offer calm water, beautiful scenery,
          and excellent light-tackle fishing.
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