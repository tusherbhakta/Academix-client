import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 border-t-2 border-t-slate-950 dark:border-t-slate-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-12">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Academix</h2>
          <p className="text-gray-400 mb-6 text-justify">
            Academix is a platform dedicated to helping students and teachers collaborate and grow together. We believe in providing opportunities for learning, growth, and sharing knowledge to shape a brighter future for all.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="hover:text-yellow-400">
              {/* Twitter SVG icon */}
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-yellow-400">
              {/* YouTube SVG icon */}
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-yellow-400">
              {/* Facebook SVG icon */}
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/classes" className="text-gray-400 hover:text-yellow-400">
                All Classes
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-yellow-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/register" className="text-gray-400 hover:text-yellow-400">
                Join Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter to receive the latest updates on new classes, teaching opportunities, and educational resources.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg border-2 border-yellow-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-white px-6 py-2 rounded-r-lg hover:bg-yellow-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 py-4">
        <div className="container mx-auto flex justify-between items-center px-6 lg:px-12">
          <p className="text-sm text-gray-400">© 2025 Academix. All rights reserved.</p>
          <nav className="flex space-x-4">
            <Link to="/privacypolicy" className="text-gray-400 hover:text-yellow-400">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-yellow-400">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
