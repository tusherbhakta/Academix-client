import { Link } from 'react-router-dom';
import teacherImg from '../../assets/teacher.jpg'
const TeacherJoinSection = () => {
  return (
    <section className="py-16 to-yellow-400 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-6">
        {/* Left Image Section */}
        <div className="w-full flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src={teacherImg} // Replace with a relevant image URL
            alt="Inspire and Educate"
            className="md:w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Inspire and Educate with Us
          </h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            Join a community of passionate educators and make a real difference in students' lives. 
            Share your knowledge, grow your teaching career, and shape the future.
          </p>
          <div>
            <Link to='/teach-academix' className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg text-xl font-semibold shadow-md hover:bg-yellow-600 transition duration-300">
              Become a Teacher
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherJoinSection;
