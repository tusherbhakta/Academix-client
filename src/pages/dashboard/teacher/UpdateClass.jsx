import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const UpdateClass = () => {
  const { id } = useParams(); // Get class ID from URL params
  const [classData, setClassData] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClassDetails = async () => {
      try {
        const response = await axiosSecure.get(`/api/classes/${id}`);
        setClassData(response.data);
      } catch (error) {
        console.error('Error fetching class details:', error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClassDetails();
  }, [id, axiosSecure]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClassData({ ...classData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosSecure.put(`/api/classes/${id}`, classData);
      alert('Class updated successfully!');
      navigate('/dashboard/my-classes');
    } catch (error) {
      console.error('Error updating class:', error.response?.data || error.message);
      alert('Failed to update class. Please try again.');
    }
  };

  if (loading) {
    return <div className="text-center text-gray-700 dark:text-gray-300 mt-10">Loading class details...</div>;
  }

  if (!classData) {
    return <div className="text-center text-red-500 dark:text-red-400 mt-10">Class not found.</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-8">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">Update Class</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Class Title</label>
            <input
              type="text"
              name="title"
              value={classData.title}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 dark:border-gray-600 rounded w-full bg-white dark:bg-gray-800 dark:text-gray-300"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Price</label>
            <input
              type="number"
              name="price"
              value={classData.price}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 dark:border-gray-600 rounded w-full bg-white dark:bg-gray-800 dark:text-gray-300"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Description</label>
            <textarea
              name="description"
              value={classData.description}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 dark:border-gray-600 rounded w-full bg-white dark:bg-gray-800 dark:text-gray-300"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Image URL</label>
            <input
              type="text"
              name="image"
              value={classData.image}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 dark:border-gray-600 rounded w-full bg-white dark:bg-gray-800 dark:text-gray-300"
            />
          </div>
          <div className="mt-4 flex justify-center">
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Update Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateClass;
