import React from "react";

export default function SectionTwo() {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
          <p className="mb-1 text-4xl font-bold tracking-wide uppercase md:mb-2">
            How it Works
          </p>
          <p className="text-base text-black md:text-lg">
            We make it easy to set up your own branded swag box builder.
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
          <div>
            <img
              className="w-full mb-6 rounded "
              src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/64e63d6dee1c2e55265c0655/Swag-Boxing---Configure-Store-1697514692783.png"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Configure Box Builder
            </h5>
            <p className="text-gray-700">
              Select products for your box builder
            </p>
          </div>
          <div>
            <img
              className="w-full mb-6 rounded "
              src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/64e63d6dee1c2e55265c0655/Swag-Boxing---Orders-1697514276550.png"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Receive Box Orders
            </h5>
            <p className="text-gray-700">
              Customers will create boxes and submit orders.
            </p>
          </div>
          <div>
            <img
              className="w-full mb-6 rounded "
              src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/64e63d6dee1c2e55265c0655/Swag-Boxing---Produce-Boxes-1697515984264.png"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Produce Boxes
            </h5>
            <p className="text-gray-700">
              Use existing supplier kitting and fulfillment options or use ours.
            </p>
          </div>
        </div>

        <a
          href="/contact"
          className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700  focus:shadow-outline focus:outline-none"
        >
          Get Started
        </a>
      </div>
    </>
  );
}
