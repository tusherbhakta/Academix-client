import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AddClass = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    image: ''
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const classData = {
      ...formData,
      name: user?.displayName,
      email: user.email,
      status: 'pending'
    };

    try {
      await axiosSecure.post('/api/classes', classData);
      Swal.fire({
        icon: 'success',
        title: 'Class Added',
        text: 'Your class has been added and is pending approval.'
      });
      navigate('/dashboard/my-classes');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || 'Failed to add class. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-lg w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">Add a Class</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-gray-700 dark:text-gray-300">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter class title"
              className="w-full border border-slate-200 dark:border-gray-600 rounded-lg py-3 px-5 outline-none bg-transparent dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user?.displayName}
              disabled
              className="w-full border border-slate-200 dark:border-gray-600 rounded-lg py-3 px-5 outline-none bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user?.email}
              disabled
              className="w-full border border-slate-200 dark:border-gray-600 rounded-lg py-3 px-5 outline-none bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="price" className="text-gray-700 dark:text-gray-300">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Enter class price"
              className="w-full border border-slate-200 dark:border-gray-600 rounded-lg py-3 px-5 outline-none bg-transparent dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-gray-700 dark:text-gray-300">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter class description"
              className="w-full border border-slate-200 dark:border-gray-600 rounded-lg py-3 px-5 outline-none bg-transparent dark:bg-gray-700 dark:text-white h-32"
              required
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="image" className="text-gray-700 dark:text-gray-300">Image</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              placeholder="Enter image URL"
              className="w-full border border-slate-200 dark:border-gray-600 rounded-lg py-3 px-5 outline-none bg-transparent dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`block text-center py-3 px-4 text-white font-semibold w-full rounded-lg transition 
            ${loading ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700'}`}
          >
            {loading ? 'Submitting...' : 'Add Class'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
