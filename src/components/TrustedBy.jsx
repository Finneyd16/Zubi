import { 
  SiNotion, 
  SiDropbox, 
  SiEvernote, 
  SiSlack, 
  SiFramer, 
  SiSpotify 
} from 'react-icons/si'
import { FaMicrosoft } from 'react-icons/fa'

const TrustedBy = () => {
  const logos = [
    { name: 'Notion', icon: <SiNotion size={18} /> },
    { name: 'Dropbox', icon: <SiDropbox size={18} /> },
    { name: 'Microsoft', icon: <FaMicrosoft size={18} /> },
    { name: 'Evernote', icon: <SiEvernote size={18} /> },
    { name: 'Slack', icon: <SiSlack size={18} /> },
    { name: 'Framer', icon: <SiFramer size={18} /> },
    { name: 'Spotify', icon: <SiSpotify size={18} /> },
  ]

  return (
    <div className="relative z-10 w-full border-t border-blue-900/40 py-8 px-6 sm:px-10">
      <p className="text-gray-400 text-xs mb-6 text-left ">
        Trusted by 500+ of Businesses <br /> Worldwide
      </p>

      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-18 pl-0 sm:pl-20">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors cursor-default w-full sm:w-auto py-2 rounded-lg px-4 "
          >
            <span className="text-lg">{logo.icon}</span>
            <span className="text-sm font-medium">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustedBy