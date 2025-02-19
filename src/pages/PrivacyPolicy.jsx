import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const PrivacyPolicy = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    {
      title: "Introduction",
      content:
        "At Academix, we prioritize your privacy and ensure transparency in how we handle your data.",
    },
    {
      title: "Information Collection",
      content:
        "We collect user data such as name, email, and activity logs to improve user experience.",
    },
    {
      title: "How We Use Data",
      content:
        "Your data is used to personalize content, enhance security, and improve platform performance.",
    },
    {
      title: "Data Sharing & Security",
      content:
        "We do not sell your data. All stored information is secured using encryption techniques.",
    },
    {
      title: "User Rights & Choices",
      content:
        "You have the right to access, modify, or delete your data by contacting our support.",
    },
    {
      title: "Cookies & Tracking",
      content:
        "We use cookies to improve functionality. You can manage cookie settings in your browser.",
    },
    {
      title: "Changes to Policy",
      content:
        "We may update our Privacy Policy periodically. Changes will be communicated via email.",
    },
    {
      title: "Contact Info",
      content: "For privacy-related inquiries, contact us at privacy@academix.com.",
    },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-50 via-gray to-gray-100 text-gray-700 p-8 dark:from-gray-900 dark:via-black dark:to-gray-900 dark:text-gray-300">
      <div className="w-full max-w-4xl bg-gray/5 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-gray/10 dark:bg-gray-800/10 dark:border-gray-600">
        <h1 className="text-4xl font-extrabold text-center text-yellow-400 mb-8 uppercase tracking-wide dark:text-yellow-300">
          Privacy Policy
        </h1>
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="p-6 border border-gray-300 rounded-lg bg-gray/10 backdrop-blur-lg transition-transform transform hover:scale-105 hover:shadow-xl dark:bg-gray-700/10 dark:border-gray-500"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center text-xl font-semibold text-yellow-400 hover:text-yellow-400 transition-colors dark:text-yellow-300 dark:hover:text-yellow-200"
              >
                {section.title}
                {openSections[index] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
              {openSections[index] && (
                <p className="mt-4 text-black-300 text-lg leading-relaxed dark:text-gray-300">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
