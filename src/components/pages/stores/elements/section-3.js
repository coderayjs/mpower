"use client";
import { ArrowRightAltSharp } from "@mui/icons-material";

export default function SectionThree() {
  return (
    <>
      <div className="px-4 py-8 mx-auto max-w-6xl md:px-24 lg:px-8 lg:py-8">
        <div className="max-w-xl mb-8 md:mx-auto sm:text-center lg:max-w-2xl md:mb-8">
          <h2 className="max-w-lg mb-4 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Store Types
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Big or small we handle it all.
          </p>
        </div>

        
        <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
          <a
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <img
                src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5fa38474103fc87e0819c3cd/distributor-store-1642711545807.jpg"
                className="object-cover w-full h-60 bg-[#36b37e]"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-5 font-semibold leading-5 text-bold text-3xl">
                    Distributor
                  </h6>
                  <p className="text-md leading-6 text-gray-900">
                    Start selling promotional products online. Advertise on
                    Google, generate leads and build your online business.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <img
                src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5fa38474103fc87e0819c3cd/Non-Revenue-Stors-1642710779833.jpg"
                className="object-cover w-full h-60 bg-[#ffab00]"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-5 font-semibold leading-5 text-bold text-3xl">
                    Pop-up and Retail
                  </h6>
                  <p className="text-md leading-6 text-gray-900">
                    Sell direct or build a store for clubs, groups,
                    organizations, schools, teams and more.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full ">
              <img
                src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5fa38474103fc87e0819c3cd/corporate-store-1642711552594.jpg"
                className="object-cover w-full h-60 bg-[#172b4d] "
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-5 font-semibold leading-5 text-bold text-3xl">
                    Corporate
                  </h6>
                  <p className="text-md leading-6 text-gray-900">
                    Create robust corporate merchandise stores for employees,
                    marketing and branding. Advanced reporting, customer
                    management, fulfillment, allowances and so much more.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
