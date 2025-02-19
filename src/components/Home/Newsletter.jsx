import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setMessage("Thank you for subscribing!");
    setEmail(""); // Reset email input after submission
  };

  return (
    <div className="w-full bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Stay updated with the latest news, courses, and special offers!
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            className="w-full sm:w-auto flex-1 p-3 text-black rounded-lg focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-lime-600 hover:bg-lime-500 px-6 py-3 rounded-lg font-bold transition-all"
          >
            Subscribe
          </button>
        </form>
        {message && <p className="mt-4 text-sm text-lime-400">{message}</p>}
      </div>
    </div>
  );
};

export default Newsletter;
