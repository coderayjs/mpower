import React from "react";

export default function SectionFour() {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white rounded lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5e4ef3017141a025da6882b3/Home%20Integrations-1610401165897.png"
              alt=""
              className="object-cover"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                INTEGRATIONS
              </p>
            </div>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              Connect tools and automate workflows
            </h5>
            <ul className="mb-5 text-black">
              <li>
                Easily connect to popular software and reduce data entry and
                increase transparency.
              </li>
              <li>
                Streamline sales through automation and communication with
                customers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
