

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const MyEnrolledClasses = () => {
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      // Fetch enrolled classes
      axiosPublic.get(`/api/my-enrolled-classes/${user.email}`).then((res) => {
        setClasses(res.data);
      });
    }
  }, [user?.email, axiosPublic]);

  return (
    <div className="p-8 min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl text-center font-bold mb-8">My Enrolled Classes ({classes.length})</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((enrolledClass) => (
          <div
            key={enrolledClass._id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border border-gray-200 dark:border-gray-700"
          >
            <img
              src={enrolledClass.image}
              alt={enrolledClass.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold dark:text-gray-300">{enrolledClass.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Posted by: {enrolledClass.name}</p>
            <button
              onClick={() => navigate(`/dashboard/myenroll-class/${enrolledClass._id}`)}
              className="mt-4 bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition"
            >
              Continue
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
