import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import academicBanner1 from "../../assets/slider1.jpg"; // Replace with your marathon-related images
import academicBanner2 from "../../assets/slider2.jpg";
import academicBanner3 from "../../assets/slider3.jpg";
import { Link } from "react-router-dom";

const CarouselComp = () => {
  const banners = [
    {
      src: academicBanner1,
      alt: "Expand Your Horizons",
      title: "Unlock Your Full Academic Potential",
      description:
        "Access a world of learning resources, tools, and guidance to take your academic journey to the next level.",
      linkPrimary: { path: "/classes", text: "Explore Classes" },
      linkSecondary: { path: "/teach-academix", text: "Become a Teacher" },
    },
    {
      src: academicBanner2,
      alt: "Stay Ahead in Your Field",
      title: "Learn, Innovate, and Excel",
      description:
        "Stay updated with the latest in your field through workshops, seminars, and interactive classes.",
        linkPrimary: { path: "/classes", text: "Explore Classes" },
        linkSecondary: { path: "/teach-academix", text: "Become a Teacher" },
    },
    {
      src: academicBanner3,
      alt: "Connect and Thrive",
      title: "Be a Part of the Campus Community",
      description:
        "Participate in clubs, events, and student-led initiatives. Build lasting connections and unforgettable memories.",
        linkPrimary: { path: "/classes", text: "Explore Classes" },
        linkSecondary: { path: "/teach-academix", text: "Become a Teacher" },
    },
  ];
  

  return (
    <div className="">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        emulateTouch
        interval={3000}
        stopOnHover
        className="max-w-full mx-auto"
      >
        {banners.map((banner, index) => (
          <div key={index} className="relative">
            {/* Image Section with Overlay */}
            <div
              className="h-[500px] md:h-[600px] lg:h-[700px] w-full relative"
              style={{
                backgroundImage: `url(${banner.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              {/* Centered Text and Buttons */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
                  {banner.title}
                </h1>
                <p className="max-w-3xl text-lg md:text-xl font-semibold mb-8">
                  {banner.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={banner.linkPrimary.path}
                    className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-bold rounded shadow-lg transition-all"
                  >
                    {banner.linkPrimary.text}
                  </Link>
                  <Link
                    to={banner.linkSecondary.path}
                    className="px-6 py-3 bg-gray-600 hover:bg-gray-800 text-white font-bold rounded shadow-lg transition-all"
                  >
                    {banner.linkSecondary.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComp;

