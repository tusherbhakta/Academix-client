// const SuccessStories = () => {
//     const testimonials = [
//       {
//         name: "John Doe",
//         course: "Full-Stack Web Development",
//         feedback: "Academix helped me land my first internship with hands-on projects!",
//         img: "https://images.ctfassets.net/xjankvru4bwy/5PghwxKTVhKOIb32tRJenX/baf356e203661d28e79ad049fffcc9a4/Kashimani_Simasiku-ALA_student_square.jpg"
//       },
//       {
//         name: "Sarah Khan",
//         course: "Data Science & AI",
//         feedback: "The interactive learning style made complex topics easy to grasp.",
//         img: "https://www.suny.edu/media/suny/content-assets/images/militaryvets/female-adult-student-square.jpg",
//       },
//       {
//         name: "Alex Brown",
//         course: "Graphic Design",
//         feedback: "I built a strong portfolio that helped me secure freelance clients!",
//         img: "https://images.ctfassets.net/xjankvru4bwy/6Xy6WuJ9DUvRrYIRtqQIUS/5684ed8b974d7dcc5244eb6c9948e5dd/Abdelkarim_Ben_Fraj-ALA_student_square.jpg",
//       },
//     ];
  
//     return (
//       <div className="bg-gray-100 py-16 px-6">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Student Success Stories</h2>
//           <p className="text-lg text-gray-600 mb-8">
//             Hear from our students who have transformed their careers with Academix.
//           </p>
//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((student, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//                 <img src={student.img} alt={student.name} className="w-24 h-24 rounded-full mx-auto mb-4"/>
//                 <h3 className="text-xl font-semibold">{student.name}</h3>
//                 <p className="text-sm text-gray-500">{student.course}</p>
//                 <p className="mt-3 text-gray-700 italic">"{student.feedback}"</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default SuccessStories;
  
// import { motion } from "framer-motion";

// const SuccessStories = () => {
//   const testimonials = [
//     {
//       name: "John Doe",
//       course: "Full-Stack Web Development",
//       feedback: "Academix helped me land my first internship with hands-on projects!",
//       img: "https://images.ctfassets.net/xjankvru4bwy/5PghwxKTVhKOIb32tRJenX/baf356e203661d28e79ad049fffcc9a4/Kashimani_Simasiku-ALA_student_square.jpg"
//     },
//     {
//       name: "Sarah Khan",
//       course: "Data Science & AI",
//       feedback: "The interactive learning style made complex topics easy to grasp.",
//       img: "https://www.suny.edu/media/suny/content-assets/images/militaryvets/female-adult-student-square.jpg",
//     },
//     {
//       name: "Alex Brown",
//       course: "Graphic Design",
//       feedback: "I built a strong portfolio that helped me secure freelance clients!",
//       img: "https://images.ctfassets.net/xjankvru4bwy/6Xy6WuJ9DUvRrYIRtqQIUS/5684ed8b974d7dcc5244eb6c9948e5dd/Abdelkarim_Ben_Fraj-ALA_student_square.jpg",
//     },
//   ];

//   return (
//     <section className="relative bg-gray-50 py-16 px-6">
//       {/* Section Heading */}
//       <div className="max-w-5xl mx-auto text-center mb-12">
//         <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
//         <p className="text-lg text-gray-600">
//           Hear from our students who have transformed their careers with Academix.
//         </p>
//       </div>

//       {/* Timeline Wrapper (Ensures Line Doesn't Overflow) */}
//       <div className="relative max-w-4xl mx-auto">
//         {/* Vertical Line (Now Limited to This Section) */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-yellow-500 hidden md:block"></div>

//         {/* Cards */}
//         <div className="relative flex flex-col space-y-12">
//           {testimonials.map((student, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
//               viewport={{ once: true }}
//               className={`relative flex flex-col md:flex-row items-center md:items-start w-full md:w-[48%] p-6 bg-white shadow-lg rounded-lg ${
//                 index % 2 === 0 ? "ml-auto md:pl-10" : "mr-auto md:pr-10"
//               }`}
//             >
//               {/* Image Positioned Correctly */}
//               <div className="absolute top-1/2 transform -translate-y-1/2 md:top-auto md:translate-y-0 md:relative md:mr-4">
//                 <img
//                   src={student.img}
//                   alt={student.name}
//                   className="w-16 h-16 rounded-full border-4 border-yellow-500"
//                 />
//               </div>

//               {/* Content */}
//               <div className="text-center md:text-left">
//                 <h3 className="text-xl font-semibold">{student.name}</h3>
//                 <p className="text-sm text-gray-500">{student.course}</p>
//                 <p className="mt-3 text-gray-700 italic">"{student.feedback}"</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SuccessStories;

import { motion } from "framer-motion";

const SuccessStories = () => {
  const testimonials = [
    {
      name: "John Doe",
      course: "Full-Stack Web Development",
      feedback: "Academix helped me land my first internship with hands-on projects!",
      img: "https://images.ctfassets.net/xjankvru4bwy/5PghwxKTVhKOIb32tRJenX/baf356e203661d28e79ad049fffcc9a4/Kashimani_Simasiku-ALA_student_square.jpg"
    },
    {
      name: "Sarah Khan",
      course: "Data Science & AI",
      feedback: "The interactive learning style made complex topics easy to grasp.",
      img: "https://www.suny.edu/media/suny/content-assets/images/militaryvets/female-adult-student-square.jpg",
    },
    {
      name: "Alex Brown",
      course: "Graphic Design",
      feedback: "I built a strong portfolio that helped me secure freelance clients!",
      img: "https://images.ctfassets.net/xjankvru4bwy/6Xy6WuJ9DUvRrYIRtqQIUS/5684ed8b974d7dcc5244eb6c9948e5dd/Abdelkarim_Ben_Fraj-ALA_student_square.jpg",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-16 px-6">
      {/* Section Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
        <p className="text-lg text-gray-600">
          Hear from our students who have transformed their careers with Academix.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-yellow-400  md:block"></div>

        {/* Cards */}
        <div className="relative flex flex-col space-y-16">
          {testimonials.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative flex items-center w-full md:w-[90%] mx-auto"
            >
              {/* Alternating Images and Cards */}
              {index % 2 === 0 ? (
                <>
                  {/* Left Side - Image */}
                  <div className="w-1/2 flex justify-end pr-8">
                    <img
                      src={student.img}
                      alt={student.name}
                      className="w-28 h-28 object-cover rounded-full border-4 border-yellow-400 shadow-lg"
                    />
                  </div>
                  {/* Right Side - Card */}
                  <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 ml-8">
                    <h3 className="text-xl font-semibold">{student.name}</h3>
                    <p className="text-sm text-gray-500">{student.course}</p>
                    <p className="mt-3 text-gray-700 italic">"{student.feedback}"</p>
                  </div>
                </>
              ) : (
                <>
                  {/* Left Side - Card */}
                  <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 mr-8">
                    <h3 className="text-xl font-semibold">{student.name}</h3>
                    <p className="text-sm text-gray-500">{student.course}</p>
                    <p className="mt-3 text-gray-700 italic">"{student.feedback}"</p>
                  </div>
                  {/* Right Side - Image */}
                  <div className="w-1/2 flex justify-start pl-8">
                    <img
                      src={student.img}
                      alt={student.name}
                      className="w-28 h-28 object-cover rounded-full border-4 border-yellow-400 shadow-lg"
                    />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
