import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ServiceCTA from "../components/ServiceCTA";

export const metadata = {
    title: "About Captain Matt | Islamorada Coastal Adventures",
    description:
        "Learn about Captain Matt Foreman, retired Navy SEAL and owner of Islamorada Coastal Adventures in the Florida Keys.",
};

export default function AboutPage() {
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

                    <div className="relative z-10 mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
                        <div>
                            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5EE0E2]">
                                Meet Your Captain
                            </p>

                            <h1 className="mt-4 text-5xl font-black uppercase leading-tight md:text-7xl">
                                Captain Matt
                            </h1>

                            <p className="mt-3 text-sm font-black uppercase tracking-[0.25em] text-white/70">
                                Navy SEAL Retired
                            </p>

                            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/85">
                                The ocean has given me a lot. It&apos;s been my sanctuary, both
                                personally and professionally. Now it&apos;s time for me to give
                                back and share these amazing adventures with new people.
                            </p>
                        </div>
                        <div className="h-[320px] overflow-hidden rounded-2xl shadow-2xl md:h-[420px]">
                            <img
                                src="/Capt-Matt.jpg"
                                alt="Captain Matt Foreman"
                                className="h-full w-full object-cover object-[center_10%]"
                            />
                        </div>
                    </div>
                </section>

                <section className="px-6 py-16">
                    <div className="mx-auto max-w-5xl">
                        <div className="rounded-2xl bg-[#DDF7F5] p-8 shadow-md md:p-12">
                            <h2 className="text-4xl font-black text-[#063247]">History</h2>

                            <div className="mt-6 space-y-6 text-lg leading-8 text-slate-700">
                                <p>
                                    Matt Foreman has spent over 30 years on, under, or around the
                                    ocean both at work and during his off time. He has always been
                                    passionate about sharing adventures with friends and family.
                                    This didn&apos;t change as he transitioned from serving 22
                                    years as an active-duty Navy SEAL. Command Master Chief Matt
                                    Foreman retired from active duty in 2019 to pursue his
                                    life-long dream of starting Islamorada Coastal Adventures.
                                </p>

                                <p>
                                    Captain Matt is a combat veteran with multiple deployments in
                                    support of Operation Iraqi Freedom, Operation Enduring
                                    Freedom, and Operation New Dawn. He is a native of Virginia
                                    Beach VA and currently resides in Islamorada FL with his wife
                                    and three sons.
                                </p>
                            </div>

                            <h2 className="mt-12 text-4xl font-black text-[#063247]">
                                Veteran Program
                            </h2>

                            <div className="mt-6 space-y-6 text-lg leading-8 text-slate-700">
                                <p>
                                    Qualified veterans can receive sponsored adventures with
                                    Islamorada Coastal Adventures through donations on this website
                                    and other veteran support venues. He strongly believes that
                                    his fellow combat veterans benefit greatly from sharing
                                    experiences together among the serene landscapes and
                                    underwater environment that the Florida Keys offers.
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