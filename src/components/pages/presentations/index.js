import SectionSeven from "../home/elements/section-7";
import SectionEight from "../home/elements/section-8";
import SectionNine from "../home/elements/section-9";
import SectionOne from "./elements/section-1";
import SectionTwo from "./elements/section-2";

export default function PresentationsComponent() {
  return (
    <div>
      <SectionOne />
      <div className="bg-white">
        <SectionTwo />
      </div>

      <SectionSeven />
      <div className="py-5" />
      <SectionEight />
      <SectionNine />
    </div>
  );
}
