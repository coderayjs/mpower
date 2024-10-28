import React from "react";

export default function SectionThree() {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col lg:items-center lg:flex-row">
          <div className="flex items-center mb-6 lg:w-1/2 lg:mb-0">
            <div className="flex items-center justify-center w-16 h-16 mr-5 sm:w-24 sm:h-24 xl:mr-10 xl:w-28 xl:h-28">
              <img src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5f5feebed847703c038e05bc/promostandards-1604602609849.png" />
            </div>
            <h3 className="text-4xl font-extrabold sm:text-5xl xl:text-6xl">
              350,000
            </h3>
          </div>
          <div className="lg:w-1/2">
            <p className="text-gray-800">
              Through our integrations with PromoStandards instantly search,
              check inventory and sync pricing with over promotional products at
              no additional charge!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
