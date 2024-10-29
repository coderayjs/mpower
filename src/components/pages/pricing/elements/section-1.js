import React from "react";

export default function SectionOne() {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-black uppercase rounded-full bg-teal-accent-400">
              Subscription Plans
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-6xl md:mx-auto">
            Distributor Pricing
          </h2>
          <p className="text-base text-black md:text-lg">
            We offer simple and competitive pricing on all our solutions.
          </p>
        </div>
        <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-4 xl:max-w-screen-lg sm:mx-auto">
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
            <div className="text-center">
              <div className="text-lg font-semibold">Start</div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-5xl font-bold">Free</div>
              </div>
              <div className="mt-2 space-y-3">
                <div className="text-gray-700">Customer Management</div>
                <div className="text-gray-700">Presentations</div>
                <div className="text-gray-700">Product Search</div>
              </div>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
              >
                Start for free
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
            <div className="text-center">
              <div className="text-lg font-semibold">All in One</div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-3xl font-bold">$599/ mo</div>
              </div>
              <div className="mt-2 space-y-3">
                <div className="text-gray-700">Unlimited users</div>
                <div className="text-gray-700">Unlimited stores</div>
                <div className="text-gray-700">Process orders</div>
                <div className="text-gray-700">PresentationsNe</div>
                <div className="text-gray-700">Accounting</div>
                <div className="text-gray-700">Customer CRM</div>
                <div className="text-gray-700">Art proofing</div>
                <div className="text-gray-700">Custom Domain</div>
              </div>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
              >
                Sign Up
              </a>
            </div>
          </div>

          <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-blue-700">
            <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
              <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-blue-700">
                Most Popular
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">All in One</div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-3xl font-bold">$997 / mo</div>
              </div>
              <div className="mt-2 space-y-3">
                <div className="text-gray-700">Unlimited custom domains</div>
                <div className="text-gray-700">Custom email domains</div>
                <div className="text-gray-700">Email marketing</div>
                <div className="text-gray-700">Priority support</div>
                <div className="text-gray-700">Acquire customers</div>
                <div className="text-gray-700">AI Art Vectorization</div>
              </div>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
              >
                Sign Up
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
            <div className="text-center">
              <div className="text-lg font-semibold">Enterprise</div>

              <div className="mt-2 space-y-3">
                <div className="text-gray-700">Superior Data Compliance</div>
                <div className="text-gray-700">
                  Dedicated Phone and Email Support
                </div>
                <div className="text-gray-700">Admin Management Account</div>
                <div className="text-gray-700">
                  Unique Sales Person Landing Pages
                </div>
              </div>
            </div>
            <div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
