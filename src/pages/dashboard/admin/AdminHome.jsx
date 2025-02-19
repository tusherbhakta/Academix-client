import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminHome = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      Swal.fire({
        icon: 'success',
        title: 'Logged Out',
        text: 'You have been logged out successfully.',
      }).then(() => {
        navigate('/');
      });
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to log out. Please try again.',
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tl from-yellow-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
        <img
          src={user?.photoURL || 'https://via.placeholder.com/150'}
          alt="User Profile"
          className="w-32 h-32 rounded-full mx-auto shadow-md"
        />
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-4">
          {user?.displayName || 'Admin Name'}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{user?.email || 'admin@example.com'}</p>
        <div className="mt-6 flex flex-col gap-3">
          <Link to='/dashboard/users' className="bg-yellow-400 dark:bg-yellow-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-yellow-500 dark:hover:bg-yellow-500 transition-colors duration-300">
            Manage Users
          </Link>
          <button onClick={() => handleLogout()} className="btn btn-sm btn-error rounded-full dark:bg-red-600 dark:hover:bg-red-700">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
