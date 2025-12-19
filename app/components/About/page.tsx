import AboutHeader from "./AboutHeader/page";
import AboutMainCard from "./AboutMainCard/page";
import AboutStatCard from "./AboutStatCard/page";
import SkillsMarquee from "./SkillsMarquee/page";

export default function About() {
  return (
    <section className="w-full py-16 sm:py-24 md:py-32 px-10 relative" id="about">
      <div className="max-w-7xl sm:px-0 mx-auto">
        <AboutHeader />
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
          <AboutMainCard />
          <AboutStatCard
            icon="rocket"
            value="3+"
            label="anos de experiência"
          />
          <AboutStatCard
            icon="sparkles"
            value="Do conceito"
            label="à interface"
          />
          <SkillsMarquee />
        </div>
      </div>
    </section>
  )
}
