import React from "react";

export default function SectionOne() {
  return (
    <>
      <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl py-10">
        <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-blue-700 sm:text-6xl sm:leading-none">
              Acquire Customers
            </h2>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-black sm:text-6xl sm:leading-none">
              with Google Ads
            </h2>
          </div>
        </div>
        <div>
          <img
            src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/64b04ff969a7d7668527e682/ShoppingIMG-1689969094274.png"
            className="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
