import useAuth from '../../hooks/useAuth';
import { FcGoogle } from "react-icons/fc";
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const SocialSignIn = () => {

    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const axiosPublic = useAxiosPublic();

    const handleGoogleSignIn = () => {

        try {
            googleSignIn().then((res) => {
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName,
                    role:'normal'
                }
                axiosPublic.post('/users', userInfo).then((res) => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: 'Logged in successfully with Google!',
                        }).then(() => {
                            navigate(from);
                        });
                    }
                })
            })


        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: err.message || 'Error logging in with Google. Please try again.',
            });
        }
    };
    return (
        <div className="">
            <button
                onClick={handleGoogleSignIn}
                type="button"
                className="flex items-center gap-2 border-2 border-yellow-400 px-4 py-2 rounded-xl"
            >
                <FcGoogle/>
            <p>Sign in with Google</p>
            </button>
        </div>
    )
}

export default SocialSignIn
