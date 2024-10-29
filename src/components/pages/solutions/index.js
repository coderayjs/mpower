"use client";
import SectionSeven from "../home/elements/section-7";
import SectionEight from "../home/elements/section-8";
import SectionNine from "../home/elements/section-9";
import SectionFour from "../platform/elements/section-4";
import SectionOne from "./elements/section-1";

export default function SolutionsComponent() {
  return (
    <div>
      <SectionOne />
      <SectionFour />
      <SectionSeven />
      <div className="pb-10"></div>
      <SectionEight />
      <SectionNine />
    </div>
  );
}
