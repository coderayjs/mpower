import React from "react";

export default function SectionThree() {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
              1
            </div>
            <h6 className="mb-2 font-semibold leading-5">Create a store.</h6>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
              2
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              Add and configure products.
            </h6>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
              3
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              Process orders with suppliers using PromoStandards.
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
