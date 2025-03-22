import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Profile = () => {
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-sm bg-white dark:bg-gray-900 dark:text-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
        <img
          src={user?.photoURL || 'https://via.placeholder.com/150'}
          alt="User Profile"
          className="w-32 h-32 rounded-full mx-auto shadow-md"
        />
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-4">
          {user?.displayName || 'Admin Name'}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{user?.email || 'admin@example.com'}</p>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            to='/dashboard/my-enrolled-classes'
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-full shadow-md transition-colors duration-300"
          >
            My Enrolled Classes
          </Link>
          <button
            onClick={handleLogout}
            className="btn btn-sm btn-error rounded-full"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
