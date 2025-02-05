import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import {  useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const navigate=useNavigate();

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axiosSecure.get("/api/classes");
        setClasses(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching classes:", error.response?.data || error.message);
        setLoading(false);
      }
    };
    fetchClasses();
  }, [axiosSecure]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <span className="loading loading-ball loading-lg"></span>
    </div>;
  }

  return (
    <div className="p-4">
        <Helmet>
            <title>Academix | All Classes</title>
        </Helmet>
      <h1 className="text-2xl font-semibold mb-6">Classes ({classes.length})</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {classes.map((classItem) => (
          <div key={classItem._id} className="border rounded-lg shadow-lg overflow-hidden">
            <img
              src={classItem.image || "https://via.placeholder.com/150"}
              alt={classItem.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 line-clamp-1">{classItem.title}</h2>
              <p className="text-gray-600 text-sm mb-2">
                <span className="font-semibold">Posted by:</span> {classItem.postedBy || "Unknown"}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <span className="font-semibold">Price:</span> ${classItem.price || "Free"}
              </p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-1">{classItem.description || "No description provided."}</p>
              <p className="text-gray-600 text-sm mb-4">
                <span className="font-semibold">Total Enrollments:</span> {classItem.totalEnrollments || 0}
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition"
                onClick={() => navigate(`/checkout/${classItem._id}`)}
              >
                Enroll
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600 transition mt-2"
                onClick={() => navigate(`/class/details/${classItem._id}`)}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
