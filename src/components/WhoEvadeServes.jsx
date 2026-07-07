import { useState } from 'react'
import { BsBusFront } from 'react-icons/bs'
import { MdLocalHospital } from 'react-icons/md'
import { FaShieldAlt, FaUser } from 'react-icons/fa'

const tabs = [
  {
    label: 'Fleet Operators',
    icon: <BsBusFront size={24} />,
    title: 'Fleet Operators',
    description:
      'Your drivers are protected before they can reach for their phone. Real-time fleet visibility and verified incident records reduce liability and insurance disputes.',
    
  },
  {
    label: 'Government & Emergency Services',
    icon: <MdLocalHospital size={24} />,
    title: 'Government & Emergency Services',
    description:
      'Automated incident detection and real-time data routing means emergency responders get to the scene faster with full situational awareness.',
    
  },
  {
    label: 'Insurers',
    icon: <FaShieldAlt size={24} />,
    title: 'Insurers',
    description:
      'Verified crash data, severity scores, and incident timelines eliminate fraud and disputes — giving insurers the evidence they need instantly.',
    
  },
  {
    label: 'Individual Drivers',
    icon: <FaUser size={24} />,
    title: 'Individual Drivers',
    description:
      'In the event of a crash, EVADE automatically alerts emergency services and your emergency contacts — even if you are unconscious.',
    
  },
]

const WhoEvadeServes = () => {
  const [activeTab, setActiveTab] = useState(0)

  const active = tabs[activeTab]

  return (
    <section className="w-full px-6 sm:px-10 lg:px-20 py-20">

      {/* Heading */}
      <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl text-center mb-10">
        Who EVADE Serves
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12   ">
        <div className='bg-gray-800  rounded-full '>
             {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === index
                ? 'bg-white text-black'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
        </div>
       
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 ">

        {/* Left */}
        <div className="flex-1 ">
          {/* Icon */}
          <div className="text-blue-400 mt-8 mb-4">
            {active.icon}
          </div>

          {/* Title */}
          <h3 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl mt-10 mb-4">
            {active.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed max-w-[500px] mb-12 ">
            {active.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-all">
              Watch EVADE in Action
            </button>
            <button className="bg-white/10 text-white border border-white/20 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/20 transition-all">
              Request a Live Demo
            </button>
            <button className="mt-4 bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-600 transition-all w-full sm:w-auto">
              Download the EVADE Technical Brief
            </button>
          </div>
        </div>

        {/* Right - Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src="Illustrations.png"
            className="w-full max-w-[full] h-auto object-contain"
          />
        </div>

      </div>

    </section>
  )
}

export default WhoEvadeServes