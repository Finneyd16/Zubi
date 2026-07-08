import { MdOutlineDevices } from 'react-icons/md'
import { FiCloud, FiClock } from 'react-icons/fi'
import { TbChartInfographic } from 'react-icons/tb'

const services = [
  {
    icon: <MdOutlineDevices size={22} />,
    title: 'IoT & Embedded Systems',
    description:
      'We transform physical environments into connected, intelligent ecosystems. From custom IoT device prototyping and PCB design to sensor integration (LoRaWAN, MQTT) and edge computing — we handle the full hardware-to-cloud pipeline.',
  },
  {
    icon: <FiCloud size={22} />,
    title: 'Software & Cloud Architecture',
    description:
      'We build secure, high-availability software hosted on AWS or Azure. Enterprise web applications, mobile apps (iOS & Android), SaaS platforms, and API architectures — designed to handle real-world data loads and scale under pressure.',
  },
  {
    icon: <TbChartInfographic size={22} />,
    title: 'Data, AI & Predictive Analytics',
    description:
      'We turn raw operational data into foresight. Our team builds and integrates machine learning models that identify patterns, power business intelligence dashboards, and predict failures before they happen.',
  },
  {
    icon: <FiClock size={22} />,
    title: 'System Integration & Automation',
    description:
      'We engineer intelligent connectivity for complex operations: industrial automation, smart fleet management, smart city infrastructure, and process optimisation.',
  },
]

const ServicesSection = () => {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-20 py-20">

      {/* Top row */}
      <div className="  p-8 sm:p-12 flex flex-col lg:flex-row items-start justify-between gap-10 mb-10">

        {/* Left */}
        <div className="flex-1">
          <p className="text-blue-400 text-sm font-medium mb-4">
            Custom Engineering Services
          </p>
          <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-md">
            We Built EVADE. Now Imagine What We Can Build for You.
          </h2>
        </div>

        {/* Right */}
        <div className="flex-1">
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            The engineering behind EVADE — the same hardware expertise, cloud
            architecture, and real-world resilience — is available to enterprises and
            governments with complex technical challenges. We don't just consult. We
            design, build, and deploy.
          </p>
        </div>

      </div>

      {/* Bottom row */}
      <div className="  sm:p-12 flex flex-col lg:flex-row items-start gap-10">

        {/* Left - Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="Images.png"
            alt="Services Illustration"
            className="w-full max-w-[400px] h-auto object-contain mt-25"
          />
        </div>

        {/* Right - Service items */}
        <div className="flex-1 flex flex-col gap-8">
          {services.map((service) => (
            <div key={service.title} className="flex items-start gap-4">
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 flex-shrink-0 mt-1">
                {service.icon}
              </div>

              {/* Text */}
              <div>
                <h4 className="text-white font-semibold text-base mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

          {/* CTA Button */}
          <div className="mt-4">
            <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 hover:translate-y-[1px] transition-all">
              Tell Us About Your Project
            </button>
          </div>

        </div>

      </div>

    </section>
  )
}

export default ServicesSection