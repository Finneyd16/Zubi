import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'

const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-[#05091a]">
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout