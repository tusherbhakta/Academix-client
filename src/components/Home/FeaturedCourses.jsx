import { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';

const PopularCourses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const navigate=useNavigate();
  useEffect(() => {
    // Fetch all classes when component mounts
    const fetchClasses = async () => {
      try {
        const response = await axiosSecure.get('/api/classes');

        // console.log(response.data)
        const sortedClasses = response.data.sort((a, b) => b.totalEnrollments - a.totalEnrollments); // Sort by highest enrollment
        setClasses(sortedClasses.slice(0, 6)); // Get top 6 classes
        setLoading(false);
      } catch (error) {
        console.error('Error fetching classes:', error.response?.data || error.message);
        setLoading(false);
      }
    };

    fetchClasses();
  }, [axiosSecure]);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Popular Courses</h2>

        {loading ? (
          <p>Loading popular courses...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {classes.map((course) => (
              <div key={course._id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <img
                  src={course.image || 'https://via.placeholder.com/400'}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                <p className="text-gray-800 font-semibold">Enrollments: {course.totalEnrollments || 0}</p>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600 transition mt-2"
                  onClick={() => navigate(`/class/details/${course._id}`)}
                >
                  Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularCourses;
