import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from 'react-rating'; // React rating component
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const MyEnrolledClassDetails = () => {
  const { id } = useParams(); // Class ID from the URL
  const axiosPublic = useAxiosPublic();
  const [assignments, setAssignments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedback, setFeedback] = useState({ description: '', rating: 0 });

  useEffect(() => {
    // Fetch assignments for the class
    axiosPublic.get(`/api/assignments/${id}`).then((res) => {
      setAssignments(res.data);
    });
  }, [id, axiosPublic]);

  const handleAssignmentSubmit = (assignmentId) => {
    axiosPublic
      .post(`/api/submit-assignment`, { assignmentId })
      .then(() => {
        alert('Assignment submitted successfully!');
        setAssignments((prev) =>
          prev.map((assignment) =>
            assignment._id === assignmentId
              ? { ...assignment, submissionCount: (assignment.submissionCount || 0) + 1 }
              : assignment
          )
        );
      })
      .catch((err) => console.error(err));
  };

  const handleFeedbackSubmit = () => {
    axiosPublic.post('/api/feedback', { ...feedback, classId: id }).then(() => {
      alert('Feedback submitted successfully!');
      setIsModalOpen(false);
      setFeedback({ description: '', rating: 0 });
    });
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-6">Assignments</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Deadline</th>
              <th className="border px-4 py-2">Submission</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment._id} className="dark:bg-gray-900">
                <td className="border px-4 py-2">{assignment.title}</td>
                <td className="border px-4 py-2">{assignment.description}</td>
                <td className="border px-4 py-2">
                  {new Date(assignment.deadline).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleAssignmentSubmit(assignment._id)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Submit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Button to open the modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-4 bg-yellow-400 text-gray-800 px-4 py-2 rounded hover:bg-yellow-500"
      >
        Teaching Evaluation Report (TER)
      </button>

      {/* DaisyUI Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Teaching Evaluation Report</h2>
            <textarea
              value={feedback.description}
              onChange={(e) => setFeedback({ ...feedback, description: e.target.value })}
              placeholder="Write your feedback..."
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mb-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
            ></textarea>
            <div className="mb-4">
              <label className="block mb-2">Rating:</label>
              <div className="text-xl">
                <Rating
                  initialRating={feedback.rating}
                  onChange={(value) => setFeedback({ ...feedback, rating: value })}
                  emptySymbol={<span className="text-gray-400">☆</span>}
                  fullSymbol={<span className="text-yellow-500">★</span>}
                />
              </div>
            </div>
            <button
              onClick={handleFeedbackSubmit}
              className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyEnrolledClassDetails;
