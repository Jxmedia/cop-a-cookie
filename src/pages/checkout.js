import React, { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/20/solid";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../components/PaymentForm";

const PUBLIC_KEY =
  "pk_test_51QzzSCIxza1i2ViczmxG91CQ766wbXyvTKtYqloEhtMVlbcmh2ggrgbzACONwIxustBRlOBzKio4wDxBagdiUGxj005UJWlYmv";

const stripePromise = loadStripe(PUBLIC_KEY);

const products = [
  {
    id: 1,
    title: "Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Black",
    size: "Large",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/checkout-page-02-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 1,
    title: "Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Black",
    size: "Large",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/checkout-page-02-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
];
const deliveryMethods = [
  {
    id: 1,
    title: "Standard",
    turnaround: "4–10 business days",
    price: "$5.00",
  },
  { id: 2, title: "Express", turnaround: "2–5 business days", price: "$16.00" },
];
const paymentMethods = [
  { id: "credit-card", title: "Credit card" },
  { id: "paypal", title: "PayPal" },
  { id: "etransfer", title: "eTransfer" },
];

export default function Example(props) {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0]
  );

  const [isBannerOpened, setisBannerOpened] = useState(true);

  const [shippingCheck, setShippingCheck] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [paymentIntent, setPaymentIntent] = useState("");
  const [stripeLoading, setStripeLoading] = useState(false);
  const [foundCookieOrder, setfoundCookieOrder] = useState(0);

  console.log(foundCookieOrder.cookieOrder);

  const sumObjectValues = (obj) => {
    return Object.values(obj).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };

  var finalPrice = 1;

  switch (foundCookieOrder === 0) {
    case true:
      var finalPrice = 0;
      break;
    case false:
      var finalPrice = Object.values(foundCookieOrder.cookieOrder).reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );

      break;
  }

  const stripeCost = finalPrice * 5 * 100;

  useEffect(() => {
    const cookies = window.localStorage.getItem("COOKIE_ORDER");
    if (cookies !== null) {
      console.log("inside function");
      const cookieOrder = JSON.parse(cookies);
      setfoundCookieOrder(cookieOrder);
    } else window.location.href = `/`;
  }, []);

  const getPaymentIntent = async () => {
    // createEnrollmentEntry(function () {});//
    const intent = await fetch("/.netlify/functions/stripe-payment", {
      //http://localhost:8888/.netlify/functions/stripe-payment///
      //https://ugecredits.com/api/stripe-payment///
      //https://ugecredits.com/.netlify/functions/stripe-payment//
      method: "POST",
      body: JSON.stringify({
        amount: Math.round(stripeCost),
        customer: props.customer,
      }),
    });

    const { paymentIntent } = await intent.json();
    setClientSecret(paymentIntent.client_secret);
    setPaymentIntent(paymentIntent);
    setStripeLoading(false);
  };

  const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecret,
    appearance: {
      theme: "minimal",
      variables: {
        colorBackground: "#bdeaba",
        colorText: "#07300d",
        colorDanger: "#df1b41",
        spacingUnit: "5px",
        borderRadius: "4px",
        // See all possible variables below
      },
    },
  };

  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
  }

  console.log(stripeCost);

  if (foundCookieOrder === 0) {
    return <main class="animate-fade dashboard flex-1">Loading Order</main>;
  } else
    return (
      <>
        {" "}
        {isBannerOpened === true ? (
          <div class="sticky top-0 z-50 flex items-center gap-x-6 bg-indigo-300 via-purple-500 to-pink-500 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <p class="text-sm leading-6 text-white">
              <a>
                <strong class=" text-2xl font-semibold">
                  ORDERS WILL BE SHIPPED WITHIN 7-10 DAYS FOR FREE!
                </strong>
                <strong class="hidden text-2xl font-semibold">
                  CURRENTLY NOT TAKING ORDERS WHILE WE PREPARE FOR DESSERT WARS
                  JUNE 1ST!!🧁🍰🍮
                </strong>
                <svg
                  viewBox="0 0 2 2"
                  class="mx-2 inline h-0.5 w-0.5 fill-current"
                  aria-hidden="true"
                ></svg>
              </a>
            </p>
            <div class="flex flex-1 justify-end">
              <button
                type="button"
                onClick={() => setisBannerOpened(!isBannerOpened)}
                class="-m-3 p-3 focus-visible:outline-offset-[-4px]"
              >
                <span class="sr-only">Dismiss</span>
                <svg
                  class="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <ul>
          {Object.entries(foundCookieOrder.cookieOrder).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
        ${stripeCost / 100}
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 pb-24 pt-10 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Checkout</h2>

            <div class="">
              <a href="/" class="hover:opacity-70">
                <img
                  src="https://imgix.cosmicjs.com/49483c30-fa16-11ef-97be-337de38c2241-Main-logo-word-flat.png"
                  alt="Cop Logo"
                  class="w-1/2 mx-auto mb-20 mix-blend-multiply"
                />
              </a>
            </div>
            <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
              <div>
                <div>
                  <h2 className="text-lg font-medium text-gray-900">
                    Contact information
                  </h2>

                  <div className="mt-4">
                    <label
                      htmlFor="email-address"
                      className="block text-sm/6 font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email-address"
                        name="email-address"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-gray-200 pt-10">
                  <h2 className="text-lg font-medium text-gray-900">
                    Shipping information
                  </h2>

                  <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm/6 font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          autoComplete="given-name"
                          className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm/6 font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          id="last-name"
                          name="last-name"
                          type="text"
                          autoComplete="family-name"
                          className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="company"
                        className="block text-sm/6 font-medium text-gray-700"
                      >
                        Company
                      </label>
                      <div className="mt-2">
                        <input
                          id="company"
                          name="company"
                          type="text"
                          className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="address"
                        className="block text-sm/6 font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <div className="mt-2">
                        <input
                          id="address"
                          name="address"
                          type="text"
                          autoComplete="street-address"
                          className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="apartment"
                        className="block text-sm/6 font-medium text-gray-700"
                      >
                        Apartment, suite, etc.
                      </label>
                      <div className="mt-2">
                        <input
                          id="apartment"
                          name="apartment"
                          type="text"
                          className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm/6 font-medium text-gray-700"
                      >
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          id="city"
                          name="city"
                          type="text"
                          autoComplete="address-level2"
                          className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="country"
                        className="block text-sm/6 font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <div className="mt-2 grid grid-cols-1">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="region"
                        className="block text-sm/6 font-medium text-gray-700"
                      >
                        State / Province
                      </label>
                      <div className="mt-2">
                        <input
                          id="region"
                          name="region"
                          type="text"
                          autoComplete="address-level1"
                          className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="postal-code"
                        className="block text-sm/6 font-medium text-gray-700"
                      >
                        Postal code
                      </label>
                      <div className="mt-2">
                        <input
                          id="postal-code"
                          name="postal-code"
                          type="text"
                          autoComplete="postal-code"
                          className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm/6 font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <div className="mt-2">
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          autoComplete="tel"
                          className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order summary */}
              <div className="mt-10 lg:mt-0">
                <h2 className="text-lg font-medium text-gray-900">
                  Order summary
                </h2>

                <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                  <h3 className="sr-only">Items in your cart</h3>
                  <ul role="list" className="divide-y divide-gray-200">
                    {Object.entries(foundCookieOrder.cookieOrder).map(
                      ([key, value]) => (
                        <li key={key.id} className="flex px-4 py-6 sm:px-6">
                          <div className="shrink-0">
                            <img
                              alt={key}
                              src={
                                key === "redVelvet"
                                  ? "https://crumbl.video/cdn-cgi/image/width=640,format=auto,quality=80/https://crumbl.video/7d75a321-0028-4012-a0b3-1b3ed429fe76_SemiSweetChocolateChunk_OverheadAeria_NoShadow_TECH.png"
                                  : ""
                              }
                              // src={key.imageSrc}
                              className="w-20 rounded-md"
                            />
                          </div>

                          <div className="ml-6 flex flex-1 flex-col">
                            <div className="flex">
                              <div className="min-w-0 flex-1">
                                <h4 className="text-sm">
                                  <a
                                    href={key.href}
                                    className="font-medium text-gray-700 hover:text-gray-800"
                                  >
                                    {key === "redVelvet" ? "Red Velvet" : ""}
                                  </a>
                                </h4>
                                <p className="mt-1 text-sm text-gray-500">
                                  {key.color}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {key.size}
                                </p>
                              </div>
                            </div>

                            <div className="flex flex-1 items-end justify-between pt-2">
                              <p className="mt-1 text-sm font-medium text-gray-900">
                                {key.price}
                              </p>

                              <div className="ml-4">
                                <div className="grid grid-cols-1">
                                  <span className="bg-blue-500 px-4 py-2 rounded-full text-2xl text-white">
                                    {value}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                  <dl className="space-y-6 px-4 py-6 sm:px-6">
                    <div className="hidden flex items-center justify-between">
                      <dt className="text-sm">Subtotal</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        $64.00
                      </dd>
                    </div>
                    <div className="hidden flex items-center justify-between">
                      <dt className="text-sm">Shipping</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        $5.00
                      </dd>
                    </div>
                    <div className="hidden flex items-center justify-between">
                      <dt className="text-sm">Taxes</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        $5.52
                      </dd>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                      <dt className="text-base font-medium">Cookie Total</dt>
                      <dd className="text-base font-medium text-gray-900">
                        ${stripeCost / 100}
                      </dd>
                    </div>
                  </dl>

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <button
                      type="submit"
                      className="w-full rounded-full border border-transparent bg-blue-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      Confirm order
                    </button>
                    <a
                      href="/"
                      className="flex justify-center mt-4 w-full rounded-full border border-transparent bg-red-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      Start Over
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}
