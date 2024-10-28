import React from "react";
import SectionOne from "./elements/section-1";
import SectionTwo from "./elements/section-2";
import SectionSeven from "../home/elements/section-7";
import SectionEight from "../home/elements/section-8";
import SectionNine from "../home/elements/section-9";

export default function SuppliersComponent() {
  return (
    <div>
      <div className="bg-white">
        <SectionOne />
      </div>

      <div className="max-w-4xl mb-10 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12 pt-20">
        <h2 className="max-w-4xl mb-2 font-sans text-5xl font-bold leading-none tracking-tight text-black sm:text-5xl md:mx-auto">
          How it Works
        </h2>
        <p className="text-base text-black md:text-lg">
          No need for custom software or a large IT budget.
        </p>
      </div>

      <SectionTwo />

      <SectionSeven />
      <div className="pb-10"></div>
      <SectionEight />
      <SectionNine />
    </div>
  );
}
