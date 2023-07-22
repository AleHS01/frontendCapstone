import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setErrorMessage('');

    // Create a payment method using the CardElement
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setLoading(false);
      setErrorMessage(error.message);
    } else {
      // Payment method created successfully, send it to backend for processing
      const { data } = await axios.post('https://localhost:8080/api/stripe/process-payment', {
        paymentMethodId: paymentMethod.id,
        amount: 1000, // Replace with the actual amount to charge (in cents)
        currency: 'usd', // Replace with the desired currency
      });

      if (data.success) {
        setPaymentSuccess(true);
      } else {
        setLoading(false);
        setErrorMessage('Payment failed. Please try again.');
      }
    }
  };

  return (
    <div>
      {paymentSuccess ? (
        <div>
          <h2>Payment Successful!</h2>
          <p>Thank you for your contribution.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit" disabled={!stripe || loading}>
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
      )}
    </div>
  );
};

export default PaymentForm;
