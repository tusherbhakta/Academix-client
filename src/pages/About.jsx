import { Helmet } from 'react-helmet';
import aboutImg from '../assets/slider2.jpg'

import React from 'react';

const About = () => {
  return (
    <div className="py-16 bg-gray-100">
        <Helmet>
            <title>Academix | About</title>
        </Helmet>
      <div className="max-w-6xl mx-auto px-4">
        {/* About Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            About Academix
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academix is an innovative educational platform that connects students and teachers, providing them with a seamless experience for learning and class management. Our platform offers a wide variety of tools to enhance both the teaching and learning process.
          </p>
        </section>

        {/* Mission Section */}
        <section className="flex flex-col lg:flex-row mt-4 gap-5 items-center mb-12">
          <div className="lg:w-1/2  mb-8 lg:mb-0">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600">
              Our mission is to empower educators and students by providing an efficient, user-friendly, and scalable platform to manage classes, track progress, and create meaningful learning experiences.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src={aboutImg}
              alt="Mission Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-white py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Academix is built on strong principles that drive us to continuously innovate and support our community of learners and educators.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h4>
              <p className="text-gray-600">
                We are committed to innovation, providing new tools and features to improve the learning experience.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h4>
              <p className="text-gray-600">
                We value honesty and transparency in all our processes, from user data protection to class management.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Community</h4>
              <p className="text-gray-600">
                We believe in fostering a strong community of learners and educators who support each other's growth.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h3>
          <p className="text-lg text-gray-600 mb-4">
            Have questions or want to learn more? Reach out to us and we'll be happy to assist you.
          </p>
          <a
            href="mailto:support@academix.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
