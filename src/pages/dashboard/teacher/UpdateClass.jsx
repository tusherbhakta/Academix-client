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
        setLoading(false);
      } catch (error) {
        console.error('Error fetching class details:', error.response?.data || error.message);
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
    return <div>Loading class details...</div>;
  }

  if (!classData) {
    return <div>Class not found.</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Update Class</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Class Title</label>
          <input
            type="text"
            name="title"
            value={classData.title}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={classData.price}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={classData.description}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded w-full"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="text"
            name="image"
            value={classData.image}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mt-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Update Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateClass;
