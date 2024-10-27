import React from "react";
import SectionOne from "./elements/section-1";
import SectionTwo from "./elements/section-2";
import SectionThree from "./elements/section-3";
import SectionFour from "./elements/section-4";
import SectionFive from "./elements/section-5";
import SectionSeven from "../home-component/elements/section-7";
import SectionEight from "../home-component/elements/section-8";
import SectionNine from "../home-component/elements/section-9";

export default function PlatformComponent() {
  return (
    <>
      <div className="bg-white">
        <SectionOne />
      </div>

      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
    </>
  );
}
