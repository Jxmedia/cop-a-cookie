import * as React from "react";
import { Helmet } from "react-helmet";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "gatsby";

const IndexPage = () => {
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
      <div class="">
        <div class="hidden md:block relative isolate overflow-hidden bg-sky-200">
          <div class="mx-auto items-center max-w-7xl px-6 pt-10 pb-10 lg:flex lg:px-8">
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
                  class="w-1/2 text-center rounded-md bg-blue-600 px-9 py-4 text-xl font-semibold text-white shadow-sm hover:bg-blue-500"
                  href="#menu"
                >
                  ORDER NOW
                </AnchorLink>

                <AnchorLink
                  class="w-1/2 text-center rounded-md bg-white px-9 py-4 text-xl font-semibold text-blue-600 shadow-sm hover:opacity-70"
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
                  class="w-1/2 text-center rounded-md bg-blue-600 px-9 py-4 text-xl font-semibold text-white shadow-sm hover:bg-blue-500"
                  href="#menu"
                >
                  ORDER NOW
                </AnchorLink>

                <AnchorLink
                  class="w-1/2 text-center rounded-md bg-white px-9 py-4 text-xl font-semibold text-blue-600 shadow-sm hover:opacity-70"
                  href="#contact"
                >
                  CONTACT
                </AnchorLink>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white py-24 sm:py-32">
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
                      It all began in my very tiny apartment 5 years ago or so.
                      During covid, I started watching YouTube videos and then
                      attempted to bake what I’d just watched. Initially I was
                      not very successful, but as time went by my skills
                      continued to grow. I mostly made cakes and cookies, but
                      the cookies turned out to be the easiest.
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
                  <div class="mt-10 flex items-center gap-x-6">
                    <AnchorLink
                      class="w-1/2 text-center rounded-md bg-blue-600 px-9 py-4 text-xl font-semibold text-white shadow-sm hover:bg-blue-500"
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
          <div class="bg-sky-200">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h1 class="text-center mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Current Menu
              </h1>

              <div class="mt-10 grid grid-cols-1 gap-y-32 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2">
                <a
                  href="https://buy.stripe.com/14k5kv0H3cqY4Ug7ss"
                  target="_blank"
                  class="hover:opacity-80"
                >
                  <div class="relative">
                    <div class="relative w-full overflow-hidden rounded-3xl bg-sky-50 p-4">
                      <img
                        src="https://imgix.cosmicjs.com/c814b580-bb8c-11ee-9be1-85f53db06a1d-red-velvet.png"
                        alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
                        class="rounded-3xl h-full w-full object-cover object-center"
                      />
                    </div>
                    <div class="relative mt-4 text-center">
                      <h3 class="text-3xl font-semibold text-gray-900">
                        Red Velvet
                      </h3>
                      <p class="mt-1 text-sm text-gray-800">Single Count</p>
                    </div>
                    <div class="absolute inset-x-0 top-0 flex items-end justify-end overflow-hidden">
                      <p class="relative text-5xl font-semibold text-white bg-blue-600 rounded-bl-3xl p-8">
                        $4
                      </p>
                    </div>
                  </div>

                  <div class="mt-6">
                    <a class="relative flex items-center justify-center rounded-md border border-transparent bg-orange-400 px-8 py-3 text-lg font-semibold text-gray-900 ">
                      Order Now
                    </a>
                  </div>
                </a>
                <a
                  href="https://buy.stripe.com/eVa14f89v1MkdqMfYZ"
                  target="_blank"
                  class="hover:opacity-80"
                >
                  <div class="relative">
                    <div class="relative w-full overflow-hidden rounded-3xl bg-sky-50 p-4">
                      <img
                        src="https://imgix.cosmicjs.com/572e9770-bd3d-11ee-9fc1-4bb6168d3a2d-black-forest.png"
                        alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
                        class="rounded-3xl h-full w-full object-cover object-center"
                      />
                    </div>
                    <div class="relative mt-4 text-center">
                      <h3 class="text-3xl font-semibold text-gray-900">
                        Black Forest
                      </h3>
                      <p class="mt-1 text-sm text-gray-800">Single Count</p>
                    </div>
                    <div class="absolute inset-x-0 top-0 flex items-end justify-end overflow-hidden">
                      <p class="relative text-5xl font-semibold text-white bg-blue-600 rounded-bl-3xl p-8">
                        $4
                      </p>
                    </div>
                  </div>

                  <div class="mt-6">
                    <a class="relative flex items-center justify-center rounded-md border border-transparent bg-orange-400 px-8 py-3 text-lg font-semibold text-gray-900 ">
                      Order Now
                    </a>
                  </div>
                </a>
                <a
                  href="https://buy.stripe.com/3cs4grcpL8aI5Yk7su"
                  target="_blank"
                  class="hover:opacity-80"
                >
                  <div class="relative">
                    <div class="relative w-full overflow-hidden rounded-3xl bg-sky-50 p-4">
                      <img
                        src="https://imgix.cosmicjs.com/57296750-bd3d-11ee-9fc1-4bb6168d3a2d-biscoff.png"
                        alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
                        class="rounded-3xl h-full w-full object-cover object-center"
                      />
                    </div>
                    <div class="relative mt-4 text-center">
                      <h3 class="text-3xl font-semibold text-gray-900">
                        Biscoff
                      </h3>
                      <p class="mt-1 text-sm text-gray-800">Single Count</p>
                    </div>
                    <div class="absolute inset-x-0 top-0 flex items-end justify-end overflow-hidden">
                      <p class="relative text-5xl font-semibold text-white bg-blue-600 rounded-bl-3xl p-8">
                        $4
                      </p>
                    </div>
                  </div>

                  <div class="mt-6">
                    <a class="relative flex items-center justify-center rounded-md border border-transparent bg-orange-400 px-8 py-3 text-lg font-semibold text-gray-900 ">
                      Order Now
                    </a>
                  </div>
                </a>
                <a
                  href="https://buy.stripe.com/bIY14f2Pbdv29aweUX"
                  target="_blank"
                  class="hover:opacity-80"
                >
                  <div class="relative">
                    <div class="relative w-full overflow-hidden rounded-3xl bg-sky-50 p-4">
                      <img
                        src="https://imgix.cosmicjs.com/5714f4f0-bd3d-11ee-9fc1-4bb6168d3a2d-chocolate.png"
                        alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
                        class="rounded-3xl h-full w-full object-cover object-center"
                      />
                    </div>
                    <div class="relative mt-4 text-center">
                      <h3 class="text-3xl font-semibold text-gray-900">
                        Chocolate Chip
                      </h3>
                      <p class="mt-1 text-sm text-gray-800">Single Count</p>
                    </div>
                    <div class="absolute inset-x-0 top-0 flex items-end justify-end overflow-hidden">
                      <p class="relative text-5xl font-semibold text-white bg-blue-600 rounded-bl-3xl p-8">
                        $4
                      </p>
                    </div>
                  </div>

                  <div class="mt-6">
                    <a class="relative flex items-center justify-center rounded-md border border-transparent bg-orange-400 px-8 py-3 text-lg font-semibold text-gray-900 ">
                      Order Now
                    </a>
                  </div>
                </a>
              </div>
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
                  class="block w-full rounded-md bg-blue-600 px-3.5 py-3 text-center text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>
          <p class="mt-4 text-xs leading-5 text-gray-200">
            &copy;{new Date().getFullYear()} Cop A Cookie. All rights reserved.{" "}
            <a
              href="mailto:josh@thejxmediagroup.com"
              class="mt-4 text-xs leading-5 text-gray-200"
            >
              &copy;{new Date().getFullYear()} Powered By Jxmedia
            </a>
          </p>
        </section>
      </div>
    </>
  );
};

export default IndexPage;
