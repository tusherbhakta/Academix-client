import React, { useState, useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useNavigate, useParams } from 'react-router-dom';

const ClassDetails = () => {
  const { id } = useParams();
  const [classData, setClassData] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [assignmentForm, setAssignmentForm] = useState({
    title: '',
    description: '',
    deadline: '',
  });

  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClassDetails = async () => {
      try {
        const classResponse = await axiosSecure.get(`/api/classes/${id}`);
        setClassData(classResponse.data);

        const assignmentsResponse = await axiosSecure.get(`/api/assignments/${id}`);
        setAssignments(assignmentsResponse.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching class details:', error.response?.data || error.message);
        setLoading(false);
      }
    };

    fetchClassDetails();
  }, [id, axiosSecure]);

  const totalSubmissions = assignments.reduce((acc, res) => acc + res.submissionCount, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAssignmentForm({ ...assignmentForm, [name]: value });
  };

  const handleCreateAssignment = async () => {
    try {
      const newAssignment = {
        classId: id,
        title: assignmentForm.title,
        description: assignmentForm.description,
        deadline: assignmentForm.deadline,
      };

      const response = await axiosSecure.post('/api/assignments', newAssignment);
      setAssignments([...assignments, response.data.assignment]);
      setShowModal(false);
      setAssignmentForm({ title: '', description: '', deadline: '' });
    } catch (error) {
      console.error('Error creating assignment:', error.response?.data || error.message);
    }
  };

  if (loading) {
    return <div className="text-center text-gray-700 dark:text-gray-300 mt-10">Loading...</div>;
  }

  return (
    <div className="p-8 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl text-center font-bold mb-6">{classData.title} - Class Details</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-600">
          <h3 className="text-xl font-semibold">Total Enrollment</h3>
          <p>{classData.totalEnrollments}</p>
        </div>
        <div className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-600">
          <h3 className="text-xl font-semibold">Total Assignments</h3>
          <p>{assignments.length}</p>
        </div>
        <div className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-600">
          <h3 className="text-xl font-semibold">Total Submissions</h3>
          <p>{totalSubmissions}</p>
        </div>
      </div>

      <button
        className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-4 py-2 rounded transition dark:bg-yellow-400 dark:hover:bg-yellow-500"
        onClick={() => setShowModal(true)}
      >
        Create Assignment
      </button>

      {/* Assignments Table */}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="text-left px-4 py-2 border-b dark:border-gray-600">#</th>
              <th className="text-left px-4 py-2 border-b dark:border-gray-600">Title</th>
              <th className="text-left px-4 py-2 border-b dark:border-gray-600">Description</th>
              <th className="text-left px-4 py-2 border-b dark:border-gray-600">Deadline</th>
              <th className="text-left px-4 py-2 border-b dark:border-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <tr key={assignment?._id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-2 border-b dark:border-gray-600">{index + 1}</td>
                <td className="px-4 py-2 border-b dark:border-gray-600">{assignment?.title}</td>
                <td className="px-4 py-2 border-b dark:border-gray-600">{assignment?.description}</td>
                <td className="px-4 py-2 border-b dark:border-gray-600">
                  {new Date(assignment?.deadline).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 border-b dark:border-gray-600">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm transition"
                    onClick={() => console.log(`Delete assignment: ${assignment?._id}`)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Create Assignment</h2>
            <input
              type="text"
              name="title"
              placeholder="Assignment Title"
              value={assignmentForm.title}
              onChange={handleInputChange}
              className="mb-2 p-2 border border-gray-300 dark:border-gray-600 rounded w-full bg-white dark:bg-gray-700 dark:text-gray-300"
            />
            <textarea
              name="description"
              placeholder="Assignment Description"
              value={assignmentForm.description}
              onChange={handleInputChange}
              className="mb-2 p-2 border border-gray-300 dark:border-gray-600 rounded w-full bg-white dark:bg-gray-700 dark:text-gray-300"
            ></textarea>
            <input
              type="date"
              name="deadline"
              value={assignmentForm.deadline}
              onChange={handleInputChange}
              className="mb-2 p-2 border border-gray-300 dark:border-gray-600 rounded w-full bg-white dark:bg-gray-700 dark:text-gray-300"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
                onClick={handleCreateAssignment}
              >
                Add Assignment
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassDetails;
