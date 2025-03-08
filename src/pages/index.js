import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import AnchorLink from "react-anchor-link-smooth-scroll";

const IndexPage = () => {
  const [isBannerOpened, setisBannerOpened] = useState(true);
  //
  const [cookieOrder, setcookieOrder] = useState({
    redVelvet: 0,
    chocChip: 0,
    lemon: 0,
    smores: 0,
  });
  //
  //
  //
  useEffect(() => {
    window.localStorage.clear();
  }, []);
  //
  //
  //
  ////

  //////////// Red Velvet
  //
  const redVelvetincrement = () => {
    if (cookieOrder.redVelvet === 50) {
      setcookieOrder({
        ...cookieOrder,
        redVelvet: 50,
      });
    } else
      setcookieOrder({
        ...cookieOrder,
        redVelvet: cookieOrder.redVelvet + 1,
      });
  };

  const redVelvetdecrement = () => {
    if (cookieOrder.redVelvet === 0) {
      setcookieOrder({
        ...cookieOrder,
        redVelvet: 0,
      });
    } else {
      setcookieOrder({
        ...cookieOrder,
        redVelvet: cookieOrder.redVelvet - 1,
      });
    }
  };
  //
  //////////////////////////////
  //
  //
  //////////// Chocolate Chip
  //
  const chocChipincrement = () => {
    if (cookieOrder.chocChip === 50) {
      setcookieOrder({
        ...cookieOrder,
        chocChip: 50,
      });
    } else
      setcookieOrder({
        ...cookieOrder,
        chocChip: cookieOrder.chocChip + 1,
      });
  };

  const chocChipdecrement = () => {
    if (cookieOrder.chocChip === 0) {
      setcookieOrder({
        ...cookieOrder,
        chocChip: 0,
      });
    } else {
      setcookieOrder({
        ...cookieOrder,
        chocChip: cookieOrder.chocChip - 1,
      });
    }
  };
  //
  //////////////////////////////
  //
  //
  //
  //////////// Lemon
  //
  const lemonincrement = () => {
    if (cookieOrder.lemon === 50) {
      setcookieOrder({
        ...cookieOrder,
        lemon: 50,
      });
    } else
      setcookieOrder({
        ...cookieOrder,
        lemon: cookieOrder.lemon + 1,
      });
  };

  const lemondecrement = () => {
    if (cookieOrder.lemon === 0) {
      setcookieOrder({
        ...cookieOrder,
        lemon: 0,
      });
    } else {
      setcookieOrder({
        ...cookieOrder,
        lemon: cookieOrder.lemon - 1,
      });
    }
  };
  //
  //////////////////////////////
  //
  //
  //
  //
  //
  //////////// Smores
  //
  const smoresincrement = () => {
    if (cookieOrder.smores === 50) {
      setcookieOrder({
        ...cookieOrder,
        smores: 50,
      });
    } else
      setcookieOrder({
        ...cookieOrder,
        smores: cookieOrder.smores + 1,
      });
  };

  const smoresdecrement = () => {
    if (cookieOrder.smores === 0) {
      setcookieOrder({
        ...cookieOrder,
        smores: 0,
      });
    } else {
      setcookieOrder({
        ...cookieOrder,
        smores: cookieOrder.smores - 1,
      });
    }
  };
  //
  //////////////////////////////
  //
  //
  const cookies = [
    {
      id: 1,
      name: "Red Velvet",
      incrementFunc: () => redVelvetincrement(),
      decrementFunc: () => redVelvetdecrement(),
      count: cookieOrder.redVelvet,

      imageSrc:
        "https://imgix.cosmicjs.com/8bb942a0-fc67-11ef-bd06-9777d05fbca5-Velvet.png",
      imageAlt: "Red Velvet Cookie",
      price: "$5",
    },
    {
      id: 2,
      name: "Chocolate Chip",
      incrementFunc: () => chocChipincrement(),
      decrementFunc: () => chocChipdecrement(),
      count: cookieOrder.chocChip,

      imageSrc:
        "https://imgix.cosmicjs.com/98a6c7c0-fc68-11ef-bd06-9777d05fbca5-Choc.png",
      imageAlt: "Chocolate Chip Cookie",
      price: "$5",
    },
    {
      id: 3,
      name: "Lemon",
      incrementFunc: () => lemonincrement(),
      decrementFunc: () => lemondecrement(),
      count: cookieOrder.lemon,

      imageSrc:
        "https://imgix.cosmicjs.com/d53e8f60-fc68-11ef-bd06-9777d05fbca5-Lemon.png",
      imageAlt: "Lemon Cookie",
      price: "$5",
    },
    {
      id: 4,
      name: "Smores",
      incrementFunc: () => smoresincrement(),
      decrementFunc: () => smoresdecrement(),
      count: cookieOrder.smores,

      imageSrc:
        "https://imgix.cosmicjs.com/0a9a56e0-fc68-11ef-bd06-9777d05fbca5-Smores.png",
      imageAlt: "Smores Cookie",
      price: "$5",
    },
    // More cookies...
  ];
  //
  //
  //
  const cookieMin = Object.values(cookieOrder).reduce((a, b) => a + b, 0);
  //

  console.log(cookieOrder);
  //
  //
  //
  function checkout() {
    window.localStorage.setItem(
      "COOKIE_ORDER",
      JSON.stringify({
        cookieOrder,
      })
    );

    window.location.href = `/checkout`;
  }
  //
  //
  //
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cop A Cookie</title>

        <link
          rel="icon"
          type="image/png"
          href="https://imgix.cosmicjs.com/76cbc550-bd3b-11ee-9fc1-4bb6168d3a2d-favicon.png"
        />
      </Helmet>

      {isBannerOpened === true ? (
        <div class="sticky top-0 z-50 flex items-center gap-x-6 bg-amber-400 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
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
      <div class="">
        <div class="hidden md:block relative isolate overflow-hidden bg-blue-500">
          <div class="mx-auto items-center max-w-7xl px-6 pt-10 pb-10 lg:flex lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
              <h1 class="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                HANDMADE COOKIES DELIVERED TO YOUR DOORSTEP
              </h1>
              <p class="mt-6 text-lg leading-8 text-white">
                Indulge your senses in the warm embrace of freshly baked
                cookies—soft, gooey centers, golden edges, and a heavenly aroma
                that whispers sweet promises of delight.
              </p>
              <div class="mt-10 flex items-center gap-x-6">
                <AnchorLink
                  class="w-1/2 text-center rounded-full bg-blue-700 px-9 py-4 text-xl font-semibold text-white shadow-sm hover:bg-white hover:text-blue-700"
                  href="#menu"
                >
                  ORDER NOW
                </AnchorLink>

                <AnchorLink
                  class="w-1/2 text-center rounded-full bg-white px-9 py-4 text-xl font-semibold text-blue-600 shadow-sm hover:opacity-70"
                  href="#contact"
                >
                  CONTACT
                </AnchorLink>
              </div>
            </div>
            <div class="md:ml-10 my-auto">
              <div class=" rounded-xl lg:rounded-2xl lg:p-4">
                <img
                  src="https://imgix.cosmicjs.com/d9f9e590-bd3a-11ee-9fc1-4bb6168d3a2d-main-transparent.png"
                  alt="Cop Logo"
                  class="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="block md:hidden text-center relative isolate overflow-hidden bg-sky-200">
          <div class="mx-auto items-center max-w-7xl px-6 pt-10 pb-10 lg:flex lg:px-8">
            <div class="my-auto">
              <div class=" rounded-xl lg:rounded-2xl lg:p-4">
                <img
                  src="https://imgix.cosmicjs.com/d9f9e590-bd3a-11ee-9fc1-4bb6168d3a2d-main-transparent.png"
                  alt="Cop Logo"
                  class="w-full"
                />
              </div>
            </div>

            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
              <h1 class="mt-6 text-4xl font-bold tracking-tight text-sky-900 sm:text-6xl">
                HANDMADE COOKIES DELIVERED TO YOUR DOORSTEP
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                Indulge your senses in the warm embrace of freshly baked
                cookies—soft, gooey centers, golden edges, and a heavenly aroma
                that whispers sweet promises of delight.
              </p>
              <div class="mt-10 flex items-center gap-x-6">
                <AnchorLink
                  class="w-1/2 text-center rounded-full bg-blue-600 px-9 py-4 text-xl font-semibold text-white shadow-sm hover:bg-blue-500"
                  href="#menu"
                >
                  ORDER NOW
                </AnchorLink>

                <AnchorLink
                  class="w-1/2 text-center rounded-full bg-white px-9 py-4 text-xl font-semibold text-blue-600 shadow-sm hover:opacity-70"
                  href="#contact"
                >
                  CONTACT
                </AnchorLink>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-sky-200 py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div class="lg:pr-4">
                <div class="hidden md:flex relative">
                  <img
                    class="h-full rounded-3xl flex-1"
                    src="https://imgix.cosmicjs.com/8ac3c950-bb87-11ee-9be1-85f53db06a1d-bio.png"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
                  <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    About Cop A Cookie
                  </h1>
                  <div class="max-w-xl">
                    <p class="mt-6">
                      Hey yall, I'm Keith Dunigan. My story begins in my very
                      tiny apartment 5 years ago or so. During covid, I started
                      watching YouTube videos and then attempted to bake what
                      I’d just watched. Initially I was not very successful, but
                      as time went by my skills continued to grow. I mostly made
                      cakes and cookies, but the cookies turned out to be the
                      easiest.
                    </p>
                    <p class="mt-8">
                      As time went by, my love for baking grew. It was stressful
                      at times but for the most part, it was very calming for
                      me. There’s nothing like putting on some music and then
                      going to work in the kitchen. Prior to selling my cookies,
                      i’d hand them out for free. Mostly to my coworkers and
                      friends. The feedback was always very positive and people
                      would always say “ You need to open a bakery”. I obviously
                      haven’t reached that point yet, but maybe someday.
                    </p>
                    <p class="mt-8">
                      So what makes these cookies so special? If you ask me, I
                      simply follow the rules of the baking world and ask people
                      for their opinions. All of my cookies are made with fresh
                      flour from a local market, unsalted butter and caster
                      sugar. The fresh flour makes a huge difference in the
                      texture of the cookie. The Caster sugar, blends well with
                      the butter in my opinion and my cookies are rather large.
                      Each cookie is weighed out to 125g. The dough is frozen
                      over night and before I actually bake them I sit the pan
                      in the oven while it pre heats. This way, you get a soft
                      cookie on top and a little crunch on the bottom.
                    </p>
                    <p class="mt-8">
                      If you’ve made it this far into the Bio, I just want to
                      say thank you for your support and I look forward to
                      seeing a cookie review from you!
                    </p>
                  </div>
                  <div class=" mt-10 flex items-center gap-x-6">
                    <AnchorLink
                      class="w-1/2 text-center rounded-full bg-blue-600 px-9 py-4 text-xl font-semibold text-white shadow-sm hover:bg-blue-500"
                      href="#menu"
                    >
                      ORDER NOW
                    </AnchorLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="menu">
          <div className="isolate px-6 py-10">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 className="text-center text-6xl font-bold text-gray-900">
                Available Flavors{" "}
              </h2>
              <h3 className="text-red-600 text-2xl text-center font-medium">
                (Dozen minimum)
              </h3>

              <div className="mt-20 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                {cookies.map((product) => (
                  <div key={product.id}>
                    <div className="relative">
                      <div className="relative h-96 w-auto overflow-hidden rounded-lg">
                        <img
                          alt={product.imageAlt}
                          src={product.imageSrc}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="text-center relative mt-6">
                        <h3 className="text-2xl font-bold text-indigo-600">
                          {product.name}
                        </h3>
                      </div>
                      <div className="absolute inset-x-0 top-0 flex h-96 items-end justify-end overflow-hidden rounded-lg p-4">
                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-gray-500 opacity-50"
                        />
                        <p className="relative text-3xl font-semibold bg-rose-600 p-4 rounded-full text-white">
                          {product.price}
                        </p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div class="flex items-center w-full mx-auto justify-center">
                        <button
                          disabled={product.count === 0}
                          onClick={() => product.decrementFunc()}
                          class={`bg-white group rounded-l-full px-6 py-[18px] border flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 ${
                            product.count === 0
                              ? "border border-gray-300"
                              : " border border-gray-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <svg
                            class={`transition-all duration-500 group-hover:stroke-black ${
                              product.count === 0
                                ? "stroke-gray-300"
                                : "stroke-gray-900"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M16.5 11H5.5"
                              stroke=""
                              stroke-width="1.6"
                              stroke-linecap="round"
                            />
                            <path
                              d="M16.5 11H5.5"
                              stroke=""
                              stroke-opacity="0.2"
                              stroke-width="1.6"
                              stroke-linecap="round"
                            />
                            <path
                              d="M16.5 11H5.5"
                              stroke=""
                              stroke-opacity="0.2"
                              stroke-width="1.6"
                              stroke-linecap="round"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          class="bg-white border-y border-gray-500 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                          value={product.count}
                        />
                        <button
                          disabled={product.count === 50}
                          onClick={() => product.incrementFunc()}
                          class={`bg-white group rounded-r-full px-6 py-[18px] border flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 ${
                            product.count === 50
                              ? "border border-gray-300"
                              : " border border-gray-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <svg
                            class={`transition-all duration-500 group-hover:stroke-black ${
                              product.count === 50
                                ? "stroke-gray-300"
                                : "stroke-gray-900"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M11 5.5V16.5M16.5 11H5.5"
                              stroke=""
                              stroke-width="1.6"
                              stroke-linecap="round"
                            />
                            <path
                              d="M11 5.5V16.5M16.5 11H5.5"
                              stroke=""
                              stroke-opacity="0.2"
                              stroke-width="1.6"
                              stroke-linecap="round"
                            />
                            <path
                              d="M11 5.5V16.5M16.5 11H5.5"
                              stroke=""
                              stroke-opacity="0.2"
                              stroke-width="1.6"
                              stroke-linecap="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => checkout()}
              disabled={cookieMin < 12}
              class={`w-full rounded-full border border-transparent py-5 px-4 py-2 text-3xl font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 ${
                cookieMin < 12 ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {cookieMin < 12
                ? ` Add ${12 - cookieMin} more ${
                    cookieMin === 11 ? "cookie" : "cookies"
                  }`
                : "Checkout"}
            </button>
          </div>
        </section>

        <section id="">
          <div class="hidden soldout bg-gradient-to-b from-red-400 to-rose-600">
            <div class="dozen mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h1 class="text-center mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                CURRENTLY NOT TAKING ORDERS
                <span class="block">
                  PREPARING FOR DESSERT WARS ON JUNE 1ST
                  <span class="block">🍨 🥧 🧁 🍰 🍮</span>
                </span>
              </h1>
            </div>
          </div>
        </section>

        <section id="contact">
          <div class="isolate bg-gradient-to-r from-cyan-50 to-blue-50 px-6 py-24 sm:py-32 lg:px-8">
            <div
              class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
              aria-hidden="true"
            >
              <div class="relative left-1/2 -z-10"></div>
            </div>
            <div class="mx-auto max-w-2xl text-center">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Contact Or Submit A Review
              </h2>
            </div>
            <form
              netlify
              method="POST"
              action="/general-thank-you"
              target="_self"
              id="Main Contact"
              name="Main Contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              class="mx-auto mt-10 max-w-xl"
            >
              <input type="hidden" name="form-name" value="Main Contact" />
              <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div class="sm:col-span-2">
                  <label
                    for="full-name
                full-name"
                    class="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Full Name
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      autocomplete="organization"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="email"
                    class="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autocomplete="email"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="phone-number"
                    class="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div class="relative mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autocomplete="tel"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message or review
                  </label>
                  <div class="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="mt-10">
                <button
                  type="submit"
                  class="block w-full rounded-full bg-blue-600 px-3.5 py-3 text-center text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Let's talk
                </button>
              </div>
            </form>
            <p class="flex justify-center mt-20 text-xs leading-5 text-gray-500">
              &copy;{new Date().getFullYear()} Cop A Cookie. All rights
              reserved.{" "}
              <a
                href="mailto:josh@thejxmediagroup.com"
                class="ml-0.5 text-xs leading-5 hover:underline"
              >
                {" "}
                Powered By Jxmedia
              </a>
              <a
                href="/terms-and-conditions"
                target="_blank"
                class="ml-0.5 text-xs leading-5 hover:underline"
              >
                {" "}
                | Terms
              </a>
              <a
                href="/privacy"
                target="_blank"
                class="ml-0.5 text-xs leading-5 hover:underline"
              >
                {" "}
                | Privacy
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default IndexPage;
