const EvadeSection = () => {
  return (
    <section className=" w-full px-6 sm:px-10 lg:px-20 py-20">
      {/* Top row - logo + card */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-16 ">
        {/* Left - logo + headline */}
        <div className="flex-1 ">
          <img
            src="Light Effect.png"
            className="hidden lg:block absolute top-365 left-95 pointer-events-none z-0"
          />
          {/* EVADE Logo */}
          <div className="flex items-center gap-3 mb-4">
            <img src="Evade white 1.png" alt="EVADE Logo" />
          </div>

          {/* Introducing label */}
          <p className="text-blue-400 text-sm font-medium mb-6 pt-2">
            Introducing EVADE
          </p>

          {/* Headline */}
          <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-4xl leading-tight  pt-2 max-w-[600px]">
            Intelligent Emergency Coordination. Automatic. Verified. Instant.
          </h2>
        </div>

        {/* Right - Emergency card */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img src="Image.png" style={{ width: "85%" }} alt="" />
        </div>
      </div>

      {/* Bottom row - two cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* The Problem */}
        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-shadow">
          <h3 className="text-white font-bold text-2xl lg:text-4xl mb-4">
            The Problem
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-[470px]">
            Across Africa, a road accident triggers a chain of phone calls,
            confusion, and delays. Ambulances arrive late — or not at all. Crash
            data is lost or disputed. Insurers battle over claims. Families wait
            in the dark.
          </p>
          {/* Watermark */}
          <span
            className="absolute -bottom-2 -right-0  text-4xl sm:text-5xl select-none tracking-tighter"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(59,130,246,0.4)",
            }}
          >
            The Problem
          </span>
        </div>

        {/* Our Mission */}
        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-shadow">
          <h3 className="text-white font-bold text-2xl lg:text-4xl mb-4">
            Our Mission
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-[480px]">
            EVADE replaces that broken chain with an automated, sensor-verified,
            real-time system. The moment a crash happens, EVADE detects it,
            transmits the data, and routes emergency responders — before anyone
            picks up a phone.
          </p>
          {/* Watermark */}
          <span
            className="absolute -bottom-2 -right-0  text-4xl sm:text-5xl select-none tracking-tighter"
            style={{
              color: "transparent",

              WebkitTextStroke: "1px rgba(59,130,246,0.4)",
            }}
          >
            The Evade Answer
          </span>
        </div>
      </div>
     <div className=" flex flex-col lg:flex-column text-center w-full px-4 mt-20 sm:px-6 lg:px-8 ">
  <h3 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl mb-6">
    How It Works
  </h3>
  <img 
    src="Content.png" 
    alt="" 
    className="w-full h-auto object-contain mt-5"
  />
</div>
    </section>
  );
};

export default EvadeSection;
