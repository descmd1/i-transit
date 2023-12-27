import React, { useState } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import './PaymentPage.css';

function PaymentPage() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe has not loaded yet
      return;
    }

    // Get the card details from the card element
    const cardElement = elements.getElement(CardElement);

    // Create a payment method using the card element
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
    } else {
      // Payment was successful
      console.log(paymentMethod);
      setPaymentComplete(true);
    }
  };

  return (
    <div className="payment-page">
      <h2>Make Payment</h2>
      {paymentComplete ? (
        <div className="payment-successful">
          <h3>Payment Successful!</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="card-element">Credit or debit card</label>
          <div id="card-element">
            <Elements>
            <CardElement />
            </Elements>
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit" disabled={!stripe}>
            Pay
          </button>
        </form>
      )}
    </div>
  );
}

export default PaymentPage;