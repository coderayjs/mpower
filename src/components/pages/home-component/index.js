import SectionOne from "./elements/section-1";
import SectionTwo from "./elements/section-2";
import SectionThree from "./elements/section-3";
import SectionFour from "./elements/section-4";
import SectionFive from "./elements/section-5";
import SectionSix from "./elements/section-6";
import SectionSeven from "./elements/section-7";
import SectionEight from "./elements/section-8";

export default function HomeComponent() {
  return (
    <div className="flex flex-col gap-10 p-3">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />

      <SectionSeven />
      <SectionEight />
    </div>
  );
}
