// import React, { useEffect, useState } from 'react'
// import useAuth from '../../../hooks/useAuth';
// import useAxiosPublic from '../../../hooks/useAxiosPublic';

// const MyEnrolledClasses = () => {

// const {user}=useAuth();
// const [classes, setClasses]=useState(null);
// const axiosPublic=useAxiosPublic();


//   useEffect(()=>{
//     axiosPublic.get(`/api/my-enrolled-classes/${user?.email}`).then(res=>{
//       console.log(res.data)
//       setClasses(res.data)
//     })

//   },[user?.email,axiosPublic])
//   return (
//     <div>MyEnrolledClasses({classes.length})</div>
//   )
// }

// export default MyEnrolledClasses

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const MyEnrolledClasses = () => {
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      // Fetch enrolled classes
      axiosPublic.get(`/api/my-enrolled-classes/${user.email}`).then((res) => {
        setClasses(res.data);
      });
    }
  }, [user?.email, axiosPublic]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">My Enrolled Classes ({classes.length})</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((enrolledClass) => (
          <div
            key={enrolledClass._id}
            className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
          >
            <img
              src={enrolledClass.image}
              alt={enrolledClass.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold">{enrolledClass.title}</h2>
            <p className="text-sm text-gray-500">Posted by: {enrolledClass.name}</p>
            <button
              onClick={() => navigate(`/dashboard/myenroll-class/${enrolledClass._id}`)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Continue
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
