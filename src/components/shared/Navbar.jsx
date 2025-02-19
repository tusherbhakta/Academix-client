// import { Link, NavLink,useNavigate } from "react-router-dom";
// import useAuth from '../../hooks/useAuth';
// import Swal from "sweetalert2";
// import useAdmin from "../../hooks/useAdmin";
// import useTeacher from "../../hooks/useTeacher";
// import logo from '../../assets/logo.jpg'

// const Navbar = () => {
//   const { user,logoutUser } = useAuth();
//   const navigate=useNavigate();
//   const [isAdmin]=useAdmin();
//   const [isTeacher]=useTeacher();

//   const handleLogout = async () => {
//         try {
//           await logoutUser();
//           Swal.fire({
//             icon: 'success',
//             title: 'Logged Out',
//             text: 'You have been logged out successfully.',
//           }).then(() => {
//             navigate('/');
//           });
//         } catch (err) {
//           Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'Failed to log out. Please try again.',
//           });
//         }
//       };

//   const navItems = (
//     <>
//       <li>
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive
//               ? "text-yellow-400 font-bold !text-yellow-400"
//               : "text-white hover:!text-yellow-400 font-medium"
//           }
//         >
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/classes"
//           className={({ isActive }) =>
//             isActive
//               ? "text-yellow-400 font-bold"
//               : "text-white hover:!text-yellow-400 font-medium"
//           }
//         >
//           All Classes
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/about"
//           className={({ isActive }) =>
//             isActive
//               ? "text-yellow-400 font-bold"
//               : "text-white hover:!text-yellow-400 font-medium"
//           }
//         >
//           About
//         </NavLink>
//       </li>
//       {user && (
//         <li>
//           <NavLink
//             to={isAdmin?'/dashboard/admin-profile':isTeacher?'/dashboard/teacher-profile':'/dashboard/profile'}
//             className={({ isActive }) =>
//               isActive
//                 ? "text-yellow-400 font-bold !text-yellow-400"
//                 : "text-white hover:!text-yellow-400 font-medium"
//             }
//           >
//             Dashboard
//           </NavLink>
//         </li>
//       )}

//       <li>
//         <NavLink
//           to="/teach-academix"
//           className={({ isActive }) =>
//             isActive
//               ? "text-yellow-400 font-bold"
//               : "text-white hover:!text-yellow-400 font-medium"
//           }
//         >
//           Teach On Academix
//         </NavLink>
//       </li>


//     </>
//   );

//   return (
//     <div className="bg-dark-1 sticky top-0 w-full z-50 text-white md:py-2 bg-gray-900 bg-opacity-90 shadow-md">
//       <div className="navbar mx-auto max-w-7xl">
//         {/* Logo Section */}
//         <div className="navbar-start">
//           {/* Mobile Dropdown */}
//           <div className="navbar-center lg:hidden">
//             <div className="dropdown">
//               <div tabIndex={0} role="button" className="btn btn-ghost">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h8m-8 6h16"
//                   />
//                 </svg>
//               </div>
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//               >
//                 {navItems}
//               </ul>
//             </div>
//           </div>
//           <Link className="btn btn-ghost flex items-center">
          
//             <img className="w-8 h-8 rounded-full" src={logo} alt="" />
//             <p className="text-xl hidden md:block">Academix</p>
//           </Link>
//         </div>

//         {/* Navigation Menu */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="flex space-x-6">{navItems}</ul>
//         </div>

//         {/* Login and Sign Up Buttons */}
//         {user ? (
//           <div className="navbar-end space-x-2">
//             <p className="">{user.email}</p>
//             <button onClick={() => handleLogout()} type="" className="btn btn-sm btn-error rounded-full">logout</button>
//             {user.photoURL ? (<img src={user.photoURL} alt="user" className="w-10 h-10 rounded-full" />) : null}
//           </div>
//         ) : (
//           <div className="navbar-end space-x-2">
//             <NavLink
//               to="/login"
//               className="px-4 py-2 border rounded-lg text-white hover:text-yellow-400 hover:border-yellow-400"
//             >
//               Login
//             </NavLink>
//             <NavLink
//               to="/register"
//               className="bg-yellow-400 text-gray-900 hover:bg-yolo hover:text-white border border-yellow-400 hover:border-yolo rounded-lg px-4 py-2"
//             >
//               Sign Up
//             </NavLink>
//           </div>
//         )}


//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useTeacher from "../../hooks/useTeacher";
import logo from "../../assets/logo.jpg";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  const [isTeacher] = useTeacher();

  const handleLogout = async () => {
    try {
      await logoutUser();
      Swal.fire({
        icon: "success",
        title: "Logged Out",
        text: "You have been logged out successfully.",
      }).then(() => {
        navigate("/");
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to log out. Please try again.",
      });
    }
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold"
              : "text-white hover:text-yellow-400 font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold"
              : "text-white hover:text-yellow-400 font-medium"
          }
        >
          All Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold"
              : "text-white hover:text-yellow-400 font-medium"
          }
        >
          About
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to={
              isAdmin
                ? "/dashboard/admin-profile"
                : isTeacher
                ? "/dashboard/teacher-profile"
                : "/dashboard/profile"
            }
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-bold"
                : "text-white hover:text-yellow-400 font-medium"
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/teach-academix"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold"
              : "text-white hover:text-yellow-400 font-medium"
          }
        >
          Teach On Academix
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-dark-1 sticky top-0 w-full z-50 text-white md:py-2 bg-gray-900 bg-opacity-90 shadow-md">
      <div className="navbar mx-auto max-w-7xl">
        {/* Logo Section */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="navbar-center lg:hidden">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>
          </div>
          <Link className="btn btn-ghost flex items-center">
            <img className="w-8 h-8 rounded-full" src={logo} alt="logo" />
            <p className="text-xl hidden md:block">Academix</p>
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex space-x-6">{navItems}</ul>
        </div>

        {/* Right Section: Dark Mode Toggle + Login/Logout */}
        <div className="navbar-end flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <ThemeToggle />

          {user ? (
            <>
              <p>{user.email}</p>
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-error rounded-full"
              >
                Logout
              </button>
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="user"
                  className="w-10 h-10 rounded-full"
                />
              )}
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="px-4 py-2 border rounded-lg text-white hover:text-yellow-400 hover:border-yellow-400"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 border border-yellow-400 rounded-lg px-4 py-2"
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
