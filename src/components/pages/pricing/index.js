"use client";
import SectionSeven from "../home/elements/section-7";
import SectionEight from "../home/elements/section-8";
import SectionNine from "../home/elements/section-9";
import SectionOne from "./elements/section-1";
import SectionTwo from "./elements/section-2";

export default function PricingComponent() {
  return (
    <div>
      <SectionOne />

      <div className="max-w-4xl mb-10 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12 pt-10">
        <h2 className="max-w-4xl mb-2 font-sans text-4xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
          MPower Fees
        </h2>
        <h2 className="max-w-4xl mb-2 font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-3xl md:mx-auto">
          0% Fee on Non-Web Orders
        </h2>
        <p className="text-base text-black md:text-lg">
          No fee for non-web orders created by users in application.
        </p>
        <br />
        <h2 className="max-w-4xl mb-2 font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-3xl md:mx-auto">
          1.5% Store Processing Fee
        </h2>
        <p className="text-base text-black md:text-lg">
          Applies only to web orders created by customers from stores. Excludes
          tax and shipping. Minimum $1 fee per order.
        </p>
        <div className="flex flex-row gap-3 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-blue-700 transition duration-200 rounded shadow-md bg-white border border-blue-700 focus:shadow-outline focus:outline-none gap-1"
          >
            Request Demo
          </a>
        </div>
      </div>

      <SectionTwo />

      <SectionSeven />
      <div className="py-5" />

      <SectionEight />
      <SectionNine />
    </div>
  );
}
