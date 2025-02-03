import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-yellow-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Our Platform?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
            <p className="text-gray-600">Set your own schedule and teach from anywhere at your convenience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Global Audience</h3>
            <p className="text-gray-600">Reach students from around the world, expanding your impact and career.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Easy-to-Use Platform</h3>
            <p className="text-gray-600">Our platform is user-friendly, with easy access to manage your classes and students.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Attractive Compensation</h3>
            <p className="text-gray-600">Earn competitive rates for your expertise while helping students succeed.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
