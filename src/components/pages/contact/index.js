"use client";
import SectionEight from "../home/elements/section-8";
import SectionNine from "../home/elements/section-9";
import ContactSectionOne from "./elements/contact-section-1";

export default function ContactComponent() {
  return (
    <div>
      <div className="bg-white mb-10">
        <ContactSectionOne />
      </div>

      <SectionEight />

      <SectionNine />
    </div>
  );
}
