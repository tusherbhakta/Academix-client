import { Outlet } from 'react-router-dom'
import Sidebar from '../components/dashboard/Sidebar'
import { Helmet } from 'react-helmet'

const Dashboard = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
        <Helmet>
            <title>Academix | Dashboard</title>
        </Helmet>
        <div className="">
            <Sidebar/>
        </div>
        <div className="w-full ">
            <Outlet/>
        </div>
      
    </div>
  )
}

export default Dashboard
