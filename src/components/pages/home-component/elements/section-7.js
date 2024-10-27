import React from "react";

export default function SectionSeven() {
  return (
    <>
      <div className="bg-[#172b4d]">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                  Request a Demo
                </h2>
                <p className="text-base text-indigo-100 md:text-lg">
                  Learn more about how our platform can help save you time and
                  empower your print or promotional product business.
                </p>
              </div>
              <div>
                <a
                  href="/"
                  className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-green-600 focus:shadow-outline focus:outline-none"
                >
                  Request Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
