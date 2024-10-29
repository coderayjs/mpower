"use client";

import ContactSectionOne from "../contact/elements/contact-section-1";
import SectionEight from "../home/elements/section-8";
import SectionNine from "../home/elements/section-9";
import SectionOne from "./elements/section-1";
import SectionTwo from "./elements/section-2";
import SectionThree from "./elements/section-3";

export default function PodComponent() {
  return (
    <div>
      <div className="bg-blue-700">
        <SectionOne />
      </div>

      <div className="max-w-4xl mb-10 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12 pt-20">
        <h2 className="max-w-4xl mb-2 font-sans text-5xl font-bold leading-none tracking-tight text-black sm:text-5xl md:mx-auto">
          Print on Demand Suppliers
        </h2>
        <p className="text-base text-black md:text-lg">
          Our approved print on demand suppliers. More coming soon.
        </p>
      </div>

      <SectionTwo />
      <SectionThree />

      <ContactSectionOne />
      <div className="py-5"></div>
      <SectionEight />
      <SectionNine />
    </div>
  );
}
