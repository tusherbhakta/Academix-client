import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const TeacherRequests = () => {
  const [requests, setRequests] = useState([]);
  const axiosSecure = useAxiosSecure();

  // Fetch all teacher requests
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axiosSecure.get('/api/teacher-requests');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching teacher requests:', error);
      }
    };

    fetchRequests();
  }, [axiosSecure]);

  // Approve a teacher request
  const handleApprove = async (id) => {
    try {
      await axiosSecure.patch(`/api/teacher-requests/approve/${id}`);
      Swal.fire('Success', 'The teacher request has been approved.', 'success');
    } catch (error) {
      console.error('Error approving request:', error);
      Swal.fire('Error', 'Failed to approve the request.', 'error');
    }
  };

  // Reject a teacher request
  const handleReject = async (id) => {
    try {
      await axiosSecure.patch(`/api/teacher-requests/reject/${id}`);
      Swal.fire('Success', 'The teacher request has been rejected.', 'success');
    } catch (error) {
      console.error('Error rejecting request:', error);
      Swal.fire('Error', 'Failed to reject the request.', 'error');
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center dark:text-white mb-6">Teacher Requests</h1>

      <div className="overflow-x-auto bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
        {requests.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-white">No teacher requests at the moment.</p>
        ) : (
          <table className="min-w-full bg-white dark:bg-gray-700 border-collapse border border-slate-200">
            <thead>
              <tr>
                <th className="py-3 px-5 border dark:text-white border-slate-300 text-left">Name</th>
                <th className="py-3 px-5 border dark:text-white border-slate-300 text-left">Email</th>
                <th className="py-3 px-5 border dark:text-white border-slate-300 text-left">Title</th>
                <th className="py-3 px-5 border dark:text-white border-slate-300 text-left">Experience</th>
                <th className="py-3 px-5 border dark:text-white border-slate-300 text-left">Status</th>
                <th className="py-3 px-5 border dark:text-white border-slate-300 text-left">Categoty</th>
                <th className="py-3 px-5 border dark:text-white border-slate-300 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request._id}>
                  <td className="py-3 px-5 border dark:text-white border-slate-300">{request.name}</td>
                  <td className="py-3 px-5 border dark:text-white border-slate-300">{request.email}</td>
                  <td className="py-3 px-5 border dark:text-white border-slate-300">{request.title}</td>
                  <td className="py-3 px-5 border dark:text-white border-slate-300">{request.experience}</td>
                  <td className="py-3 px-5 border dark:text-white border-slate-300">{request.status}</td>
                  <td className="py-3 px-5 border dark:text-white border-slate-300">{request.category}</td>
                  <td className="py-3 px-5 border border-slate-300 flex gap-2 justify-center">
                    <button
                    disabled={request.status === 'accepted'}
                      onClick={() => handleApprove(request._id)}
                      className="bg-green-500 text-white px-4 py-2 rounded-md"
                    >
                    Accept
                    </button>
                    <button
                      disabled={request.status === 'rejected'}
                      onClick={() => handleReject(request._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TeacherRequests;
