import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import useAxiosSecure from '../hooks/useAxiosSecure';

const TeachAcademix = () => {
  const { user } = useAuth(); // Assuming useAuth provides user info
  const navigate = useNavigate();
  const [status, setStatus] = useState(''); // Track user's teacher request status

  const axiosSecure=useAxiosSecure();
  const [formData, setFormData] = useState({
    title: '',
    experience: '',
    category: '',
  });

  useEffect(() => {
    // Fetch the user's teacher request status
    const fetchStatus = async () => {
      try {
        const response = await axiosSecure.get(`/api/teacher-requests/${user?.email}`);
        setStatus(response.data.status);
      } catch (error) {
        console.error('Error fetching teacher request status:', error);
      }
    };

    fetchStatus();
  }, [user?.email,axiosSecure]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = {
      ...formData,
      name: user?.displayName,
      email: user?.email,
      image: user.photoURL, // Assuming user has a photoURL field
      status: 'pending',
    };

    console.log("data", requestData)

    try {
      await axiosSecure.post('/api/teacher-requests', requestData);
      Swal.fire({
        icon: 'success',
        title: 'Request Submitted',
        text: 'Your teaching application is under review.',
      });
      setStatus('pending'); // Update status to pending
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || 'Failed to submit request. Please try again.',
      });
    }
  };

  const handleRequestAnother = async () => {
    try {
      await axios.put(`/api/teacher-requests/${user?.email}`, { status: 'pending' });
      Swal.fire({
        icon: 'success',
        title: 'Request Re-submitted',
        text: 'Your teaching application is under review again.',
      });
      setStatus('pending'); // Update status to pending
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to re-submit request. Please try again.',
      });
    }
  };

  if (status === 'accepted') {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold">You're now a teacher!</h2>
        <p className="mt-4">Thank you for joining us as a teacher on Academix.</p>
      </div>
    );
  }

  if (status === 'pending') {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold">Application Pending</h2>
        <p className="mt-4">Your teaching application is under review. Please wait for the admin's decision.</p>
      </div>
    );
  }

  if (status === 'rejected') {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold">Application Rejected</h2>
        <p className="mt-4">Unfortunately, your application was rejected. You can re-apply below.</p>
        <button
          onClick={handleRequestAnother}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Request Again
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Apply to Teach on Academix</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-dark-2">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter title (e.g., Web Development Teacher)"
              className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none bg-transparent"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="experience" className="text-dark-2">Experience Level</label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none bg-transparent"
              required
            >
              <option value="" disabled>Select experience level</option>
              <option value="beginner">Beginner</option>
              <option value="mid-level">Mid-Level</option>
              <option value="experienced">Experienced</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="text-dark-2">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none bg-transparent"
              required
            >
              <option value="" disabled>Select category</option>
              <option value="web-development">Web Development</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="data-science">Data Science</option>
              <option value="business-management">Business Management</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-dark-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user?.email}
              disabled
              className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none bg-gray-100"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="image" className="text-dark-2">Profile Image</label>
            <input
              type="text"
              id="image"
              name="image"
              value={user.photoURL || ''}
              disabled
              className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none bg-gray-100"
            />
          </div>

          <button
            type="submit"
            className="block text-center py-3 px-4 text-white font-semibold w-full rounded-lg bg-blue-500"
          >
            Submit for Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeachAcademix;
