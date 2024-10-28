"use client";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export default function SectionOne() {
  return (
    <>
      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-6xl md:px-24 lg:px-8 lg:py-10">
        <div className="max-w-6xl sm:mx-auto lg:max-w-6xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-4xl mb-10 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12">
              <h2 className="max-w-4xl mb-6 font-sans text-5xl font-bold leading-none tracking-tight text-black sm:text-5xl md:mx-auto">
                A better way to work
              </h2>
              <p className="text-base text-black md:text-lg">
                MPower transforms the way you work alongside your partners,
                vendors or customers reducing friction and eliminating mistakes.
              </p>
            </div>
            <div className="flex flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-blue-700 transition duration-200 rounded shadow-md bg-white border border-blue-700 focus:shadow-outline focus:outline-none gap-1"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5f5feebed847703c038e05bc/Features_main-1606262162133.png"
        className="mx-auto"
      />
    </>
  );
}
