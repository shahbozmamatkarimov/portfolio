<template>
  <div class="flex flex-col justify-center items-center py-12 md:px-10 px-5">
    <div class="flex w-full max-w-[1800px] flex-col mb-3.5 max-md:max-w-full">
      <div id="#home" class="justify-center self-stretch md:mt-24">
        <div class="gap-5 md:flex">
          <div
            class="flex flex-col xl:mt-0 -mt-16 md:w-[67%] bg-[url('')] bg-cover"
          >
            <div
              data-aos="fade-up"
              class="text-zinc-300 font-bold bg-clip-text w-full my-auto"
            >
              <div class="text-zinc-300">
                <p class="text-2xl w-full">Assalamu alaikum 👋,</p>
                <p class="md:text-5xl text-3xl">My name is</p>
              </div>
              <p class="text-3xl mt-1">Shahboz Mamatkarimov</p>
              <span class="text-zinc-300 -mt-5 text-4xl"
                >I am a Full stack web developer</span
              >
              <p class="text-4xl">I can build any website of your dreams</p>
              <button
                @click="$router.push('/resume')" 
                class="text-white bg-black rounded-full px-10 py-2 shadow-inner shadow-gray-600 mt-6"
              >
                My Resume
              </button>
            </div>
          </div>
          <div
            @click="$router.push('/resume')"
            data-aos="fade-left"
            class="flex flex-col items-stretch xl:w-[50%] md:w-[50%] h-full md:mt-0 mt-5"
          >
            <img
              loading="lazy"
              src="@/assets/resume/code.png"
              class="w-full object-cover overflow-hidden"
            />
          </div>
        </div>
      </div>
      <div
        id="technologies"
        data-aos="fade-right"
        class="text-stone-300 text-center md:text-5xl text-3xl font-bold leading-7 self-center whitespace-nowrap pt-20"
      >
        My Tech Stack
      </div>
      <div
        data-aos="fade-up"
        class="text-neutral-400 text-center lg:text-3xl sm:text-2xl text-xl leading-7 self-center mt-8 max-md:max-w-full"
      >
        Technologies I’ve been working with recently
      </div>
      <div
        class="flex flex-wrap items-start justify-center gap-5 md:mt-32 mt-16 pr-2.5 space-y-5"
      >
        <img
          data-aos="fade-up"
          loading="lazy"
          src="@/assets/technologies/html.svg"
          class="aspect-[1.09] object-contain object-center lg:w-[131px] md:w-[115px] w-[100px] overflow-hidden"
        />
        <img
          data-aos="fade-up"
          loading="lazy"
          src="@/assets/technologies/css.svg"
          class="aspect-[1.09] object-contain object-center lg:w-[131px] md:w-[115px] w-[100px] overflow-hidden"
        />
        <img
          data-aos="fade-up"
          loading="lazy"
          src="@/assets/technologies/sass.svg"
          class="aspect-[1.09] object-contain object-center lg:w-[131px] md:w-[115px] w-[100px] overflow-hidden"
        />
        <img
          data-aos="fade-up"
          loading="lazy"
          src="@/assets/technologies/bootstrap.svg"
          class="aspect-[1.09] object-contain object-center lg:w-[131px] md:w-[115px] w-[100px] overflow-hidden"
        />
        <img
          data-aos="fade-up"
          loading="lazy"
          src="@/assets/technologies/tailwind.svg"
          class="aspect-[1.09] object-contain object-center lg:w-[131px] md:w-[115px] w-[100px] overflow-hidden"
        />
        <img
          data-aos="fade-up"
          loading="lazy"
          src="@/assets/technologies/js.svg"
          class="aspect-[1.09] object-contain object-center lg:w-[131px] md:w-[115px] w-[100px] overflow-hidden"
        />
        <img
          data-aos="fade-up"
          loading="lazy"
          src="@/assets/technologies/jquery.gif"
          class="aspect-[1.09] object-contain object-center lg:w-[131px] md:w-[115px] w-[100px] overflow-hidden"
        />
        <img
          data-aos="fade-up"
          loading="lazy"
          src="@/assets/technologies/vue.webp"
          class="aspect-[1.09] object-contain object-center lg:w-[131px] md:w-[115px] w-[100px] overflow-hidden"
        />
        <img
          data-aos="fade-up"
          loading="lazy"
          src="@/assets/technologies/nuxt.png"
          class="aspect-[1.09] object-contain object-center lg:w-[131px] md:w-[115px] w-[100px] overflow-hidden"
        />
        <img
          data-aos="fade-up"
          loading="lazy"
          src="@/assets/technologies/react.svg"
          class="aspect-[1.09] object-contain object-center lg:w-[131px] md:w-[115px] w-[100px] overflow-hidden"
        />
        <img
          data-aos="fade-up"
          loading="lazy"
          src="@/assets/technologies/next.svg"
          class="aspect-[1.09] object-contain object-center lg:w-[131px] md:w-[115px] w-[100px] overflow-hidden"
        />
        <img
          data-aos="fade-up"
          loading="lazy"
          src="@/assets/technologies/node.svg"
          class="aspect-[1.09] object-contain object-center lg:w-[131px] md:w-[115px] w-[100px] overflow-hidden"
        />
        <img
          data-aos="fade-up"
          loading="lazy"
          src="@/assets/technologies/nest.png"
          class="aspect-[1.09] object-contain object-center lg:w-[131px] md:w-[115px] w-[100px] overflow-hidden"
        />
        <img
          data-aos="fade-up"
          loading="lazy"
          src="@/assets/technologies/postgresql.png"
          class="aspect-[1.09] object-contain object-center lg:w-[131px] md:w-[115px] w-[100px] overflow-hidden"
        />
        <img
          data-aos="fade-up"
          loading="lazy"
          src="@/assets/technologies/mongo.png"
          class="aspect-[1.09] object-contain object-center lg:w-[131px] md:w-[115px] w-[100px] overflow-hidden"
        />
        <img
          data-aos="fade-up"
          loading="lazy"
          src="@/assets/technologies/socket.png"
          class="aspect-[1.09] object-contain object-center lg:w-[131px] md:w-[115px] w-[100px] overflow-hidden"
        />
        <img
          data-aos="fade-up"
          loading="lazy"
          src="@/assets/technologies/webrtc.png"
          class="aspect-[1.09] object-contain object-center lg:w-[131px] md:w-[115px] w-[100px] overflow-hidden"
        />
      </div>
      <div
        id="projects"
        data-aos="fade-right"
        class="text-stone-300 text-center md:text-5xl text-3xl font-bold leading-7 self-center whitespace-nowrap md:pt-32 pt-16 max-md:text-4xl max-md:leading-6"
      >
        Projects
      </div>
      <div
        data-aos="fade-right"
        class="text-neutral-400 text-center lg:text-3xl sm:text-2xl text-xl leading-7 self-center mt-8"
      >
        Things I’ve built so far
      </div>
      <div class="self-stretch mt-24 max-md:max-w-full">
        <div
          class="gap-5 flex justify-center flex-wrap md:space-y-0 space-y-5 max-md:flex-col max-md:items-stretch max-md:gap-0"
        >
          <div
            data-aos="fade-up"
            class="flex flex-col bg-[#363636] md:rounded-[20px] rounded-lg items-stretch xl:w-[33%] w-[45%] max-md:w-full max-md:ml-0"
          >
            <div
              class="flex md:rounded-t-[20px] rounded-t-lg overflow-hidden grow flex-col"
            >
              <a href="https://florify.uz" target="_blank">
                <div
                  class="lg:h-[400px] md:h-[320px] h-[400px] bg-white overflow-hidden"
                >
                  <div class="animate_scroll">
                    <img
                      class="w-full object-cover"
                      src="@/assets/images/Florify.png"
                      alt=""
                    />
                  </div>
                </div>
              </a>
              <div class="p-6 pt-0">
                <div
                  data-aos="fade-right"
                  class="text-stone-300 text-3xl font-medium leading-7 whitespace-nowrap mt-7"
                >
                  Florify.uz
                </div>
                <div
                  data-aos="fade-right"
                  class="text-stone-300 text-lg font-light leading-7 mt-4"
                >
                  <h1>Flowers website</h1>
                  I work as a frontend developer
                </div>
                <div
                  data-aos="fade-right"
                  class="flex flex-wrap gap-2 justify-center text-stone-300 text-xs font-light self-center whitespace-nowrap mt-7"
                >
                  <button class="px-3 pb-[1px] border rounded-xl">HTML</button>
                  <button class="px-3 pb-[1px] border rounded-xl">SASS</button>
                  <button class="px-3 pb-[1px] border rounded-xl">
                    TAILWIND
                  </button>
                  <button class="px-3 pb-[1px] border rounded-xl">
                    JavaScript
                  </button>
                  <button class="px-3 pb-[1px] border rounded-xl">
                    NuxtJS
                  </button>
                </div>
                <div
                  class="self-center flex items-stretch justify-center gap-5 mt-7"
                >
                  <div data-aos="fade-right">
                    <a
                      href="https://florify.uz"
                      target="_blank"
                      class="flex items-stretch justify-between gap-2.5"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/83a72e1e636993dd72fed81c9e4d52468bf97c8ac0d45219f8fbe21cd6d66ad8?"
                        class="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                      />
                      <div
                        class="text-white text-base leading-7 underline self-center grow whitespace-nowrap my-auto"
                      >
                        Live Preview
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            class="flex flex-col bg-[#363636] md:rounded-[20px] rounded-lg items-stretch xl:w-[33%] w-[45%] max-md:w-full max-md:ml-0"
          >
            <div
              class="flex md:rounded-t-[20px] rounded-t-lg overflow-hidden grow flex-col"
            >
              <a href="https://dev-dla.newtribe.nl" target="_blank">
                <div
                  class="lg:h-[400px] md:h-[320px] h-[400px] bg-white overflow-hidden"
                >
                  <div class="animate_scroll pb-5">
                    <img
                      class="w-full object-cover"
                      src="@/assets/images/DLA/dla.png"
                      alt=""
                    />
                    <img
                      class="w-full object-cover"
                      src="@/assets/images/DLA/Team.png"
                      alt=""
                    />
                    <img
                      class="w-full object-cover"
                      src="@/assets/images/DLA/client_info.png"
                      alt=""
                    />
                    <img
                      class="rounded-t-[20px] w-full object-cover"
                      src="@/assets/images/DLA/Latest_activity.png"
                      alt=""
                    />
                    <img
                      class="rounded-t-[20px] w-full object-cover"
                      src="@/assets/images/DLA/group_chat.png"
                      alt=""
                    />
                    <img
                      class="rounded-t-[20px] w-full object-cover"
                      src="@/assets/images/DLA/group_chat.png"
                      alt=""
                    />
                  </div>
                </div>
              </a>
              <div class="p-6 pt-0">
                <div
                  data-aos="fade-right"
                  class="text-stone-300 text-3xl font-medium leading-7 whitespace-nowrap mt-7"
                >
                  Dev-dla.newtribe.nl
                </div>
                <div
                  data-aos="fade-right"
                  class="text-stone-300 text-lg font-light leading-7 mt-4"
                >
                  <h1>Digital Legal Assistant</h1>
                  I work as a frontend developer
                </div>
                <div
                  data-aos="fade-right"
                  class="flex flex-wrap gap-2 justify-center text-stone-300 text-xs font-light self-center whitespace-nowrap mt-7"
                >
                  <button class="px-3 pb-[1px] border rounded-xl">HTML</button>
                  <button class="px-3 pb-[1px] border rounded-xl">SASS</button>
                  <button class="px-3 pb-[1px] border rounded-xl">
                    TAILWIND
                  </button>
                  <button class="px-3 pb-[1px] border rounded-xl">
                    JavaScript
                  </button>
                  <button class="px-3 pb-[1px] border rounded-xl">
                    NuxtJS
                  </button>
                </div>
                <div
                  class="self-center flex items-stretch justify-center gap-5 mt-7"
                >
                  <div data-aos="fade-right">
                    <a
                      href="https://dev-dla.newtribe.nl"
                      target="_blank"
                      class="flex items-stretch justify-between gap-2.5"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/83a72e1e636993dd72fed81c9e4d52468bf97c8ac0d45219f8fbe21cd6d66ad8?"
                        class="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                      />
                      <div
                        class="text-white text-base leading-7 underline self-center grow whitespace-nowrap my-auto"
                      >
                        Live Preview
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            class="flex flex-col bg-[#363636] md:rounded-[20px] rounded-lg items-stretch xl:w-[33%] w-[45%] max-md:w-full max-md:ml-0"
          >
            <div
              class="flex md:rounded-t-[20px] rounded-t-lg overflow-hidden grow flex-col"
            >
              <a href="https://dev-ecommsnkr.newtribe.nl" target="_blank">
                <div
                  class="lg:h-[400px] md:h-[320px] h-[400px] overflow-hidden"
                >
                  <div
                    class="lg:h-[400px] md:h-[320px] h-[400px] bg-white overflow-hidden"
                  >
                    <div class="animate_scroll pb-96">
                      <img
                        class="w-full object-cover"
                        src="@/assets/images/Sneackers/desktop.png"
                        alt=""
                      />
                      <img
                        class="w-full object-cover"
                        src="@/assets/images/Sneackers/mobile.png"
                        alt=""
                      />
                      <img
                        class="w-full object-cover"
                        src="@/assets/images/Sneackers/sneakers.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </a>
              <div class="p-6 pt-0">
                <div
                  data-aos="fade-right"
                  class="text-stone-300 text-3xl font-medium leading-7 whitespace-nowrap mt-7"
                >
                  Dev-ecommsnkr.newtribe.nl
                </div>
                <div
                  data-aos="fade-right"
                  class="text-stone-300 text-lg font-light leading-7 mt-4"
                >
                  <h1>Sneackers website</h1>
                  We worked as a team, and the frontend developers are two
                  people
                </div>
                <div
                  data-aos="fade-right"
                  class="flex flex-wrap gap-2 justify-center text-stone-300 text-xs font-light self-center whitespace-nowrap mt-7"
                >
                  <button class="px-3 pb-[1px] border rounded-xl">HTML</button>
                  <button class="px-3 pb-[1px] border rounded-xl">SASS</button>
                  <button class="px-3 pb-[1px] border rounded-xl">
                    JavaScript
                  </button>
                  <button class="px-3 pb-[1px] border rounded-xl">
                    NuxtJS
                  </button>
                </div>
                <div
                  class="self-center flex items-stretch justify-center gap-5 mt-7"
                >
                  <div data-aos="fade-right">
                    <a
                      href="https://dev-ecommsnkr.newtribe.nl/"
                      target="_blank"
                      class="flex items-stretch justify-between gap-2.5"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/83a72e1e636993dd72fed81c9e4d52468bf97c8ac0d45219f8fbe21cd6d66ad8?"
                        class="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                      />
                      <div
                        class="text-white text-base leading-7 underline self-center grow whitespace-nowrap my-auto"
                      >
                        Live Preview
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            class="flex flex-col bg-[#363636] md:rounded-[20px] rounded-lg items-stretch xl:w-[33%] w-[45%] max-md:w-full max-md:ml-0"
          >
            <div
              class="flex md:rounded-t-[20px] rounded-t-lg overflow-hidden grow flex-col"
            >
              <a href="https://florify.uz" target="_blank">
                <div
                  class="lg:h-[400px] md:h-[320px] h-[400px] bg-white overflow-hidden"
                >
                  <div class="animate_scroll">
                    <img
                      class="w-full object-cover"
                      src="@/assets/images/MedBozor.png"
                      alt=""
                    />
                  </div>
                </div>
              </a>
              <div class="p-6 pt-0">
                <div
                  data-aos="fade-right"
                  class="text-stone-300 text-3xl font-medium leading-7 whitespace-nowrap mt-7"
                >
                  MedBozor.uz
                </div>
                <div
                  data-aos="fade-right"
                  class="text-stone-300 text-lg font-light leading-7 mt-4"
                >
                  <h1>Med website</h1>
                  We worked as a team, and the frontend developers are two
                  people
                </div>
                <div
                  data-aos="fade-right"
                  class="flex flex-wrap gap-2 justify-center text-stone-300 text-xs font-light self-center whitespace-nowrap mt-7"
                >
                  <button class="px-3 pb-[1px] border rounded-xl">HTML</button>
                  <button class="px-3 pb-[1px] border rounded-xl">SASS</button>
                  <button class="px-3 pb-[1px] border rounded-xl">
                    JavaScript
                  </button>
                  <button class="px-3 pb-[1px] border rounded-xl">VueJS</button>
                </div>
                <div
                  class="self-center flex items-stretch justify-center gap-5 mt-7"
                >
                  <div data-aos="fade-right">
                    <a
                      href="https://florify.uz"
                      target="_blank"
                      class="flex items-stretch justify-between gap-2.5"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/83a72e1e636993dd72fed81c9e4d52468bf97c8ac0d45219f8fbe21cd6d66ad8?"
                        class="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                      />
                      <div
                        class="text-white text-base leading-7 underline self-center grow whitespace-nowrap my-auto"
                      >
                        Live Preview
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
h1 {
  font-size: 20px;
  font-weight: 900;
}
</style>
