import { useState } from "react";

const TermsOfService = () => {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General Terms" },
    { id: "privacy", label: "Privacy Policy" },
    { id: "user", label: "User Responsibilities" },
    { id: "payments", label: "Payments & Refunds" }
  ];

  const content = {
    general: `Welcome to Academix! By accessing or using our platform, you agree to abide by our terms and conditions. 
    These terms govern your use of our services, including any updates or modifications made to the platform. 
    You are responsible for complying with all applicable laws and regulations while using Academix. If you do not agree with these terms, 
    please refrain from using our services. Our team reserves the right to update these terms at any time without prior notice.`,
    privacy: `Your privacy is important to us. We collect and use personal information only as described in our Privacy Policy. 
    We implement security measures to protect your data, but we cannot guarantee absolute security. 
    By using Academix, you consent to our data collection and usage policies. If you have concerns about how we handle your information, 
    please review our Privacy Policy or contact us for more details.`,
    user: `As a user of Academix, you must adhere to our guidelines and community standards. 
    You are prohibited from engaging in illegal activities, harassment, or sharing inappropriate content. 
    Any violations may result in account suspension or termination. 
    Users must ensure that their credentials are kept secure, and they should report any suspicious activity immediately.`,
    payments: `Our platform may offer paid services or subscriptions. 
    Payment transactions are processed securely, and we accept multiple payment methods. 
    Refund requests are subject to our refund policy, which outlines the conditions under which refunds are granted. 
    If you experience billing issues, please contact our support team for assistance.`
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-yellow-500 dark:text-yellow-400 mb-4">Terms of Service</h1>
        
        {/* Tab Navigation */}
        <div className="flex space-x-4 border-b pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-4 rounded-t-lg font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300 ${
                activeTab === tab.id
                  ? "border-b-4 border-yellow-500 dark:border-yellow-400 text-yellow-600 dark:text-yellow-300"
                  : "hover:text-yellow-500 dark:hover:text-yellow-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-4 text-gray-700 dark:text-gray-200 text-lg">
          {content[activeTab]}
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

// import { useState } from "react";

// const TermsOfService = () => {
//   const [activeTab, setActiveTab] = useState("general");

//   const tabs = [
//     { id: "general", label: "General Terms" },
//     { id: "privacy", label: "Privacy Policy" },
//     { id: "user", label: "User Responsibilities" },
//     { id: "payments", label: "Payments & Refunds" }
//   ];

//   const content = {
//     general: `Welcome to Academix! By accessing or using our platform, you agree to abide by our terms and conditions. 
//     These terms govern your use of our services, including any updates or modifications made to the platform. 
//     You are responsible for complying with all applicable laws and regulations while using Academix. If you do not agree with these terms, 
//     please refrain from using our services. Our team reserves the right to update these terms at any time without prior notice.`,
//     privacy: `Your privacy is important to us. We collect and use personal information only as described in our Privacy Policy. 
//     We implement security measures to protect your data, but we cannot guarantee absolute security. 
//     By using Academix, you consent to our data collection and usage policies. If you have concerns about how we handle your information, 
//     please review our Privacy Policy or contact us for more details.`,
//     user: `As a user of Academix, you must adhere to our guidelines and community standards. 
//     You are prohibited from engaging in illegal activities, harassment, or sharing inappropriate content. 
//     Any violations may result in account suspension or termination. 
//     Users must ensure that their credentials are kept secure, and they should report any suspicious activity immediately.`,
//     payments: `Our platform may offer paid services or subscriptions. 
//     Payment transactions are processed securely, and we accept multiple payment methods. 
//     Refund requests are subject to our refund policy, which outlines the conditions under which refunds are granted. 
//     If you experience billing issues, please contact our support team for assistance.`
//   };

//   return (
//     <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center p-6">
//       <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
//         <h1 className="text-3xl font-bold text-yellow-500 dark:text-yellow-400 mb-4 text-center">Terms of Service</h1>
        
//         {/* Tab Navigation */}
//         <div className="flex justify-center space-x-4 border-b pb-2">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`py-2 px-4 rounded-t-lg font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300 ${
//                 activeTab === tab.id
//                   ? "border-b-4 border-yellow-500 dark:border-yellow-400 text-yellow-600 dark:text-yellow-300"
//                   : "hover:text-yellow-500 dark:hover:text-yellow-400"
//               }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {/* Content */}
//         <div className="mt-4 text-gray-700 dark:text-gray-200 text-lg text-center">
//           {content[activeTab]}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TermsOfService;



