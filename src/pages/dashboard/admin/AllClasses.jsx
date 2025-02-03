import { useState, useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosSecure = useAxiosSecure();
  
  useEffect(() => {
    // Fetch all classes when component mounts
    const fetchClasses = async () => {
      try {
        const response = await axiosSecure.get('/api/admin/classes');
        setClasses(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching classes:', error.response?.data || error.message);
        setLoading(false);
      }
    };

    fetchClasses();
  }, [axiosSecure]);

  const handleApproveClass = async (classId) => {
    try {
      await axiosSecure.patch(`/api/classes/approve/${classId}`);
      // Refresh the list after approving the class
      const updatedClasses = classes.map((cls) =>
        cls._id === classId ? { ...cls, status: 'approved' } : cls
      );
      setClasses(updatedClasses);
    } catch (error) {
      console.error('Error approving class:', error.response?.data || error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">All Classes</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-100">
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
              <tr key={cls._id} className="border-t border-gray-200">
                <td className="px-4 py-2">{cls.title}</td>
                <td className="px-4 py-2">{cls.name}</td>
                <td className="px-4 py-2">{cls.description}</td>
                <td className="px-4 py-2">${cls.price}</td>
                <td className="px-4 py-2">{cls.status}</td>
                <td className="px-4 py-2 text-center">
                  {cls.status === 'pending' && (
                    <button
                      onClick={() => handleApproveClass(cls._id)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
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
