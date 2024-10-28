"use client";
import SectionSeven from "../home/elements/section-7";
import SectionEight from "../home/elements/section-8";
import SectionNine from "../home/elements/section-9";
import SectionOne from "./elements/section-1";
import SectionTwo from "./elements/section-2";
import SectionThree from "./elements/section-3";

export default function IntegrationsComponent() {
  return (
    <div>
      <div className="bg-white">
        <SectionOne />
      </div>

      <div className="max-w-3xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12 py-10">
        <h2 className="max-w-3xl mb-2 text-4xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
          Shipping
        </h2>
        <p className="text-base text-black md:text-lg">
          Connect with all major shipping carriers using your own shipping
          account or ours. Quickly get shipping rates and transit times.
        </p>
      </div>

      <div className="max-w-3xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12 py-5">
        <h2 className="max-w-3xl mb-2 text-4xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
          Suppliers
        </h2>
        <p className="text-base text-black md:text-lg">
          We were built from the ground up to integrate with suppliers for
          seamless communication reducing errors and saving time.
        </p>
      </div>

      <div className="max-w-4xl md:mx-auto flex flex-col md:flex-row gap-10 mb-10">
        <div className="flex-1 bg-white p-10 border">
          <img
            src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5fa383a0103fc87e0819c2b1/promostandards-1604612182561.png"
            className="w-24 mx-auto"
          />

          <p>
            Our integration with Promo Standards allows you to sell over 65,000
            products, submit orders directly to supplier ordering systems and
            check inventory, order and shipment status.
          </p>
        </div>
        <div className="flex-1 bg-white p-10 border">
          <img
            src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5fa383a0103fc87e0819c2b1/1016ASI-ESP-logo-1604612524230.png"
            className="w-24 mx-auto"
          />
          <p>
            Our integration with ASI's ESP database allows you to search over
            900,000 products and over 2500 suppliers all from one application. ​
          </p>
        </div>
      </div>

      <div className="max-w-3xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12 py-10">
        <h2 className="max-w-3xl mb-2 text-4xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
          Finance
        </h2>
        <p className="text-base text-black md:text-lg">
          Optimize the accounting process and eliminate redundant data entry,
          reconcile faster, calculate tax on the fly and auto file sales tax in
          all 50 states.
        </p>
      </div>

      <SectionTwo />

      <div className="max-w-3xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12 py-10">
        <h2 className="max-w-3xl mb-2 text-4xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
          Payments
        </h2>
        <p className="text-base text-black md:text-lg">
          Get paid faster and easier with our payment gateway integrations.
          Setup takes minuets and can be linked to your existing bank accounts.
        </p>
      </div>

      <div className="max-w-2xl md:mx-auto flex flex-col md:flex-row gap-10 mb-10">
        <div className="flex-1 ">
          <img
            src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5fa383a0103fc87e0819c2b1/Stripe_Logo_revised_2016-1604697587424.png"
            className="w-[80%] mx-auto"
          />
        </div>
        <div className="flex-1 ">
          <img
            src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5fa383a0103fc87e0819c2b1/Intuit-merchant-services-quickbooks-payments-logo-300x96-1604697459244.png"
            className="w-[80%] mx-auto"
          />
        </div>
      </div>

      <div className="py-10"></div>

      <div className="max-w-3xl mt-10 mb-5 md:mx-auto sm:text-center lg:max-w-3xl">
        <h2 className="max-w-3xl mb-2 text-4xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
          Communication
        </h2>
        <p className="text-base text-black md:text-lg">
          We help simplify communication between your team and customers.
          <br />
          Respond to customers faster and with greater confidence.
        </p>
      </div>

      <SectionThree />

      <SectionSeven />
      <div className="mt-10"></div>

      <SectionEight />
      <SectionNine />
    </div>
  );
}
