import React, { useState } from "react";
import {
  CardElement,
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";

const PaymentForm = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentType, setPaymentType] = useState("card");
  const [bankToken, setBankToken] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const dataForm = props.customer;

  //Set bank Token//
  function bankChange(e) {
    setBankToken(e);
  }

  var finalPrice = "";

  const stripeCost = finalPrice * 100;

  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
  }

  const handleSubmit = async (e) => {
    console.log("handle submit");

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);
    //sendConfirmation();//

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        //{`/enroll?product=${product}&plan=${plan}`}//
        return_url: `https://cookie-test-3019u230129u31029u.netlify.app/thank-you/`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      alert(error.message);
    } else {
      console.log(error);
      alert("An unexpected error occured.");
    }

    setIsLoading(false);
  };

  console.log(dataForm);

  return (
    <section class="shadow mt-16 bg-white border border-sky-500 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
      <div class="flex justify-center">
        {" "}
        <svg
          class="h-8 text-sky-700"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M4.062 16.626c-.165-.5.038-.921.656-1.145l3.249-1.155-.134 1.028c-.077.589-.103 1.107-.089 1.573-.25.078-1.095.339-1.945.552-.871.218-1.538-.25-1.737-.853zm1.745 1.916c-.461.167-.612.48-.489.854.147.449.645.798 1.294.635.606-.151 1.408-.396 1.701-.487-.203-.505-.378-1.035-.479-1.659l-2.027.657zm.193-10.542h2.643l.128-1h-2.771v1zm16-6v9c0 1.104-.896 2-2 2h-1.989l.015.02c-.031.43-.105.906-.222 1.457-.451 2.144-1.637 5.122-.83 8.418-2.312.356-3.651.523-5.992 1.105-.273-4.062-2.266-4.943-1.804-8.47.542-4.137.844-6.461 1.196-9.255.11-.879.731-1.307 1.337-1.307.631 0 1.246.464 1.252 1.366.021 3.303.108 6.593.324 7.393.146.54 1.087.638 1.087-.512l-.002-2.216h5.128c.276 0 .5-.224.5-.5v-4.499h-5.568c-.157-1.461-1.27-2.531-2.721-2.531h-.001c-1.44 0-2.578 1.038-2.806 2.531h-4.904v4.5c0 .276.224.5.5.5h3.757l-.261 2h-3.996c-1.104 0-2-.896-2-2v-9c0-1.104.896-2 2-2h16c1.104 0 2 .896 2 2zm-2 .5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v.5h16v-.5zm-14 7.5h2.386l.129-1h-2.515v1zm12-3h-3v1h3v-1z"
            clip-rule="evenodd"
          />
        </svg>
        <h2 class=" ml-2 text-2xl text-sky-700">Payment Information</h2>
      </div>

      <div class="border-b border-sky-400 pt-4 "></div>

      {paymentType === "card" ? (
        <div>
          <div class="card mt-8 relative">
            <form>
              <fieldset className="FormGroup">
                <div className="">
                  <PaymentElement />
                </div>
              </fieldset>{" "}
              <div class="mt-8">
                <div class="mt-28 lg:mt-0 ">
                  <button
                    class="block bg-blue-500 border border-transparent rounded-full w-full mx-auto  py-3 flex items-center justify-center text-base leading-6 font-medium hover:opacity-70 focus:outline-none"
                    type="button"
                    onClick={() => handleSubmit()}
                    disabled={!stripe}
                  >
                    <span class="text-white">Order Now</span>
                  </button>
                  <img
                    class="mt-4 h-10 w-full mx-auto "
                    src="https://www.logo.wine/a/logo/Stripe_(company)/Stripe_(company)-Powered-by-Stripe-Outline-Logo.wine.svg"
                  ></img>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default PaymentForm;
