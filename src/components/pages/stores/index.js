"use client";
import SectionSeven from "../home/elements/section-7";
import SectionEight from "../home/elements/section-8";
import SectionNine from "../home/elements/section-9";
import SectionOne from "./elements/section-1";
import SectionTwo from "./elements/section-2";
import SectionThree from "./elements/section-3";
import SectionFour from "./elements/section-4";
import SectionFive from "./elements/section-5";
import SectionSix from "./elements/section-6";

export default function StoresComponent() {
  return (
    <div>
      <div className="bg-white">
        <SectionOne />
        <SectionTwo />
      </div>
      <SectionThree />
      <div className="bg-[#00b8cc]">
        <SectionFour />
      </div>
      <SectionFive />

      <div className="bg-white">
        <SectionSix />
      </div>

      <div className="my-10">
        <SectionSeven />
      </div>

      <SectionEight />
      <SectionNine />
    </div>
  );
}
