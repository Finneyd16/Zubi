import HeroBg3D from '@/components/HeroBg3D'
import Particles from '@/components/Particles'
import TrustedBy from '@/components/TrustedBy'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-24 overflow-hidden">

      {/* 3D Background */}
      <HeroBg3D />

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 z-[1] bg-[#070d1f]/55" />

      {/* Glitter particles */}
      <Particles />

      {/* Badge */}
      <div className="relative z-10 bg-white hover:bg-gray-200 text-gray-600/80 text-xs sm:text-sm px-2 sm:px-4 py-5 sm:py-1 rounded-full border-4 shadow-[0_6px_12px_rgba(0,0,0,0.15)] hover:translate-y-[1px] transition-all mb-8 sm:mb-10">
        Purpose-Built in Lagos. Engineered for The Real World.
      </div>

      {/* Headline */}
      <h1 className="relative z-10 text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-[1000px] mb-4 sm:mb-6">
        When Seconds Decide Everything, the System Shouldn't Rely on a Phone Call
      </h1>

      {/* Subtext */}
      <p className="relative z-10 text-gray-400 text-sm sm:text-base max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-[860px] leading-relaxed mb-8 sm:mb-10">
        Zubi Technologies engineers intelligent IoT systems and software that protect lives
        on the road and give enterprises the infrastructure to operate smarter. Our flagship
        product, EVADE, is redefining emergency response — and it's just the beginning.
      </p>

      {/* Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
        <button className="w-full sm:w-auto bg-white border-4 border-[#d9d9d9] text-black px-6 py-3 rounded-full text-sm shadow-[0_6px_12px_rgba(0,0,0,0.15)] hover:bg-gray-200 hover:translate-y-[1px] transition-all">
          Watch How EVADE Works
        </button>
        <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-b from-[#b6c1d8]/70 via-[#8f96b4]/70 to-[#6b6f8d]/70 text-white text-sm font-medium border border-white/30 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.35),0_4px_12px_rgba(0,0,0,0.25)] hover:translate-y-[1px] transition-all">
          Request a Custom Solution
        </button>
      </div>

      {/* Illustration - full width */}
      <div className="relative z-10 w-full mt-8 sm:mt-16" style={{ width: '110%', }}>
  <img
    src="Illustration.png"
    alt=""
    className="w-full h-auto object-contain"
  />
</div>

      <TrustedBy />

    </section>
  )
}

export default HeroSection