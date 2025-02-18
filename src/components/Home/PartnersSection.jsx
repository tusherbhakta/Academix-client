import partnerImg1 from '../../assets/unnamed.jpg'
import partnerImg2 from '../../assets/images.jpg'
import partnerImg3 from '../../assets/download.jpg'

import partnerImg4 from '../../assets/physic-wallah.jpg'


const partners = [
  {
    logo: partnerImg1, // Replace with partner logo URL
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

const PartnersSection = () => {
  return (
    <section className="pb-12 pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Partners & Collaborators</h2>
        <p className="text-gray-600 mb-8">
          We’re proud to collaborate with industry leaders and organizations to bring the best opportunities to our students.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 w-32 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{partner.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
