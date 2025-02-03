import { NavLink } from "react-router-dom"
import { FaListCheck, FaCartShopping, } from "react-icons/fa6"
import { FaCalendarCheck, FaCalendarDay, FaBook, FaUsers, FaShoppingBag } from "react-icons/fa";
import { HiHome } from "react-icons/hi2";
import { MdPayments, MdReviews } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
// import logo from '../../assets/logo.png'
import useAdmin from "../../hooks/useAdmin";
import Loader from "../shared/Loader"
import useTeacher from "../../hooks/useTeacher";

const Sidebar = () => {


    const [isAdmin, isAdminLoading] = useAdmin();
    const [isTeacher, isTeacherLoading] = useTeacher();
    console.log("Teacher", isTeacher)
    if (isAdminLoading) {
        return <Loader />
    }
    console.log("Admin", isAdmin);
    // const isAdmin = true;

    const sidebarItems =
        isAdmin ? 
        <>


            <li>
                <NavLink
                    to="/dashboard/admin-profile"
                    className={({ isActive }) =>
                        isActive
                            ? "font-bold !text-white bg-yellow-800"
                            : "text-black hover:!text-yellow-400 font-medium"
                    }
                >
                    <div className="flex gap-4 items-center">
                        <HiHome className="inline-block" size={16} />
                        <p className="">Admin Profile</p>
                    </div>

                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/users"
                    className={({ isActive }) =>
                        isActive
                            ? "font-bold !text-white bg-yellow-800"
                            : "text-black hover:!text-yellow-400 font-medium"
                    }
                >
                    <div className="flex gap-4 items-center">
                        <HiHome className="inline-block" size={16} />
                        <p className="">Users</p>
                    </div>

                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/all-classes"
                    className={({ isActive }) =>
                        isActive
                            ? "font-bold !text-white bg-yellow-800"
                            : "text-black hover:!text-yellow-400 font-medium"
                    }
                >
                    <div className="flex gap-4 items-center">
                        <HiHome className="inline-block" size={16} />
                        <p className="">All Classes</p>
                    </div>

                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/teacher-requests"
                    className={({ isActive }) =>
                        isActive
                            ? "font-bold !text-white bg-yellow-800"
                            : "text-black hover:!text-yellow-400 font-medium"
                    }
                >
                    <div className="flex gap-4 items-center">
                        <HiHome className="inline-block" size={16} />
                        <p className="">Teacher Requests</p>
                    </div>

                </NavLink>
            </li>



        </> : 
        isTeacher ? 
        <>

            <li>
                <NavLink
                    to="/dashboard/add-class"
                    className={({ isActive }) =>
                        isActive
                            ? "font-bold !text-white bg-yellow-800"
                            : "text-black hover:!text-yellow-400 font-medium"
                    }
                >
                    <div className="flex gap-4 items-center">
                        <HiHome className="inline-block" size={16} />
                        <p className="">Add Class</p>
                    </div>

                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/my-classes"
                    className={({ isActive }) =>
                        isActive
                            ? "font-bold !text-white bg-yellow-800"
                            : "text-black hover:!text-yellow-400 font-medium"
                    }
                >
                    <div className="flex gap-4 items-center">
                        <HiHome className="inline-block" size={16} />
                        <p className="">My Classes</p>
                    </div>

                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/teacher-profile"
                    className={({ isActive }) =>
                        isActive
                            ? "font-bold !text-white bg-yellow-800"
                            : "text-black hover:!text-yellow-400 font-medium"
                    }
                >
                    <div className="flex gap-4 items-center">
                        <HiHome className="inline-block" size={16} />
                        <p className="">My Profile</p>
                    </div>

                </NavLink>
            </li>

        </> :
            <>

                <li>
                    <NavLink
                        to="/dashboard/my-enrolled-classes"
                        className={({ isActive }) =>
                            isActive
                                ? "font-bold !text-white bg-yellow-800"
                                : "text-black hover:!text-yellow-400 font-medium"
                        }
                    >
                        <div className="flex gap-4 items-center">
                            <HiHome className="inline-block" size={16} />
                            <p className="">My Enroll Classes</p>
                        </div>

                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/profile"
                        className={({ isActive }) =>
                            isActive
                                ? "font-bold !text-white bg-yellow-800"
                                : "text-black hover:!text-yellow-400 font-medium"
                        }
                    >
                        <div className="flex gap-4 items-center">
                            <HiHome className="inline-block" size={16} />
                            <p className="">Profile</p>
                        </div>

                    </NavLink>
                </li>
            </>


    const sharedNavItems = <>
        <li>
            <div className="divider divider-warning"></div>
        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? "font-bold !text-white bg-yellow-400"
                        : "text-black hover:text-yellow-500 font-medium"
                }
            >
                <div className="flex gap-4 items-center">
                    <HiHome className="inline-block" size={16} />
                    <p className="">Home</p>
                </div>

            </NavLink>
        </li>



    </>


    return (
        <div className="drawer lg:drawer-open sticky top-0 h-full">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li>
                        <NavLink to='/' className="flex items-center gap-4 p-4">
                            <p className="font-bold text-2xl">Academix</p>
                        </NavLink>
                    </li>
                    {sidebarItems}
                    {sharedNavItems}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar