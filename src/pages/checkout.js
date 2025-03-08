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

export default function Example(props) {
  const [isBannerOpened, setisBannerOpened] = useState(true);

  const [clientSecret, setClientSecret] = useState("");
  const [paymentIntent, setPaymentIntent] = useState("");

  const [foundCookieOrder, setfoundCookieOrder] = useState(0);

  console.log(foundCookieOrder.cookieOrder);

  //
  //
  //
  //
  //Customer Data Function (checkout) //
  function customerChange(e) {
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value,
    });
  }

  const [customerData, setCustomerData] = useState({
    firstName: "",
    lastName: "",
    shippingAddress: "",
    shippingSuite: "",
    shippingCity: "",
    shippingState: "",
    shippingZip: "",
    email: "",
    phone: "",
  });
  //
  //
  //
  //
  //
  //
  //

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
    const intent = await fetch("/.netlify/functions/stripe-payment", {
      method: "POST",
      body: JSON.stringify({
        amount: Math.round(stripeCost),
        customer: customerData,
        order: foundCookieOrder.cookieOrder,
      }),
    });

    const { paymentIntent } = await intent.json();

    console.log(paymentIntent);
    setClientSecret(paymentIntent.client_secret);
    setPaymentIntent(paymentIntent);
  };

  const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecret,
    appearance: {
      theme: "minimal",
      variables: {
        colorBackground: "#d5e8ff",
        colorText: "black",
        colorDanger: "#df1b41",
        spacingUnit: "5px",
        borderRadius: "8px",
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
  //
  //
  //
  //
  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }

    return false;
  }

  const emailCheck = validateEmail(customerData.email);
  //
  //
  //
  //
  //
  //
  //
  //

  console.log(stripeCost);
  console.log(customerData);
  console.log(clientSecret);
  console.log(paymentIntent);

  if (foundCookieOrder === 0) {
    return <main class="animate-fade dashboard flex-1">Loading Order</main>;
  } else
    return (
      <>
        {" "}
        {isBannerOpened === true ? (
          <div class="sticky top-0 z-50 flex items-center gap-x-6 bg-indigo-300 via-purple-500 to-pink-500 px-6 py-2.5 lg:px-3.5 lg:before:flex-1">
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
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 pb-24 pt-10 lg:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Checkout</h2>

            {clientSecret === "" ? (
              <div class="w-1/2 mx-auto">
                <a href="/" class=" hover:opacity-70">
                  <img
                    src="https://imgix.cosmicjs.com/49483c30-fa16-11ef-97be-337de38c2241-Main-logo-word-flat.png"
                    alt="Cop Logo"
                    class="mx-auto mb-20 mix-blend-multiply"
                  />
                </a>
              </div>
            ) : (
              <div class="w-1/6 mx-auto">
                <a href="/" class=" hover:opacity-70">
                  <img
                    src="https://imgix.cosmicjs.com/49483c30-fa16-11ef-97be-337de38c2241-Main-logo-word-flat.png"
                    alt="Cop Logo"
                    class="mx-auto mb-10 mix-blend-multiply"
                  />
                </a>
              </div>
            )}
            <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
              {clientSecret === "" ? (
                <div>
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">
                      Contact information
                    </h2>

                    {emailCheck === false ? (
                      <div class="mt-4 relative rounded-md">
                        <label
                          for="name"
                          class="mb-2 block text-sm font-medium text-orange"
                        >
                          Email address <span class="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          onChange={customerChange}
                          autoComplete="email"
                          required
                          class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 lg:text-sm/6 border border-red-600"
                        />
                      </div>
                    ) : (
                      <div class="mt-4 relative rounded-md">
                        <label
                          for="name"
                          class="mb-2 block text-sm font-medium text-orange"
                        >
                          Email address<span class="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          onChange={customerChange}
                          autoComplete="email"
                          required
                          class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 lg:text-sm/6 border-emerald-600"
                        />
                      </div>
                    )}
                  </div>

                  <div className="mt-10 border-t border-gray-200 pt-10">
                    <h2 className="text-lg font-medium text-gray-900">
                      Shipping information
                    </h2>

                    <div className="mt-4 grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-x-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm/6 font-medium text-gray-700"
                        >
                          First name<span class="text-red-500">*</span>
                        </label>
                        <div className="mt-2">
                          <input
                            name="firstName"
                            onChange={customerChange}
                            type="text"
                            autoComplete="given-name"
                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 lg:text-sm/6"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm/6 font-medium text-gray-700"
                        >
                          Last name<span class="text-red-500">*</span>
                        </label>
                        <div className="mt-2">
                          <input
                            id="lastName"
                            name="lastName"
                            onChange={customerChange}
                            type="text"
                            autoComplete="family-name"
                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 lg:text-sm/6"
                          />
                        </div>
                      </div>

                      <div className="lg:col-span-2">
                        <label
                          htmlFor="shippingAddress"
                          className="block text-sm/6 font-medium text-gray-700"
                        >
                          Address<span class="text-red-500">*</span>
                        </label>
                        <div className="mt-2">
                          <input
                            name="shippingAddress"
                            onChange={customerChange}
                            type="text"
                            autoComplete="street-address"
                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 lg:text-sm/6"
                          />
                        </div>
                      </div>

                      <div className="lg:col-span-2">
                        <label
                          htmlFor="shippingSuite"
                          className="block text-sm/6 font-medium text-gray-700"
                        >
                          Apartment, suite, etc.
                        </label>
                        <div className="mt-2">
                          <input
                            name="shippingSuite"
                            onChange={customerChange}
                            type="text"
                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 lg:text-sm/6"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="shippingCity"
                          className="block text-sm/6 font-medium text-gray-700"
                        >
                          City<span class="text-red-500">*</span>
                        </label>
                        <div className="mt-2">
                          <input
                            name="shippingCity"
                            onChange={customerChange}
                            type="text"
                            autoComplete="address-level2"
                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 lg:text-sm/6"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="shippingState"
                          className="block text-sm/6 font-medium text-gray-700"
                        >
                          State / Province<span class="text-red-500">*</span>
                        </label>
                        <div className="mt-2">
                          <select
                            name="shippingState"
                            onChange={customerChange}
                            required
                            class="block w-full rounded-md bg-white px-3 py-2.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 lg:text-sm/6"
                          >
                            <option value="0" default selected>
                              Select State
                            </option>
                            <option disabled>------------------</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                            <option hidden>Wyomingsssssssssss</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="shippingZip"
                          className="block text-sm/6 font-medium text-gray-700"
                        >
                          Postal code<span class="text-red-500">*</span>
                        </label>
                        <div className="mt-2">
                          <input
                            name="shippingZip"
                            type="text"
                            onChange={customerChange}
                            autoComplete="shippingZip"
                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 lg:text-sm/6"
                          />
                        </div>
                      </div>

                      <div className="lg:col-span-1">
                        <label
                          htmlFor="phone"
                          className="block text-sm/6 font-medium text-gray-700"
                        >
                          Phone
                        </label>
                        <div className="mt-2">
                          <input
                            name="phone"
                            type="text"
                            onChange={customerChange}
                            autoComplete="tel"
                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 lg:text-sm/6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}

              {/* Order summary */}
              <div className="mt-10 lg:mt-0">
                <h2 className="text-lg font-medium text-gray-900">
                  Order summary
                </h2>

                <div className="mt-4 rounded-lg border border-gray-200 bg-white">
                  <h3 className="sr-only">Items in your cart</h3>
                  <ul role="list" className="divide-y divide-gray-200">
                    {Object.entries(foundCookieOrder.cookieOrder)
                      .filter(([key, value]) => value !== 0)
                      .map(([key, value]) => (
                        <li
                          key={key.id}
                          className="flex items-center py-4 px-4 lg:px-6"
                        >
                          <div className="shrink-0">
                            {key === "redVelvet" ? (
                              <img
                                alt={key}
                                src="https://imgix.cosmicjs.com/8bb942a0-fc67-11ef-bd06-9777d05fbca5-Velvet.png"
                                className="w-20 rounded-md"
                              />
                            ) : (
                              <></>
                            )}
                            {key === "chocChip" ? (
                              <img
                                alt={key}
                                src="https://imgix.cosmicjs.com/98a6c7c0-fc68-11ef-bd06-9777d05fbca5-Choc.png"
                                className="w-20 rounded-md"
                              />
                            ) : (
                              <></>
                            )}

                            {key === "smores" ? (
                              <img
                                alt={key}
                                src="https://imgix.cosmicjs.com/0a9a56e0-fc68-11ef-bd06-9777d05fbca5-Smores.png"
                                className="w-20 rounded-md"
                              />
                            ) : (
                              <></>
                            )}
                            {key === "lemon" ? (
                              <img
                                alt={key}
                                src="https://imgix.cosmicjs.com/d53e8f60-fc68-11ef-bd06-9777d05fbca5-Lemon.png"
                                className="w-20 rounded-md"
                              />
                            ) : (
                              <></>
                            )}
                          </div>
                          <div className="ml-6 flex flex-1 flex-col">
                            <div className="flex items-center">
                              <div className="min-w-0 flex-1">
                                <h4 className="text-mb">
                                  <p className="font-medium text-gray-700 hover:text-gray-800">
                                    {key === "redVelvet" ? "Red Velvet" : ""}
                                    {key === "chocChip" ? "Chocolate Chip" : ""}
                                    {key === "lemon" ? "Lemon" : ""}
                                    {key === "smores" ? "Smores" : ""}
                                  </p>
                                </h4>
                              </div>
                              <span className="bg-blue-500 px-4 py-1.5 rounded-full text-lg text-white">
                                {value}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                  <dl className="space-y-6 px-4 py-2 lg:px-6">
                    <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                      <dt className="text-xl text-blue-500 font-medium">
                        Order Total
                      </dt>
                      <dd className="text-xl font-medium text-gray-900">
                        ${stripeCost / 100}
                      </dd>
                    </div>
                  </dl>

                  {clientSecret === "" ? (
                    <div className="border-t border-gray-200 px-4 py-6 lg:px-6">
                      {customerData.firstName === "" ||
                      customerData.lastName === "" ||
                      customerData.shippingAddress === "" ||
                      customerData.shippingCity === "" ||
                      customerData.shippingState === "" ||
                      customerData.email === "" ||
                      customerData.shippingAddress === "" ||
                      emailCheck === false ? (
                        <button
                          type="button"
                          disabled
                          className="w-full rounded-full border border-transparent bg-gray-400 px-4 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                        >
                          Confirm order
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => getPaymentIntent()}
                          className="w-full rounded-full border border-transparent bg-blue-600 px-4 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                        >
                          Confirm order
                        </button>
                      )}

                      <a
                        href="/"
                        className="flex justify-center mt-4 w-full rounded-full border border-transparent bg-red-600 px-4 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                      >
                        Start Over
                      </a>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                {clientSecret === "" ? (
                  <></>
                ) : (
                  <a
                    href="/"
                    className="flex justify-center mt-4 w-full rounded-full border border-transparent bg-red-600 px-4 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Start Over
                  </a>
                )}
              </div>
              <div class="checkout sticky mt-2 top-5 ">
                {clientSecret != "" ? (
                  <Elements stripe={stripePromise} options={options}>
                    <PaymentForm
                      customer={customerData}
                      paymentIntent={paymentIntent}
                    />{" "}
                  </Elements>
                ) : (
                  <></>
                )}
              </div>
            </form>
          </div>
        </div>
      </>
    );
}
