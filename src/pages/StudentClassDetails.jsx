import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const StudentClassDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [classData, setClassData] = useState(null);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/api/classes/${id}`).then((res) => {
      setClassData(res.data);
    });
  }, [id, axiosSecure]);

  if (!classData) {
    return (
      <div className="flex justify-center items-center h-screen bg-white dark:bg-gray-900">
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Class Details Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={classData.image}
                alt={classData.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                {classData.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {classData.description}
              </p>

              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span className="font-semibold">Teacher:</span>
                <span className="ml-2">{classData.name}</span>
              </div>

              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                <span className="font-semibold">Price:</span>
                <span className="ml-2">${classData.price}</span>
              </div>

              {/* Enroll Button */}
              <div className="flex justify-center">
                <button
                  className="bg-yellow-400 text-white px-4 py-2 rounded w-full hover:bg-yellow-500 transition"
                  onClick={() => navigate(`/checkout/${classData._id}`)}
                >
                  Enroll
                </button>
              </div>
            </div>
          </div>

          {/* Class Additional Information */}
          <div className="p-8 bg-gray-50 dark:bg-gray-700 mt-8 rounded-b-lg">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Additional Information
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              This course will provide you with the skills necessary to excel in advanced photo editing using Adobe Lightroom CC. Whether you're an aspiring photographer or a seasoned professional, this course will help you take your skills to the next level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentClassDetails;
