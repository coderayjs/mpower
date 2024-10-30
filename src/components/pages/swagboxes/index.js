import SectionSeven from "../home/elements/section-7";
import SectionEight from "../home/elements/section-8";
import SectionNine from "../home/elements/section-9";
import SectionOne from "./elements/section-1";
import SectionTwo from "./elements/section-2";
import SectionThree from "./elements/section-3";

export default function SwagboxesComponent() {
  return (
    <div>
      <div className="bg-[#172b4d]">
        <SectionOne />
      </div>

      <SectionTwo />

      <div className="bg-white">
        <SectionThree />
      </div>

      <SectionSeven />
      <div className="my-5"></div>
      <SectionEight />
      <SectionNine />
    </div>
  );
}
