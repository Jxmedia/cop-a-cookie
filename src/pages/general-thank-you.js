import React from "react";
import { Helmet } from "react-helmet";

const ThankYou = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cop A Cookie | Thanks For Your Submission</title>

        <link
          rel="icon"
          type="image/png"
          href="https://imgix.cosmicjs.com/76cbc550-bd3b-11ee-9fc1-4bb6168d3a2d-favicon.png"
        />
      </Helmet>

      <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20">
        <div class="text-center">
          <div className="mx-auto flex w-11/12">
            <img
              class=" w-full "
              src="https://imgix.cosmicjs.com/65bcd110-bd3a-11ee-9fc1-4bb6168d3a2d-wordmark-flat.png"
              alt="Logo"
            ></img>
          </div>
          <h2 class="mt-14text-2xl md:text-4xl tracking-tight md:leading-12 font-extrabold text-blue-500 sm:text-5xl sm:leading-none">
            Your Submission was received successfully!
          </h2>

          <div class="mt-16">
            {" "}
            <a
              href="/"
              class="bg-blue-700 mt-10 px-20 text-xl relative py-6 leading-5 font-bold rounded-md text-white hover:bg-blue-500 focus:outline-none focus:shadow-outline-black focus:border-black-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
            >
              <span class=""> RETURN HOME </span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};
export default ThankYou;
