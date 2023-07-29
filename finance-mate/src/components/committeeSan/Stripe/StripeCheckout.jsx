import React,{useState,useEffect} from 'react'
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import {Elements, useStripe,useElements} from '@stripe/react-stripe-js';
import {CardElement} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51NU5vjGCLtTMWEv9kIf39oFsZe8DbDdKLPRY1gPanYNdHt7lbEnXAMHLngLWiXzJtltIBlxThpMvMPZlh5eDynIT002L4K7MzI');

const StripeCheckout=({setPaymentMethodId})=> {
  const [client_secret,setClientSecret]=useState();

    useEffect(()=>{
      async function  fetchSetUpIntent(){
        const response = await axios.post("http://localhost:8080/api/stripe/setup_intent",{},{withCredentials:true})
        setClientSecret(response.data.setupIntent)
        
        console.log("setupIntent",response.data.setupIntent)
        localStorage.setItem("setupIntent",JSON.stringify(response.data.setupIntent))
      }
      fetchSetUpIntent();
    },[])

    const options = {
      // passing the client secret obtained from the server
      clientSecret: client_secret
    };

    return (
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm clientSecret={client_secret} setPaymentMethodId={setPaymentMethodId}/>
      </Elements>
    )
}

function CheckoutForm({clientSecret, setPaymentMethodId}) {
  const [isPaymentLoading, setPaymentLoading] = useState(false);
  const stripe=useStripe();
  const elements = useElements();

  
  const handlePay = async () => {
    setPaymentLoading(true);
    try {
      const cardElement = elements.getElement(CardElement);
      const { setupIntent, error } = await stripe.confirmCardSetup(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: "Shoaib Ashfaq",
          },
        },
      });

      if (error) {
        console.error(error);
        setPaymentLoading(false);
      } else {
        console.log('Payment method added:', setupIntent.payment_method);
        setPaymentLoading(false);
        setPaymentMethodId(setupIntent.payment_method);
        alert("Sucess!!!!!")
      }

      const response = await axios.post("http://localhost:8080/api/stripe/updatePaymentStatus", { hasValidPayment: true }, { withCredentials: true });
      console.log("Update payment status response:", response.data);
    } catch (error) {
      console.error(error);
      setPaymentLoading(false);
    }
  }

  return (
    <div style={{ padding: "3rem" }}>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <form style={{ display: "block", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <CardElement className="card" options={{style: {base: { backgroundColor: "white" }}}}/>
            <button className="pay-button" disabled={isPaymentLoading} onClick={handlePay}>
              {isPaymentLoading ? "Loading..." : "Attach Payment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StripeCheckout;
