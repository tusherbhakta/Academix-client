import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import statImg from "../../../assets/statistics.jpg";

const StatisticsSection = () => {
  const [data, setData] = useState();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/api/statistics").then((res) => {
      setData(res.data);
    });
  }, [axiosPublic]);

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-black dark:text-white">
            Website Statistics
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-300 mt-4">
            Discover key insights and statistics about our platform's usage and growth.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side: Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Total Users Card */}
            <div className="bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg rounded-lg p-6 text-center transition-all transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-3xl font-bold">{data?.totalUsers}</h3>
              <p className="text-sm mt-2">Total Users</p>
            </div>

            {/* Total Classes Card */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-lg rounded-lg p-6 text-center transition-all transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-3xl font-bold">{data?.totalClasses}</h3>
              <p className="text-sm mt-2">Total Classes</p>
            </div>

            {/* Total Enrollments Card */}
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg rounded-lg p-6 text-center transition-all transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-3xl font-bold">{data?.totalEnrollments}</h3>
              <p className="text-sm mt-2">Total Enrollments</p>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={statImg}
              alt="Website Statistics"
              className="rounded-lg shadow-lg w-full object-cover dark:opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
