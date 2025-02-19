import loginImg from '../assets/login.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import SocialSignIn from '../components/shared/SocialSignIn';

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);
    setError('');
    try {
      await loginUser(email, password);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Logged in successfully!',
      }).then(() => {
        navigate(from);
      });
    } catch (err) {
      setError(err.message || 'Error logging in.');
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err.message || 'Error logging in. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleNewAccountClick = () => navigate('/register');

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 bg-white dark:bg-gray-800 dark:text-gray-200 shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="hidden md:block">
          <img src={loginImg} alt="login" className="w-full h-full object-cover" />
        </div>

        {/* Form Section */}
        <div className="p-8">
          <Helmet>
            <title>Academix | Login</title>
          </Helmet>
          <h2 className="text-3xl font-bold text-center my-4">Login</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-slate-300 dark:border-gray-600 rounded-lg py-3 px-5 outline-none bg-transparent dark:bg-gray-700 dark:text-white"
                autoComplete="on"
                required
              />
            </div>

            <div className="flex flex-col w-full gap-2">
              <label htmlFor="password" className="text-gray-700 dark:text-gray-300">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border border-slate-300 dark:border-gray-600 rounded-lg py-3 px-5 outline-none bg-transparent dark:bg-gray-700 dark:text-white"
                autoComplete="on"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`block text-center py-3 px-4 text-white font-semibold w-full rounded-lg my-4 ${
                  loading ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed' : 'bg-yellow-400 dark:bg-yellow-500'
                }`}
              >
                {loading ? 'Loading...' : 'Login now'}
              </button>
            </div>
          </form>

          <p className="text-gray-600 dark:text-gray-300 text-center my-4">
            New Here?{' '}
            <span
              onClick={handleNewAccountClick}
              className="font-semibold cursor-pointer text-blue-500 dark:text-yellow-400"
            >
              Create New Account
            </span>
          </p>

          <div className="flex items-center flex-col justify-center gap-4">
            <p>Or sign in with</p>
            <SocialSignIn />
            <div>
              <button
                onClick={() => navigate('/forgot-password')}
                className="text-blue-500 dark:text-yellow-400 font-semibold cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
