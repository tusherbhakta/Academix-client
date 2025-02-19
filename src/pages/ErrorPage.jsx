import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-2">Oops! The page you are looking for does not exist.</p>
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="Error Illustration"
        className="w-80 mt-6"
      />
      <Link to="/" className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition">
        Go to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
