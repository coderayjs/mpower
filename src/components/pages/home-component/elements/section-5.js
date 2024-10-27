import React from "react";

export default function SectionFive() {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Online Stores
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Our industry leading online store builder lets you create and manage
            online stores quickly and easily.
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <img
              className="object-cover w-full h-72 col-span-2 rounded shadow-lg my-auto border"
              src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5e4ef3017141a025da6882b3/Home_stores%20%281%29-1604963461602.png"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 font-semibold leading-5">
                Start selling promo and apparel online with your own online
                store with over 100,000 configurable items.
              </h6>
            </div>
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 font-semibold leading-5">
                Create UNLIMITED company stores that look great and are easy to
                build and maintain.
              </h6>
            </div>
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 font-semibold leading-5">
                Sell products with real-time inventory from suppliers.
              </h6>
            </div>
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 font-semibold leading-5">
                Process credit card or eCheck payments.
              </h6>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Design pages in minutes using our advanced page builder.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}