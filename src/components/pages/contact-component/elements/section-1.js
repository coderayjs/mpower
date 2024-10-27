import React from "react";

export default function SectionOne() {
  return (
    <div className="mx-auto text-center max-w-4xl py-20 space-y-5">
      <h1 className="text-4xl font-bold text-black">Contact Us</h1>

      <div className="flex flex-col md:flex-row gap-5 ">
        <span className="flex-1 text-left">
          <p>First Name</p>
          <input
            type="text"
            className="w-full border border-grey-300 p-2 rounded-lg"
            placeholder="First Name"
          />
        </span>
        <span className="flex-1 text-left">
          <p>Last Name</p>
          <input
            type="text"
            className="w-full border border-grey-200 p-2 rounded-lg"
            placeholder="Last Name"
          />
        </span>
      </div>

      <div className="text-left">
        <div>Email</div>
        <input
          type="text"
          className="w-full border border-grey-200 p-2 rounded-lg"
          placeholder="Email"
        />
      </div>

      <div className="text-left">
        <div>Company</div>
        <input
          type="text"
          className="w-full border border-grey-200 p-2 rounded-lg"
          placeholder="Company"
        />
      </div>

      <div className="text-left">
        <div>Message</div>
        <textarea
          type="text"
          className="w-full border border-grey-200 p-2 rounded-lg h-24"
        />
      </div>

      <button className="inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 focus:shadow-outline focus:outline-none">
        Submit
      </button>
    </div>
  );
}
