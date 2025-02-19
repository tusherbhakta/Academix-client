import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Users, Target, ShieldCheck, Mail } from "lucide-react";
import aboutImg from "../assets/slider2.jpg";

const About = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <Helmet>
        <title>Academix | About</title>
      </Helmet>
      <div className="max-w-6xl mx-auto px-4">
        {/* About Section */}
        <motion.section
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-yellow-400 dark:text-yellow-400">Academix</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Academix is a cutting-edge educational platform that bridges students and educators, providing an interactive and seamless learning experience.
          </p>
        </motion.section>

        {/* Mission Section */}
        <section className="flex flex-col lg:flex-row gap-10 items-center mb-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Target className="text-yellow-500 dark:text-yellow-400 mr-2" size={30} />
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Empower educators and students with an intuitive, scalable platform to manage classes, track progress, and create impactful learning experiences.
            </p>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={aboutImg}
              alt="Mission Image"
              className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </section>

        {/* Core Values Section */}
        <motion.section
          className="py-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Our foundation is built on principles that inspire innovation, trust, and collaboration in education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Card 1 */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl backdrop-blur-md bg-opacity-80 dark:bg-opacity-60 transform hover:scale-105 transition-transform duration-500">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <Users className="text-green-500 dark:text-green-400 mr-2" size={28} />
                Community
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Building a supportive learning community that thrives on shared knowledge and collaboration.
              </p>
            </div>
            {/* Value Card 2 */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl backdrop-blur-md bg-opacity-80 dark:bg-opacity-60 transform hover:scale-105 transition-transform duration-500">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <ShieldCheck className="text-yellow-500 dark:text-yellow-400 mr-2" size={28} />
                Integrity
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Upholding honesty, transparency, and ethical values in education and user security.
              </p>
            </div>
            {/* Value Card 3 */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl backdrop-blur-md bg-opacity-80 dark:bg-opacity-60 transform hover:scale-105 transition-transform duration-500">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <Target className="text-blue-500 dark:text-blue-400 mr-2" size={28} />
                Innovation
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Constantly evolving with the latest technology to improve the learning experience.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="text-center py-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white flex items-center justify-center">
            <Mail className="text-red-500 dark:text-red-400 mr-2" size={30} />
            Contact Us
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Have questions? Reach out to us, and let's build the future of education together.
          </p>
          <a
            href="mailto:support@academix.com"
            className="inline-block bg-yellow-400 text-gray-200 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
