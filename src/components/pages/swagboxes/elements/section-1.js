import React from "react";

export default function SectionOne() {
  return (
    <>
      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none">
                Swag Boxing Simplified
              </h2>
              <p className="text-base text-white md:text-lg">
                Easily let customers create custom swag boxes, packs and kits.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700  focus:shadow-outline focus:outline-none"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <img
              className=" w-full "
              src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/64e63d6dee1c2e55265c0655/SwagBox---Main-1694032084615.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
