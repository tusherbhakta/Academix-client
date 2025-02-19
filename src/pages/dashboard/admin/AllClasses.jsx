import { useState, useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axiosSecure.get('/api/admin/classes');
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchClasses();
  }, [axiosSecure]);

  const handleApproveClass = async (classId) => {
    try {
      await axiosSecure.patch(`/api/classes/approve/${classId}`);
      const updatedClasses = classes.map((cls) =>
        cls._id === classId ? { ...cls, status: 'approved' } : cls
      );
      setClasses(updatedClasses);
    } catch (error) {
      console.error('Error approving class:', error.response?.data || error.message);
    }
  };

  if (loading) {
    return <div className="text-center text-gray-700 dark:text-gray-300">Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">All Classes</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Class Title</th>
              <th className="px-4 py-2 text-left">Instructor</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls) => (
              <tr key={cls._id} className="border-t border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-300">
                <td className="px-4 py-2">{cls.title}</td>
                <td className="px-4 py-2">{cls.name}</td>
                <td className="px-4 py-2">{cls.description}</td>
                <td className="px-4 py-2">${cls.price}</td>
                <td className="px-4 py-2">{cls.status}</td>
                <td className="px-4 py-2 text-center">
                  {cls.status === 'pending' && (
                    <button
                      onClick={() => handleApproveClass(cls._id)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 dark:bg-yellow-400 dark:hover:bg-yellow-500"
                    >
                      Approve
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllClasses;
