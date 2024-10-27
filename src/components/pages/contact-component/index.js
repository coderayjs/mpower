"use client";
import SectionEight from "../home-component/elements/section-8";
import SectionNine from "../home-component/elements/section-9";
import SectionOne from "./elements/section-1";

export default function ContactComponent() {
  return (
    <div>
      <div className="bg-white mb-10">
        <SectionOne />
      </div>

      <SectionEight />

      <SectionNine />
    </div>
  );
}
