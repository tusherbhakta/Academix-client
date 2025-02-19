import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layout/Main";
import { Home } from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../Layout/Dashboard";
import Profile from "../pages/dashboard/student/Profile";
import MyEnrolledClasses from "../pages/dashboard/student/MyEnrolledClasses";
import AdminHome from "../pages/dashboard/admin/AdminHome";
import TeacherRequests from "../pages/dashboard/admin/TeacherRequests";
import Users from "../pages/dashboard/admin/Users";
import AllClasses from "../pages/dashboard/admin/AllClasses";
import AddClass from "../pages/dashboard/teacher/AddClass";
import MyClass from "../pages/dashboard/teacher/MyClass";
import TeacherHome from "../pages/dashboard/teacher/TeacherHome";
import TeachAcademix from "../pages/TeachAcademix";
import ClassDetails from "../pages/dashboard/teacher/ClassDetails";
import UpdateClass from "../pages/dashboard/teacher/UpdateClass";
import Classes from "../pages/Classes";
import Payment from "../pages/Payment";
import MyEnrollDetails from "../pages/dashboard/student/MyEnrollDetails";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About";
import StudentClassDetails from "../pages/StudentClassDetails";
import ErrorPage from "../pages/ErrorPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsofService";
// import Payment from "../pages/Payment";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: 'privacypolicy',
                element: <PrivacyPolicy/>
            },
            {
                path: 'terms-of-service',
                element: <TermsOfService/>
            },
            {
                path: '/class/details/:id',
                element: 
                <PrivateRoute>
                <StudentClassDetails />
                </PrivateRoute>
            },

            {
                path: '/teach-academix',
                element:
                    <PrivateRoute>
                        <TeachAcademix />

                    </PrivateRoute>
            },
            {
                path: '/classes',
                element: <Classes />
            },
            {
                path: '/checkout/:id',
                element:
                    <PrivateRoute>
                        <Payment />
                    </PrivateRoute>

            }
        ]
    }, {

        path: '/dashboard',
        element:
            <PrivateRoute>

                <Dashboard />
            </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <div>Hello dashboard</div>

            },

            // Student routes
            {
                path: '/dashboard/my-enrolled-classes',
                element: <MyEnrolledClasses />
            },
            {
                path: '/dashboard/profile',
                element: <Profile />
            },
            {
                path: '/dashboard/myenroll-class/:id',
                element: <MyEnrollDetails />

            },
            // Teacher routes
            {
                path: '/dashboard/add-class',
                element: <AddClass />

            },
            {
                path: '/dashboard/my-classes',
                element: <MyClass />

            },
            {
                path: '/dashboard/teacher-profile',
                element: <TeacherHome />

            },
            {
                path: "/dashboard/my-class/:id",
                element: <ClassDetails />

            },

            {
                path: '/dashboard/update-class/:id',
                element: <UpdateClass />
            },

            // Admin routes
            {
                path: '/dashboard/admin-home',
                element: <AdminHome />
            },
            {
                path: '/dashboard/teacher-requests',
                element: <TeacherRequests />
            },
            {
                path: '/dashboard/users',
                element: <Users />
            },
            {
                path: '/dashboard/all-classes',
                element: <AllClasses />
            },
            {
                path: '/dashboard/admin-profile',
                element: <AdminHome />
            }
        ]
    }



]);
