import React from "react";

export default function SectionOne() {
  return (
    <>
      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-black sm:text-6xl sm:leading-none">
                Close More Deals Faster With Interactive Presentations
              </h2>
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <img
              className=" w-full "
              src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/656659331fdb707e6f604976/TransparentPresentations-1702924348337.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
