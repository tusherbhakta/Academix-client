import React, { useState, useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
import { axiosPublic } from '../../../hooks/useAxiosPublic';
import useAuth from '../../../hooks/useAuth';

const MyClass = () => {
  const { user } = useAuth(); // Get user data from the context or hook
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const teacherEmail = user?.email; // Email of the logged-in teacher

  // Fetch classes based on email
  useEffect(() => {
    const fetchClasses = async () => {
      if (teacherEmail) { // Only fetch classes if teacherEmail is available
        try {
          const response = await axiosPublic.get('/api/teacher/classes', {
            params: { email: teacherEmail }, // Send email as query parameter
          });
          setClasses(response.data);
        } catch (error) {
          console.error('Error fetching classes:', error.response?.data || error.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchClasses();
  }, [teacherEmail, axiosSecure]); // Add teacherEmail to the dependency array

  const handleDeleteClass = async (classId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this class?');
    if (confirmDelete) {
      try {
        await axiosSecure.delete(`/api/classes/${classId}`);
        setClasses(classes.filter(cls => cls._id !== classId));
      } catch (error) {
        console.error('Error deleting class:', error.response?.data || error.message);
      }
    }
  };

  const handleUpdateClass = (classId) => {
    navigate(`/dashboard/update-class/${classId}`);
  };

  const handleSeeDetails = (classId) => {
    navigate(`/dashboard/my-class/${classId}`);
  };

  if (loading) {
    return <div className="text-center text-gray-700 dark:text-gray-300 mt-10">Loading...</div>;
  }

  return (
    <div className="dark:bg-gray-900 min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Your Classes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls) => (
          <div key={cls._id} className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <img 
              src={cls.image} 
              alt={cls.title} 
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{cls.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">Instructor: {cls.name}</p>
            <p className="text-gray-600 dark:text-gray-300">Email: {cls.email}</p>
            <p className="text-gray-600 dark:text-gray-300">Price: ${cls.price}</p>
            <p className="text-gray-600 dark:text-gray-300">{cls.description}</p>
            <p className={`font-semibold ${cls.status === 'approved' ? 'text-green-500' : 'text-yellow-500'} dark:text-${cls.status === 'approved' ? 'green-400' : 'yellow-400'}`}>
              Status: {cls.status}
            </p>
            <div className="mt-4 flex space-x-2">
              <button 
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded transition dark:bg-yellow-500 dark:hover:bg-yellow-600"
                onClick={() => handleUpdateClass(cls._id)}
              >
                Update
              </button>
              <button 
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition dark:bg-red-600 dark:hover:bg-red-700"
                onClick={() => handleDeleteClass(cls._id)}
              >
                Delete
              </button>
              <button
                className={`px-4 py-2 rounded transition ${
                  cls.status === 'approved' 
                    ? 'bg-green-500 hover:bg-green-600 text-white dark:bg-green-600 dark:hover:bg-green-700' 
                    : 'bg-gray-400 text-gray-200 cursor-not-allowed dark:bg-gray-600 dark:text-gray-400'
                }`}
                disabled={cls.status !== 'approved'}
                onClick={() => handleSeeDetails(cls._id)}
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyClass;
