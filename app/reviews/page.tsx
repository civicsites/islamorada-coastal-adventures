import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import TrustindexWidget from "../components/TrustindexWidget";
export const metadata = {
    title: "Reviews | Islamorada Coastal Adventures",
    description:
        "Read customer reviews for Islamorada Coastal Adventures private Florida Keys charters.",
};

export default function ReviewsPage() {
    return (
        <main className="min-h-screen bg-white text-[#102A3A]">
            <SiteHeader />

            <section className="bg-[#063247] px-6 py-16 text-center text-white">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5EE0E2]">
                    Customer Reviews
                </p>
                <h1 className="mt-3 text-4xl font-black uppercase tracking-tight md:text-6xl">
                    What Guests Are Saying
                </h1>
                <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">
                    Real reviews from guests who have experienced Islamorada Coastal
                    Adventures on the water.
                </p>
            </section>

            <section className="bg-[#F8FAFC] px-6 py-16">
                <div className="mx-auto max-w-7xl rounded-2xl bg-white p-4 shadow-xl md:p-8">
                    <TrustindexWidget />
                </div>
            </section>

            <SiteFooter />
        </main>
    );
}