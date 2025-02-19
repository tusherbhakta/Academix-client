// import partnerImg1 from '../../assets/unnamed.jpg'
// import partnerImg2 from '../../assets/images.jpg'
// import partnerImg3 from '../../assets/download.jpg'

// import partnerImg4 from '../../assets/physic-wallah.jpg'


// const partners = [
//   {
//     logo: partnerImg1, // Replace with partner logo URL
//     name: "TechEd Solutions",
//     description: "Empowering students with cutting-edge educational tools and resources.",
//   },
//   {
//     logo: partnerImg2,
//     name: "SkillHub Academy",
//     description: "Offering premium skill development courses and certification programs.",
//   },
//   {
//     logo: partnerImg3,
//     name: "CareerBoost Inc.",
//     description: "Connecting students with top internship and job opportunities worldwide.",
//   },
//   {
//     logo: partnerImg4,
//     name: "EduCare Foundation",
//     description: "Supporting students with scholarships and academic counseling services.",
//   },
// ];

// const PartnersSection = () => {
//   return (
//     <section className="pb-12 pt-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Partners & Collaborators</h2>
//         <p className="text-gray-600 mb-8">
//           We’re proud to collaborate with industry leaders and organizations to bring the best opportunities to our students.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {partners.map((partner, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
//             >
//               <img
//                 src={partner.logo}
//                 alt={partner.name}
//                 className="h-20 w-32 object-contain mb-4"
//               />
//               <h3 className="text-xl font-semibold text-gray-800">{partner.name}</h3>
//               <p className="text-gray-600 text-sm mt-2">{partner.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PartnersSection;

import { useRef } from "react";
import partnerImg1 from "../../assets/unnamed.jpg";
import partnerImg2 from "../../assets/images.jpg";
import partnerImg3 from "../../assets/download.jpg";
import partnerImg4 from "../../assets/physic-wallah.jpg";

const partners = [
  {
    logo: partnerImg1,
    name: "TechEd Solutions",
    description: "Empowering students with cutting-edge educational tools and resources.",
  },
  {
    logo: partnerImg2,
    name: "SkillHub Academy",
    description: "Offering premium skill development courses and certification programs.",
  },
  {
    logo: partnerImg3,
    name: "CareerBoost Inc.",
    description: "Connecting students with top internship and job opportunities worldwide.",
  },
  {
    logo: partnerImg4,
    name: "EduCare Foundation",
    description: "Supporting students with scholarships and academic counseling services.",
  },
];

// Duplicate the array to create a seamless infinite loop
const extendedPartners = [...partners, ...partners];

const PartnersSection = () => {
  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-8 px-6">
        <h2 className="text-3xl font-bold text-gray-800">Our Partners & Collaborators</h2>
        <p className="text-gray-600 mt-2">
          We’re proud to collaborate with industry leaders and organizations to bring the best opportunities to our students.
        </p>
      </div>

      {/* Scrolling Partner Logos */}
      <div
        className="relative flex overflow-hidden w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={marqueeRef} className="flex min-w-full animate-scroll space-x-8">
          {extendedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 w-32 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{partner.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
