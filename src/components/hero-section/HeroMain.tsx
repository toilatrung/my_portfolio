import HeroPic from './HeroPic';
import HeroText from './HeroText';

const HeroMain = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <img
        src="/images/pixel_bg.png"
        alt="Background"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="pt-24 pb-16">
        <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
          <HeroText />
          <HeroPic />
        </div>
      </div>
    </section>
  )
}

export default HeroMain