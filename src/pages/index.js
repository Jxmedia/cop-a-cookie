import * as React from "react";

const IndexPage = () => {
  return (
    <>
      <div class="relative isolate overflow-hidden bg-sky-200">
        <div class="mx-auto max-w-7xl px-6 pt-10 pb-10 lg:flex lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <img
              class="h-11"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />

            <h1 class="mt-10 text-4xl font-bold tracking-tight text-sky-900 sm:text-6xl">
              HANDMADE COOKIES DELIVERED TO YOUR DOORSTEP
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div class="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                class="w-1/2 text-center rounded-md bg-blue-600 px-9 py-4 text-xl font-semibold text-white shadow-sm hover:bg-blue-500"
              >
                ORDER NOW
              </a>
            </div>
          </div>
          <div class="ml-10 my-auto">
            <div class=" rounded-xl lg:rounded-2xl lg:p-4">
              <img
                src="https://img.freepik.com/premium-psd/chocolate-chip-cookie-isolated-white-transparent-background-png_888962-299.jpg?w=740"
                alt="App screenshot"
                class="w-full rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="lg:pr-4">
              <div class="relative ">
                <img
                  class="h-full rounded-3xl"
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
                <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  On a mission to empower remote teams
                </h1>
                <div class="max-w-xl">
                  <p class="mt-6">
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                    risus enim. Mattis mauris semper sed amet vitae sed turpis
                    id. Id dolor praesent donec est. Odio penatibus risus
                    viverra tellus varius sit neque erat velit. Faucibus commodo
                    massa rhoncus, volutpat. Dignissim sed eget risus enim.
                    Mattis mauris semper sed amet vitae sed turpis id.
                  </p>
                  <p class="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                    duis odio id et. Id blandit molestie auctor fermentum
                    dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                    varius vulputate et ultrices hac adipiscing egestas. Iaculis
                    convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>
                  <p class="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                    duis odio id et. Id blandit molestie auctor fermentum
                    dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                    varius vulputate et ultrices hac adipiscing egestas. Iaculis
                    convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>
                </div>
                <div class="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    class="w-1/2 text-center rounded-md bg-blue-600 px-9 py-4 text-xl font-semibold text-white shadow-sm hover:bg-blue-500"
                  >
                    ORDER NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
