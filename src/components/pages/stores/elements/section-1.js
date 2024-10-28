import React from "react";

export default function SectionOne() {
  return (
    <>
      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-black uppercase rounded-full ">
                  MPOWER STORES
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Unlimited Possibilities
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Change the way you sell promo with our industry leading company
                store and e-commerce website builder.
                <br />
                Custom add products or sell over 60,000 items from top
                promotional product suppliers.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700  focus:shadow-outline focus:outline-none"
              >
                Request Demo
              </a>
              <a
                href="/templates"
                className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-blue-700 transition duration-200 rounded shadow-md bg-white border border-blue-700 focus:shadow-outline focus:outline-none gap-1"
              >
                View Examples
              </a>
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <img
              className=" w-full "
              src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5e4ef3017141a025da6882b3/Home_stores%20%281%29-1604963461602.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
