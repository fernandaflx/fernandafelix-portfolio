
import { ChevronDown } from 'lucide-react';
import HeroBadge from './HeroBadge/page';
import HeroPhoto from './HeroPhoto/page';
import HeroTitle from './HeroTitle/page';
import HeroCard from './HeroCard/page';
import HeroButtons from './HeroButtons/page';

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-4 relative pt-24 pb-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="flex flex-col gap-6 order-2 md:order-1 relative">

          <HeroBadge />
          <div className="hidden sm:block">
            <HeroTitle />
          </div>

          <HeroCard />
          <HeroButtons />
        </div>
        <HeroPhoto />
      </div>

      <div className="hidden sm:absolute sm:bottom-10 sm:left-1/2 sm:-translate-x-1/2 sm:flex sm:animate-bounce">
        <ChevronDown />
      </div>
    </section>
  )
}
