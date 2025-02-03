import React, { useState, useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useNavigate, useParams } from 'react-router-dom';

const ClassDetails = () => {
  const { id } = useParams();
  const [classData, setClassData] = useState(null);
  const [enrollments, setEnrollments] = useState(0);
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
    // Fetch class details
    const fetchClassDetails = async () => {
      try {
        const classResponse = await axiosSecure.get(`/api/classes/${id}`);
        setClassData(classResponse.data);
        setEnrollments(classResponse.data.enrollments);

        // Fetch assignments for the class
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
console.log(totalSubmissions);

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

      // Update assignments table
      setAssignments([...assignments, response.data.assignment]);
      setShowModal(false); // Close modal
      setAssignmentForm({ title: '', description: '', deadline: '' }); // Reset form
    } catch (error) {
      console.error('Error creating assignment:', error.response?.data || error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">{classData.title} - Class Details</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
        <div className="border p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Total Enrollment</h3>
          <p>{classData.totalEnrollments}</p>
        </div>
        <div className="border p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Total Assignments</h3>
          <p>{assignments.length}</p>
        </div>
        <div className="border p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Total Submissions</h3>
          <p>{totalSubmissions}</p>
        </div>
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setShowModal(true)}
      >
        Create Assignment
      </button>

      {/* Assignments Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2 border-b">#</th>
              <th className="text-left px-4 py-2 border-b">Title</th>
              <th className="text-left px-4 py-2 border-b">Description</th>
              <th className="text-left px-4 py-2 border-b">Deadline</th>
              <th className="text-left px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <tr key={assignment?._id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{index + 1}</td>
                <td className="px-4 py-2 border-b">{assignment?.title}</td>
                <td className="px-4 py-2 border-b">{assignment?.description}</td>
                <td className="px-4 py-2 border-b">{new Date(assignment?.deadline).toLocaleDateString()}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded text-sm"
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
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Create Assignment</h2>
            <input
              type="text"
              name="title"
              placeholder="Assignment Title"
              value={assignmentForm.title}
              onChange={handleInputChange}
              className="mb-2 p-2 border border-gray-300 rounded w-full"
            />
            <textarea
              name="description"
              placeholder="Assignment Description"
              value={assignmentForm.description}
              onChange={handleInputChange}
              className="mb-2 p-2 border border-gray-300 rounded w-full"
            ></textarea>
            <input
              type="date"
              name="deadline"
              value={assignmentForm.deadline}
              onChange={handleInputChange}
              className="mb-2 p-2 border border-gray-300 rounded w-full"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleCreateAssignment}
              >
                Add Assignment
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
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
