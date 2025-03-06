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
  var recurringConversion = "";

  switch (props.data.priceType) {
    case "yearly":
      var finalPrice = props.priceYear;
      var recurringConversion = "/yr";
      var recurringDescription = "Carbon Offset Subscription Yearly";
      break;
    case "monthly":
      var finalPrice = (props.priceYear / 12).toFixed(2);
      var recurringConversion = "/mo";
      var recurringDescription = "Carbon Offset Subscription Monthly";
      break;
  }

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
    e.preventDefault();

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
        return_url: `https://gogreencredits.com/offset-confirmation?f=${
          dataForm.firstName
        }&l=${dataForm.lastName}&a=${
          dataForm.billingAddress + " " + dataForm.billingSuite
        }&ac=${
          dataForm.billingCity +
          "," +
          " " +
          dataForm.billingState +
          " " +
          dataForm.billingZip
        }&c=${dataForm.companyName}&p=${formatPhoneNumber(dataForm.phone)}&e=${
          dataForm.email
        }&cost=${finalPrice}&energy=${props.energy.toFixed(
          2
        )}&pr=${finalPrice}&r=${recurringConversion}`,
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
      alert("An unexpected error occured.");
    }

    setIsLoading(false);
  };

  const bankSubmit = async (e) => {
    e.preventDefault();

    const bankCharge = await fetch("/.netlify/functions/bank-payment/", {
      //http://localhost:8888/.netlify/functions/bank-payment//
      //https://ugecredits.com/.netlify/functions/bank-payment///
      method: "POST",
      body: JSON.stringify({
        amount: Math.round(stripeCost),
        customer: props.customer,
        recurring: recurringDescription,
        token: bankToken,
        paymentIntent: props.paymentIntent.id,
      }),
    });
    const bankResult = await bankCharge.json().then(() => {
      window.location.href = `https://gogreencredits.com/offset-confirmation?f=${
        dataForm.firstName
      }&l=${dataForm.lastName}&a=${
        dataForm.billingAddress + " " + dataForm.billingSuite
      }&ac=${
        dataForm.billingCity +
        "," +
        " " +
        dataForm.billingState +
        " " +
        dataForm.billingZip
      }&c=${dataForm.companyName}&p=${formatPhoneNumber(dataForm.phone)}&e=${
        dataForm.email
      }&cost=${finalPrice}&energy=${props.energy.toFixed(
        2
      )}&pr=${finalPrice}&r=${recurringConversion}`;
    });
  };

  console.log(dataForm);

  return (
    <section class="shadow mt-16 bg-white border border-emerald-500 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
      <div class="flex justify-center">
        {" "}
        <svg
          class="h-8 text-emerald-700"
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
        <h2 class=" ml-2 text-2xl text-emerald-700">Payment Information</h2>
      </div>

      <div class="mt-6 mb-4 flex justify-center">
        {" "}
        {paymentType === "card" ? (
          <button class="pointer-events-none w-1/3 border-2 border-orange-600 rounded-md p-3 focus:outline-none text-orange-600 opacity-50">
            <svg
              class="h-12 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M0 8v-2c0-1.104.896-2 2-2h18c1.104 0 2 .896 2 2v2h-22zm24 7.5c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-2.156-.882l-.696-.696-2.116 2.169-.991-.94-.696.697 1.688 1.637 2.811-2.867zm-8.844.882c0 1.747.696 3.331 1.82 4.5h-12.82c-1.104 0-2-.896-2-2v-7h14.82c-1.124 1.169-1.82 2.753-1.82 4.5zm-5 .5h-5v1h5v-1zm3-2h-8v1h8v-1z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="font-medium text-xs">Card/Wallet</span>
          </button>
        ) : (
          <button
            onClick={() => {
              setPaymentType("card");
            }}
            class="w-1/3 border-2 border-blue-800 rounded-md p-3 focus:outline-none text-blue-800 hover:opacity-50"
          >
            <svg
              class="h-12 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M0 8v-2c0-1.104.896-2 2-2h18c1.104 0 2 .896 2 2v2h-22zm24 7.5c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-2.156-.882l-.696-.696-2.116 2.169-.991-.94-.696.697 1.688 1.637 2.811-2.867zm-8.844.882c0 1.747.696 3.331 1.82 4.5h-12.82c-1.104 0-2-.896-2-2v-7h14.82c-1.124 1.169-1.82 2.753-1.82 4.5zm-5 .5h-5v1h5v-1zm3-2h-8v1h8v-1z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="font-medium text-xs">Card/Wallet</span>
          </button>
        )}
        {paymentType === "bank" ? (
          <button class="ml-3 pointer-events-none w-1/3 border-2 border-orange-600 rounded-md p-3 focus:outline-none text-orange-600 opacity-70">
            <svg
              class="h-11 mb-1 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7 21h-4v-11h4v11zm7-11h-4v11h4v-11zm7 0h-4v11h4v-11zm2 12h-22v2h22v-2zm-23-13h24l-12-9-12 9z"
                clip-rule="evenodd"
              />
            </svg>{" "}
            <span class="font-medium text-xs">Bank Transfer</span>
          </button>
        ) : (
          <button
            onClick={() => {
              setPaymentType("bank");
            }}
            class="w-1/3 ml-3 border-2 border-blue-800 rounded-md p-3 focus:outline-none text-blue-800 hover:opacity-70"
          >
            <svg
              class="h-11 mb-1 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7 21h-4v-11h4v11zm7-11h-4v11h4v-11zm7 0h-4v11h4v-11zm2 12h-22v2h22v-2zm-23-13h24l-12-9-12 9z"
                clip-rule="evenodd"
              />
            </svg>{" "}
            <span class="font-medium text-xs">Bank Transfer</span>
          </button>
        )}
      </div>

      <div class="border-b border-emerald-400 pt-4 "></div>

      {paymentType === "card" ? (
        <div>
          <div class="card mt-8 relative">
            <form onSubmit={handleSubmit}>
              <fieldset className="FormGroup">
                <div className="">
                  <PaymentElement />
                </div>
              </fieldset>{" "}
              <div class="mt-8">
                <div class="terms space-y-7">
                  <div class="relative flex items-center">
                    <div class="flex items-center h-5">
                      <input
                        name="terms1"
                        type="checkbox"
                        required
                        class="focus:ring-indigo-500 h-5 w-5 border-gray-300 rounded"
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <p class="text-emerald-700 font-medium">
                        I understand that I am purchasing carbon credits to
                        offset my, or my company's carbon output.
                      </p>
                    </div>
                  </div>{" "}
                  <div class="relative flex items-center">
                    <div class="flex items-center h-5">
                      <input
                        name="terms2"
                        type="checkbox"
                        required
                        class="focus:ring-indigo-500 h-5 w-5 border-gray-300 rounded"
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <p class="text-emerald-700 font-medium">
                        I understand that the total displayed will be charged to
                        the payment method selected above{" "}
                        {props.data.priceType === "yearly" ? (
                          <span class="text-green-900 font-medium">
                            annually.
                          </span>
                        ) : (
                          <span class="text-green-900 font-medium">
                            monthly.
                          </span>
                        )}
                      </p>
                    </div>
                  </div>{" "}
                  <div class="relative flex items-center">
                    <div class="flex items-center h-5">
                      <input
                        name="terms3"
                        type="checkbox"
                        required
                        class="focus:ring-indigo-500 h-5 w-5 border-gray-300 rounded"
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <p class="text-emerald-700 font-medium">
                        Your personal data will be used to process your order,
                        support your experience throughout this website, and for
                        other purposes described in our{" "}
                        <a
                          href="http://localhost:8888/.netlify/functions/terms/english/"
                          target="blank"
                          class="text-blue font-medium underline hover:opacity-70"
                        >
                          privacy policy
                        </a>
                        . I have read and agree to the website{" "}
                        <a
                          href="http://localhost:8888/.netlify/functions/terms/english/"
                          target="blank"
                          class="text-blue font-medium underline hover:opacity-70"
                        >
                          terms and conditions
                        </a>
                      </p>
                    </div>
                  </div>{" "}
                </div>{" "}
                <div class="mt-28 sm:mt-14 ">
                  <button
                    class="block bg-emerald-800 border border-transparent rounded-md w-full mx-auto  py-3 flex items-center justify-center text-base leading-6 font-medium hover:opacity-70 focus:outline-none"
                    type="submit"
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
