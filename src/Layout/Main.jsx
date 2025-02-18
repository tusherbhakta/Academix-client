import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'

export const Main = () => {
  return (
    <div className=''>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
