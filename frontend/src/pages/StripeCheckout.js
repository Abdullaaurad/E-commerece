import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

import CheckoutForm from "./CheckoutForm";
import "../Stripe.css";
import { selectCurrentOrder } from "../features/order/orderSlice";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51Pto1LRwTr27X0wVLiEIqSxPphU521phgFiEYGXUnp2cI9CkfiLrnbXZ4d4kbX9vPuKle2Lwlgry2v1U12tU0pD400nd2OU4fL"
);

export default function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");
  const currentOrder = useSelector(selectCurrentOrder);
  const [error, setError] = useState("");

  useEffect(() => {
    if (currentOrder) {
      // Create PaymentIntent as soon as the page loads
      fetch("/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          totalAmount: currentOrder.totalAmount,
          orderId: currentOrder.id,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          if (data.clientSecret) {
            setClientSecret(data.clientSecret);
          } else {
            throw new Error("Client secret not returned");
          }
        })
        .catch((err) => {
          console.error("Error creating payment intent:", err);
          setError("Failed to create payment intent.");
        });
    } else {
      setError("No order found.");
    }
  }, [currentOrder]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="Stripe">
      {error && <div className="error-message">{error}</div>}
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
      {!clientSecret && !error && <div>Loading...</div>}
    </div>
  );
}
