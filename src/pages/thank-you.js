import React from "react";

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <main className="font-primary grid min-h-full place-items-center bg-white px-6 py-24 lg:py-32 lg:px-8">
        <div class="w-1/2 mx-auto">
          <a href="/" class=" hover:opacity-70">
            <img
              src="https://imgix.cosmicjs.com/49483c30-fa16-11ef-97be-337de38c2241-Main-logo-word-flat.png"
              alt="Cop Logo"
              class="mx-auto mb-10 mix-blend-multiply"
            />
          </a>
        </div>
        <div className="text-center">
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 lg:text-6xl">
            Thank you for your order!
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 lg:text-xl/8">
            I will ship your order ASAP, hope you enjoy!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-full bg-blue-600 px-10 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Return Home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
