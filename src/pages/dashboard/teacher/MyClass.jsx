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
          setLoading(false);
        } catch (error) {
          console.error('Error fetching classes:', error.response?.data || error.message);
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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Your Classes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls) => (
          <div key={cls._id} className="border p-4 rounded-lg shadow-lg">
            <img src={cls.image} alt={cls.title} className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold">{cls.title}</h3>
            <p>Instructor: {cls.name}</p>
            <p>Email: {cls.email}</p>
            <p>Price: ${cls.price}</p>
            <p>{cls.description}</p>
            <p>Status: {cls.status}</p>
            <div className="mt-4 flex space-x-2">
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => handleUpdateClass(cls._id)}
              >
                Update
              </button>
              <button 
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleDeleteClass(cls._id)}
              >
                Delete
              </button>
              <button
                className={`bg-green-500 text-white px-4 py-2 rounded ${cls.status !== 'approved' ? 'cursor-not-allowed' : ''}`}
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
