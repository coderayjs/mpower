"use client";
import { Computer, ShoppingCart, Warehouse } from "@mui/icons-material";

export default function SectionOne() {
  return (
    <>
      <div className="mb-16">
        <div className="bg-white">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl md:mb-5">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-md font-bold tracking-wider text-black uppercase rounded-full bg-teal-accent-400">
                  MPOWER SOLUTIONS
                </p>
              </div>
              <h2 className="max-w-3xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-5xl md:mx-auto">
                For decorators, distributors and suppliers of all sizes
              </h2>
              <p className="text-base text-black md:text-lg">
                Big or small MPower can help close more deals faster and make
                you more profitable.
              </p>
            </div>

            <div className="flex items-center sm:justify-center">
              <a
                href="/contact"
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Request a demo
              </a>
            </div>
          </div>
        </div>
        <div className="relative px-4 sm:px-0">
          <div className="absolute inset-0 bg-white h-1/2" />
          <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto">
                <Computer className="text-2xl" />
              </div>
              <p className="font-bold tracking-wide text-black text-lg">
                Application
              </p>
              <p className="text-xs">
                Built from the ground up for distributors. Manage customers,
                orders and suppliers.
              </p>
              <div className="mt-5"></div>
              <a
                href="/platform"
                className="text-blue-800 pt-3 text-sm font-bold hover:cursor-pointer"
              >
                Learn more
              </a>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto">
                <ShoppingCart className="text-2xl" />
              </div>
              <p className="font-bold tracking-wide text-black text-lg">
                Stores
              </p>
              <p className="text-xs">
                Sell over 100,000 configurable products or create unlimited
                company stores.
              </p>
              <div className="mt-5"></div>
              <a
                href="/stores"
                className="text-blue-800 pt-3 text-sm font-bold hover:cursor-pointer"
              >
                Learn more
              </a>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto">
                <Warehouse className="text-2xl" />
              </div>
              <p className="font-bold tracking-wide text-black text-lg">
                Suppliers
              </p>
              <p className="text-xs">
                Manage and distribute your product data via PromoStandards.
              </p>
              <div className="mt-5"></div>
              <a
                href="/suppliers"
                className="text-blue-800 pt-3 text-sm font-bold hover:cursor-pointer"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
