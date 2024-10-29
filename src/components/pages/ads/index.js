"use client";

import SectionOne from "./elements/section-1";
import SectionTwo from "./elements/section-2";
import SectionThree from "./elements/section-3";

import SectionSeven from "../home/elements/section-7";
import SectionEight from "../home/elements/section-8";
import SectionNine from "../home/elements/section-9";

export default function AdsComponent() {
  return (
    <div className="bg-white">
      <div className="bg-white">
        <SectionOne />
      </div>

      <div className="bg-blue-700 py-10">
        <div className="max-w-4xl md:mx-auto sm:text-center lg:max-w-4xl">
          <h2 className="max-w-4xl font-sans text-xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            We make it easy for potential customers to find your business with
            Google Ads.
          </h2>
          <br />
          <div className="flex flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-blue-700 transition duration-200 rounded shadow-md bg-white border border-blue-700 focus:shadow-outline focus:outline-none gap-1"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl md:mx-auto sm:text-center lg:max-w-4xl py-10">
        <h2 className="max-w-4xl font-sans text-xl font-bold leading-none tracking-tight text-black sm:text-5xl md:mx-auto">
          How it works
        </h2>
      </div>

      <SectionTwo />

      <div className="max-w-4xl md:mx-auto sm:text-center lg:max-w-4xl py-10">
        <h2 className="max-w-4xl font-sans text-xl font-bold leading-none tracking-tight text-black sm:text-5xl md:mx-auto">
          Google Ads gives you many ways to be seen
        </h2>
      </div>

      <SectionThree />

      <SectionEight />
      <SectionNine />
    </div>
  );
}
