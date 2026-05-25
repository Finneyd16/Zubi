import { Link } from 'react-router-dom'
import { APP_NAME } from '@/constants'

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-6 py-4">
      <Link to="/" className="text-xl font-bold">
        {APP_NAME}
      </Link>
    </nav>
  )
}

export default Navbar