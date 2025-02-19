import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState(null); // State for sorting order
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

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

  // Sorting logic
  const handleSort = (order) => {
    const sortedClasses = [...classes].sort((a, b) => {
      const priceA = a.price || 0;
      const priceB = b.price || 0;
      return order === "asc" ? priceA - priceB : priceB - priceA;
    });
    setSortOrder(order);
    setClasses(sortedClasses);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Helmet>
        <title>Academix | All Classes</title>
      </Helmet>

      <h1 className="text-2xl font-semibold mb-4">Classes ({classes.length})</h1>

      {/* Sorting Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded font-semibold transition ${
            sortOrder === "asc" ? "bg-yellow-400 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
          onClick={() => handleSort("asc")}
        >
          Sort by Price: Low to High
        </button>
        <button
          className={`px-4 py-2 rounded font-semibold transition ${
            sortOrder === "desc" ? "bg-yellow-400 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
          onClick={() => handleSort("desc")}
        >
          Sort by Price: High to Low
        </button>
      </div>

      {/* Class Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {classes.map((classItem) => (
          <div key={classItem._id} className="border dark:border-gray-700 rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800">
            <img
              src={classItem.image || "https://via.placeholder.com/150"}
              alt={classItem.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 line-clamp-1">{classItem.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                <span className="font-semibold">Posted by:</span> {classItem.postedBy || "Unknown"}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                <span className="font-semibold">Price:</span> ${classItem.price || "Free"}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-1">{classItem.description || "No description provided."}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                <span className="font-semibold">Total Enrollments:</span> {classItem.totalEnrollments || 0}
              </p>
              <button
                className="bg-yellow-400 text-white px-4 py-2 rounded w-full hover:bg-yellow-600 transition"
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
