// import { Link } from 'react-router-dom';
// import teacherImg from '../../assets/teacher.jpg'
// const TeacherJoinSection = () => {
//   return (
//     <section className="py-16 to-yellow-400 ">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-6">
//         {/* Left Image Section */}
//         <div className="w-full flex justify-center md:justify-start mb-8 md:mb-0">
//           <img
//             src={teacherImg} // Replace with a relevant image URL
//             alt="Inspire and Educate"
//             className="md:w-full rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Right Content Section */}
//         <div className="w-full text-center md:text-left">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
//             Inspire and Educate with Us
//           </h2>
//           <p className="text-lg md:text-xl mb-6 leading-relaxed">
//             Join a community of passionate educators and make a real difference in students' lives. 
//             Share your knowledge, grow your teaching career, and shape the future.
//           </p>
//           <div>
//             <Link to='/teach-academix' className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg text-xl font-semibold shadow-md hover:bg-yellow-500 transition duration-300">
//               Become a Teacher
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeacherJoinSection;

import { Link } from "react-router-dom";
import teacherImg from "../../assets/teacher.jpg";
import { motion } from "framer-motion";

const TeacherJoinSection = () => {
  return (
    <section className="py-12 bg-yellow-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        {/* Left Image Section with Animation */}
        <motion.div
          className="w-full flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={teacherImg}
            alt="Inspire and Educate"
            className="md:w-full rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Content Section with Animation */}
        <motion.div
          className="w-full text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Inspire and Educate with Us
          </h2>
          <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed">
            Join a community of passionate educators and make a real difference in students' lives. 
            Share your knowledge, grow your teaching career, and shape the future.
          </p>
          <div>
            <Link
              to="/teach-academix"
              className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full text-xl font-semibold shadow-lg hover:bg-yellow-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Become a Teacher
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeacherJoinSection;

