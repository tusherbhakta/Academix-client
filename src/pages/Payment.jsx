// import SectionTitle from '../../components/ui/SectiontTitle';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';

// Load Stripe with the publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
  const axiosSecure = useAxiosSecure();
  const {id}=useParams();
  const [clientSecret, setClientSecret] = useState(null);
  const [classData, setClassData]=useState(null);



  useEffect(()=>{

    axiosSecure.get(`/api/classes/${id}`).then((res)=>setClassData(res.data)).catch((err)=>console.error(err));
      
  },[axiosSecure, id]);

  console.log(classData)


//   const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
const totalPrice=classData?.price;

  useEffect(() => {
    if (totalPrice > 0) {
      const roundedPrice = Math.round(totalPrice * 100); // Convert to cents and round to nearest integer
      axiosSecure.post("/create-payment-intent", { price: roundedPrice })
        .then((res) => setClientSecret(res.data.clientSecret))
        .catch(() => console.error("Failed to fetch payment intent"));
    }
  }, [axiosSecure, totalPrice]);

  const appearance = { theme: 'stripe' };
  const options = { clientSecret, appearance };

  return (
    <div>
      <h2 className='text-center text-2xl'>Payment</h2>
      <p className='text-center text-lg'>Total: ${totalPrice}</p>
      <p className='text-center text-lg'>Class: {classData?.title}</p>
      <p className='text-center text-lg'>classId: {classData?._id}</p>
      <div className="max-w-3xl mx-auto">
        {clientSecret ? (
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm price={totalPrice} classId={classData?._id}  />
          </Elements>
        ) : (
          <p>Loading payment details...</p>
        )}
      </div>
    </div>
  );
};

export default Payment;