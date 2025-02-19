import React from "react";
import { Clock, Globe, MonitorSmartphone, DollarSign } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Clock size={40} className="text-lime-500" />,
      title: "Flexible Schedule",
      description: "Set your own schedule and teach from anywhere at your convenience.",
    },
    {
      icon: <Globe size={40} className="text-blue-500" />,
      title: "Global Audience",
      description: "Reach students from around the world, expanding your impact and career.",
    },
    {
      icon: <MonitorSmartphone size={40} className="text-purple-500" />,
      title: "Easy-to-Use Platform",
      description: "User-friendly interface with seamless class and student management.",
    },
    {
      icon: <DollarSign size={40} className="text-yellow-500" />,
      title: "Attractive Compensation",
      description: "Earn competitive rates for your expertise while helping students succeed.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
          Why Choose Academix?
        </h2>
        <p className="text-lg text-gray-800 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Empower your learning journey with flexible schedules, a global audience, and seamless technology.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center border border-yellow-300 dark:border-yellow-500"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-800 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
