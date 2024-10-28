import React from "react";

export default function SectionFour() {
  return (
    <div className="px-4 py-8 mx-auto max-w-6xl md:px-24 lg:px-8 lg:py-8">
      <div className="max-w-xl mb-8 md:mx-auto sm:text-center lg:max-w-2xl md:mb-8">
        <h2 className="max-w-lg mb-4 font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
          Distributor Stores
        </h2>
        <p className="text-base text-black md:text-lg">
          Let your customers find and buy custom promotional products through
          your distributor store.
        </p>
      </div>

      <img src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/649dcb902e4c3b0e56729cd0/PromoWayScreenshotFinal-1688078093131.png" />

      <br />
      <a
        href="/contact"
        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#172b4d]  focus:shadow-outline focus:outline-none"
      >
        View Store
      </a>
    </div>
  );
}
