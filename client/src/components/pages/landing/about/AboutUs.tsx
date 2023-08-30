import { SectionAbout1 } from "./shared/SectionAbout1";
import { SectionAbout2 } from "./shared/SectionAbout2";
import { SectionAbout3 } from "./shared/SectionAbout3";
import { SectionAbout4 } from "./shared/SectionAbout4";
import { SectionAbout5 } from "./shared/SectionAbout5";

export const AboutUs = () => {
  return (
    <div className="h-full mt-16 xl:mt-0">
      <section className="pt-4 2xl:pt-16 2xl:px-36">
        <SectionAbout1 />
      </section>
      <section>
        <SectionAbout2 />
      </section>
      <section className="py-4 px-36">
        <SectionAbout3 />
      </section>
      <section className="p-4 pt-24 pb-5 2xl:px-36">
        <SectionAbout4 />
      </section>
      <section className="py-4 px-36">
        <SectionAbout5 />
      </section>
    </div>
  );
};
