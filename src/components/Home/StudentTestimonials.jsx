import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const FeedbackCarousel = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axiosSecure('/api/feedback');
        const data = response.data;
        setFeedbacks(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching feedback:', error);
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  useEffect(() => {
    if (feedbacks.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
      }, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [feedbacks]);

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What Students Are Saying</h2>
        {loading ? (
          <p>Loading feedback...</p>
        ) : feedbacks.length === 0 ? (
          <p>No feedback available at the moment.</p>
        ) : (
          <div className="relative h-96 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {feedbacks.length > 0 && (
                <motion.div
                  key={feedbacks[currentIndex]._id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="absolute bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
                >
                  <img
                    src={feedbacks[currentIndex].classImage || 'https://via.placeholder.com/400'}
                    alt={feedbacks[currentIndex].classTitle || 'Class'}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-gray-600 mb-4">"{feedbacks[currentIndex].description}"</p>
                  <div className="flex items-center justify-between flex-col">
                    <h4 className="font-bold capitalize">Mentor: {feedbacks[currentIndex].classTeacher || 'Anonymous'}</h4>
                    <p className="text-gray-600">{feedbacks[currentIndex].classTitle}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeedbackCarousel;
