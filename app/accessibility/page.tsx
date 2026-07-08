export const metadata = {
  title: "Accessibility Statement | Islamorada Coastal Adventures",
  description:
    "Accessibility statement for Islamorada Coastal Adventures.",
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-[#102A3A]">
      <section className="mx-auto max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#18B7B9]">
          Accessibility
        </p>

        <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-[#063247]">
          Accessibility Statement
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          Islamorada Coastal Adventures is committed to making our website
          accessible and usable for all visitors, including people with
          disabilities.
        </p>

        <p className="mt-5 leading-8 text-slate-700">
          We aim to follow commonly recognized accessibility best practices,
          including the Web Content Accessibility Guidelines WCAG 2.1 Level AA,
          where reasonably possible. These guidelines help make web content more
          accessible for people using assistive technologies, keyboard
          navigation, screen readers, mobile devices, and other tools.
        </p>

        <h2 className="mt-10 text-2xl font-black text-[#063247]">
          Accessibility Features
        </h2>

        <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-700">
          <li>Responsive design for mobile, tablet, and desktop users.</li>
          <li>Text alternatives for meaningful images where applicable.</li>
          <li>Keyboard-friendly navigation structure.</li>
          <li>Readable color contrast and clear visual hierarchy.</li>
          <li>Descriptive page titles, headings, and link text.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-black text-[#063247]">
          Ongoing Effort
        </h2>

        <p className="mt-4 leading-8 text-slate-700">
          Accessibility is an ongoing effort. As we update our website, we will
          continue working to improve accessibility, usability, and compatibility
          with assistive technologies.
        </p>

        <h2 className="mt-10 text-2xl font-black text-[#063247]">
          Need Help Accessing Information?
        </h2>

        <p className="mt-4 leading-8 text-slate-700">
          If you experience difficulty accessing any part of this website or need
          assistance with booking information, please contact us and we will make
          reasonable efforts to provide the information in an accessible format.
        </p>

        <div className="mt-8 rounded-xl bg-[#F7F3EA] p-6">
          <p className="font-bold text-[#063247]">Contact Information</p>
          <p className="mt-2 text-slate-700">
            Phone:{" "}
            <a className="font-bold text-[#063247] underline" href="tel:3057354070">
              (305) 735-4070
            </a>
          </p>
          <p className="mt-2 text-slate-700">
            Email:{" "}
            <a
              className="font-bold text-[#063247] underline"
              href="mailto:captain@islamoradacoastaladventures.com"
            >
              captain@islamoradacoastaladventures.com
            </a>
          </p>
        </div>

        <p className="mt-8 text-sm leading-6 text-slate-500">
          Last updated: July 2026
        </p>
      </section>
    </main>
  );
}
