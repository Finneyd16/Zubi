import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Home', path: '/' },
    { label: 'EVADE', path: '/evade' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 lg:px-10 py-4 sm:py-5 bg-transparent">

     {/* Logo */}
<div className="flex items-center gap-2">
  <img 
    src={pathname === '/' ? 'Zubi Technologies  White.png' : 'Zubi Technologies colour.png'} 
    alt="Zubi Logo" 
    className="h-8" 
  />
</div>

      {/* Desktop Nav Links */}
      <ul className="hidden lg:flex items-center gap-10 list-none">
        {links.map(link => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`text-sm transition-colors ${
                pathname === link.path ||
                (link.path !== '/' && pathname.startsWith(link.path))
                  ? 'text-white font-medium'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <button className="hidden lg:block bg-white hover:bg-gray-200 text-black text-sm px-5 py-2.5 rounded-full border-4 border-[#d9d9d9] shadow-[0_6px_12px_rgba(0,0,0,0.15)] hover:translate-y-[1px] transition-all">
        Get a Free Consultation
      </button>

      {/* Mobile Hamburger */}
      <button
        className="lg:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0e1a]/95 backdrop-blur-md border-t border-gray-800 px-5 py-6 flex flex-col gap-5">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-sm transition-colors ${
                pathname === link.path ||
                (link.path !== '/' && pathname.startsWith(link.path))
                  ? 'text-white font-medium'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button className="bg-white text-black text-sm px-5 py-2.5 rounded-full border-4 border-[#d9d9d9] shadow-[0_6px_12px_rgba(0,0,0,0.15)] w-full mt-2">
            Get a Free Consultation
          </button>
        </div>
      )}

    </nav>
  )
}

export default Navbar