import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I75gJHo3WX4B3frK3dXXk6wyTmsSJV8P57dVRqj1uBJZqISARO6KaWH8LCUXAru2s4cT357e8mY3cIu7mb29tMK0022lrqpPv";

  const onToken = (token) => {
    console.log('Payment sent to stripe')
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful");
        console.log(response)
      })
      .catch((err) => {
        console.log("Payment error: ", JSON.parse(err));
        alert(
          "There was an issue wth yout payment. Please use provided Credit Card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      descriptio={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
