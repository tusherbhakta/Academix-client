import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'

export const Main = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='min-h-screen max-w-7xl mx-auto px-4'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
