import { Link } from "react-router-dom";
import teacherImg from "../../assets/teacher.jpg";
import { motion } from "framer-motion";

const TeacherJoinSection = () => {
  return (
    <section className="py-12 bg-yellow-50 dark:bg-gray-900">
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Inspire and Educate with Us
          </h2>
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-300 mb-8 leading-relaxed">
            Join a community of passionate educators and make a real difference in students' lives. 
            Share your knowledge, grow your teaching career, and shape the future.
          </p>
          <div>
            <Link
              to="/teach-academix"
              className="bg-yellow-500 text-gray-900 dark:text-gray-900 px-6 py-3 rounded-full text-xl font-semibold shadow-lg hover:bg-yellow-600 hover:text-white dark:hover:bg-yellow-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
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
