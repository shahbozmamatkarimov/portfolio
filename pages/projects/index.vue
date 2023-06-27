<template>
  <div>
    <!-- <header>
      <div class="container mx-auto px-6">
        <div class="relative max-w-lg mx-auto">
          <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>

          <input
            class="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </header> -->
    <main>
      <section class="container mx-auto p-6">
        <div>
          <div
            class="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-6"
          >
            <!-- <div
                v-for="i in data"
                :key="i.id"
                class="w-full bg-white max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
              >
                <div
                  class="flex items-end justify-end h-44 overflow-hidden w-full bg-cover"
                >
                  <img
                    class="object-cover my-auto mx-auto w-full"
                    :src="i.image"
                    alt="img"
                  />
                </div>
                <div class="btn relative">
                  <i
                    @click="comments(i.id, i.title)"
                    class="bx bxs-message-rounded chat z-10 cursor-pointer text-4xl absolute right-0 text-[black] -bottom-1"
                    ><b
                      class="absolute bottom-8 hidden left-0 text-[#faab0d] text-[20px]"
                      >chat</b
                    ></i
                  >
                </div>
                <div class="p-3">
                  <div class="flex justify-between">
                    <h5
                      id="title"
                      class="font-bold text-lg tracking-tight w-[80%] truncate"
                    >
                      {{ i.title }}
                    </h5>
                    <button
                      class="flex gap-1 bg-gray-400 px-2 rounded-lg items-center"
                    >
                      0<i
                        class="bx bxs-star text-[yellow] star duration-1000"
                      ></i>
                    </button>
                  </div>
                  <p
                    id="description"
                    class="title text-sm font-medium leading-5 text-gray-500 mb-3"
                  >
                    {{ i.description }}
                  </p>
                  <div
                    id="languages"
                    class="flex flex-wrap justify-center gap-1 font-bold text-xs py-1 items-center h-16"
                  >
                    <button
                      class="bg-gray-300 px-3 py-0.5 rounded-full"
                      v-for="lang in i.languages.split(',')"
                      :key="lang"
                    >
                      {{ lang }}
                    </button>
                  </div>
                  <div class="flex justify-center gap-5 items-center py-1">
                    <a id="github_link" target="_blank" href="i.github_link"
                      ><i
                        class="bx bxl-github text-black text-2xl py-1 cursor-pointer"
                      ></i
                    ></a>
                    <a
                      id="link"
                      target="_blank"
                      href="i.link"
                      class="bg-gray-400 px-4 py-1 cursor-pointer rounded-lg shadow-md shadow-gray-400"
                      >Preview</a
                    >
                  </div>
                  <div class="flex justify-between">
                    <time
                      id="start_time"
                      class="text-sm font-medium text-gray-500"
                      >01.02.2023</time
                    >
                    <time
                      id="end_time"
                      class="text-sm font-medium text-gray-400"
                      >01.03.2024</time
                    >
                  </div>
                </div>
              </div> -->
            <div
              class="w-full bg-white max-w-sm rounded-md shadow-md overflow-hidden"
            >
              <div
                class="flex items-end justify-end h-44 overflow-hidden w-full bg-cover"
              >
                <img
                  class="object-cover my-auto mx-auto w-full"
                  src="../../assets/grow_raylor.png"
                  alt="img"
                />
              </div>
              <!-- <div class="btn relative">
                <i
                  @click="comments(i.id, i.title)"
                  class="bx bxs-message-rounded chat z-10 cursor-pointer text-4xl absolute right-0 text-[black] -bottom-1"
                  ><b
                    class="absolute bottom-8 hidden left-0 text-[#faab0d] text-[20px]"
                    >chat</b
                  ></i
                >
              </div> -->
              <div class="p-3">
                <div class="flex justify-between">
                  <h5
                    id="title"
                    class="font-bold text-lg text-black tracking-tight w-[80%] truncate"
                  >
                    Grow Raylor
                  </h5>
                  <button
                    class="flex gap-1 bg-gray-400 px-2 rounded-lg items-center"
                  >
                    0<i
                      class="bx bxs-star text-[yellow] star duration-1000"
                    ></i>
                  </button>
                </div>
                <p
                  id="description"
                  class="title text-sm font-medium leading-5 text-gray-500 mb-3"
                >
                  I work in this project as a frontend developer for Grow
                  Raylor's portfolio
                </p>
                <div
                  id="languages"
                  class="flex flex-wrap justify-center gap-1 font-bold text-xs py-1 items-center h-16"
                >
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    HTML
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    CSS
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    JavaScript
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    VueJS
                  </button>
                </div>
                <div class="flex justify-center gap-5 items-center py-1">
                  <a
                    id="github_link"
                    target="_blank"
                    href="https://github.com/shahbozmamatkarimov/grow_raylor"
                    ><i
                      class="bx bxl-github text-black text-2xl py-1 cursor-pointer"
                    ></i
                  ></a>
                  <a
                    id="link"
                    target="_blank"
                    href="https://grow-raylor-seven.vercel.app/"
                    class="bg-gray-400 px-4 py-1 cursor-pointer rounded-lg shadow-md shadow-gray-400"
                    >Preview</a
                  >
                </div>
                <div class="flex justify-between">
                  <time
                    id="start_time"
                    class="text-sm font-medium text-gray-500"
                    >05.01.2023</time
                  >
                  <time id="end_time" class="text-sm font-medium text-gray-400"
                    >05.04.2023</time
                  >
                </div>
              </div>
            </div>
            <div
              class="w-full bg-white max-w-sm rounded-md shadow-md overflow-hidden"
            >
              <div
                class="flex items-end justify-end h-44 overflow-hidden w-full bg-cover"
              >
                <img
                  class="object-cover my-auto mx-auto w-full"
                  src="../../assets/alibaba.png"
                  alt="img"
                />
              </div>
              <!-- <div class="btn relative">
                <i
                  @click="comments(i.id, i.title)"
                  class="bx bxs-message-rounded chat z-10 cursor-pointer text-4xl absolute right-0 text-[black] -bottom-1"
                  ><b
                    class="absolute bottom-8 hidden left-0 text-[#faab0d] text-[20px]"
                    >chat</b
                  ></i
                >
              </div> -->
              <div class="p-3">
                <div class="flex justify-between">
                  <h5
                    id="title"
                    class="font-bold text-lg text-black tracking-tight w-[80%] truncate"
                  >
                    Alibaba clone
                  </h5>
                  <button
                    class="flex gap-1 bg-gray-400 px-2 rounded-lg items-center"
                  >
                    0<i
                      class="bx bxs-star text-[yellow] star duration-1000"
                    ></i>
                  </button>
                </div>
                <p
                  id="description"
                  class="title text-sm font-medium leading-5 text-gray-500 mb-3"
                >
                  I work in this project as a frontend developer for Alibaba
                  website's clone for exam of Najot ta'lim
                </p>
                <div
                  id="languages"
                  class="flex flex-wrap justify-center gap-1 font-bold text-xs py-1 items-center h-16"
                >
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    HTML
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    SASS/SCSS
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    Tailwind
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    JavaScript
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    Nuxt
                  </button>
                </div>
                <div class="flex justify-center gap-5 items-center py-1">
                  <a
                    id="github_link"
                    target="_blank"
                    href="https://github.com/shahbozmamatkarimov/alibaba_clone"
                    ><i
                      class="bx bxl-github text-black text-2xl py-1 cursor-pointer"
                    ></i
                  ></a>
                  <a
                    id="link"
                    target="_blank"
                    href="https://alibaba-clone-rho.vercel.app/"
                    class="bg-gray-400 px-4 py-1 cursor-pointer rounded-lg shadow-md shadow-gray-400"
                    >Preview</a
                  >
                </div>
                <div class="flex justify-between">
                  <time
                    id="start_time"
                    class="text-sm font-medium text-gray-500"
                    >05.01.2023</time
                  >
                  <time id="end_time" class="text-sm font-medium text-gray-400"
                    >05.04.2023</time
                  >
                </div>
              </div>
            </div>
            <div
              class="w-full bg-white max-w-sm rounded-md shadow-md overflow-hidden"
            >
              <div
                class="flex items-end justify-end h-44 overflow-hidden w-full bg-cover"
              >
                <img
                  class="object-cover my-auto mx-auto w-full"
                  src="../../assets/academy.png"
                  alt="img"
                />
              </div>
              <!-- <div class="btn relative">
                <i
                  @click="comments(i.id, i.title)"
                  class="bx bxs-message-rounded chat z-10 cursor-pointer text-4xl absolute right-0 text-[black] -bottom-1"
                  ><b
                    class="absolute bottom-8 hidden left-0 text-[#faab0d] text-[20px]"
                    >chat</b
                  ></i
                >
              </div> -->
              <div class="p-3">
                <div class="flex justify-between">
                  <h5
                    id="title"
                    class="font-bold text-lg text-black tracking-tight w-[80%] truncate"
                  >
                    Academy
                  </h5>
                  <button
                    class="flex gap-1 bg-gray-400 px-2 rounded-lg items-center"
                  >
                    0<i
                      class="bx bxs-star text-[yellow] star duration-1000"
                    ></i>
                  </button>
                </div>
                <p
                  id="description"
                  class="title text-sm font-medium leading-5 text-gray-500 mb-3"
                >
                  I work in this project as a frontend developer for Academy
                  website for exam of Najot talim
                </p>
                <div
                  id="languages"
                  class="flex flex-wrap justify-center gap-1 font-bold text-xs py-1 items-center h-16"
                >
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    HTML
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    SASS/SCSS
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    Tailwind
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    JavaScript
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    Nuxt
                  </button>
                </div>
                <div class="flex justify-center gap-5 items-center py-1">
                  <a
                    id="github_link"
                    target="_blank"
                    href="https://github.com/shahbozmamatkarimov/academy"
                    ><i
                      class="bx bxl-github text-black text-2xl py-1 cursor-pointer"
                    ></i
                  ></a>
                  <a
                    id="link"
                    target="_blank"
                    href="https://academy-gamma.vercel.app/"
                    class="bg-gray-400 px-4 py-1 cursor-pointer rounded-lg shadow-md shadow-gray-400"
                    >Preview</a
                  >
                </div>
                <div class="flex justify-between">
                  <time
                    id="start_time"
                    class="text-sm font-medium text-gray-500"
                    >05.01.2023</time
                  >
                  <time id="end_time" class="text-sm font-medium text-gray-400"
                    >05.04.2023</time
                  >
                </div>
              </div>
            </div>

            <div
              class="w-full bg-white max-w-sm rounded-md shadow-md overflow-hidden"
            >
              <div
                class="flex items-end justify-end h-44 overflow-hidden w-full bg-cover"
              >
                <img
                  class="object-cover my-auto mx-auto w-full"
                  src="../../assets/tatu.png"
                  alt="img"
                />
              </div>
              <!-- <div class="btn relative">
                <i
                  @click="comments(i.id, i.title)"
                  class="bx bxs-message-rounded chat z-10 cursor-pointer text-4xl absolute right-0 text-[black] -bottom-1"
                  ><b
                    class="absolute bottom-8 hidden left-0 text-[#faab0d] text-[20px]"
                    >chat</b
                  ></i
                >
              </div> -->
              <div class="p-3">
                <div class="flex justify-between">
                  <h5
                    id="title"
                    class="font-bold text-lg text-black tracking-tight w-[80%] truncate"
                  >
                    Tatu test project
                  </h5>
                  <button
                    class="flex gap-1 bg-gray-400 px-2 rounded-lg items-center"
                  >
                    0<i
                      class="bx bxs-star text-[yellow] star duration-1000"
                    ></i>
                  </button>
                </div>
                <p
                  id="description"
                  class="title text-sm font-medium leading-5 text-gray-500 mb-3"
                >
                  Real project <br /><br />
                  I participated in this project as a full stack developer. And
                  this project is still in progress
                </p>
                <div
                  id="languages"
                  class="flex flex-wrap justify-center gap-1 font-bold text-xs py-1 items-center h-16"
                >
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    HTML
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    CSS
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    JavaScript
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    VueJS
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    Nuxt
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    Nest
                  </button>
                </div>
                <div class="flex justify-center gap-5 items-center py-1">
                  <a
                    id="github_link"
                    target="_blank"
                    href="https://github.com/shahbozmamatkarimov/test_project"
                    ><i
                      class="bx bxl-github text-black text-2xl py-1 cursor-pointer"
                    ></i
                  ></a>
                  <a
                    id="link"
                    target="_blank"
                    href="https://test-project-pi-nine.vercel.app/"
                    class="bg-gray-400 px-4 py-1 cursor-pointer rounded-lg shadow-md shadow-gray-400"
                    >Preview</a
                  >
                </div>
                <div class="flex justify-between">
                  <time
                    id="start_time"
                    class="text-sm font-medium text-gray-500"
                    >06.15.2023</time
                  >
                  <time id="end_time" class="text-sm font-medium text-gray-400"
                    >Precent</time
                  >
                </div>
              </div>
            </div>
            <div
              class="w-full bg-white max-w-sm rounded-md shadow-md overflow-hidden"
            >
              <div
                class="flex items-end justify-end h-44 overflow-hidden w-full bg-cover"
              >
                <img
                  class="object-cover my-auto mx-auto w-full"
                  src="../../assets/flowers.png"
                  alt="img"
                />
              </div>
              <!-- <div class="btn relative">
                <i
                  @click="comments(i.id, i.title)"
                  class="bx bxs-message-rounded chat z-10 cursor-pointer text-4xl absolute right-0 text-[black] -bottom-1"
                  ><b
                    class="absolute bottom-8 hidden left-0 text-[#faab0d] text-[20px]"
                    >chat</b
                  ></i
                >
              </div> -->
              <div class="p-3">
                <div class="flex justify-between">
                  <h5
                    id="title"
                    class="font-bold text-lg text-black tracking-tight w-[80%] truncate"
                  >
                    FloraGo
                  </h5>
                  <button
                    class="flex gap-1 bg-gray-400 px-2 rounded-lg items-center"
                  >
                    0<i
                      class="bx bxs-star text-[yellow] star duration-1000"
                    ></i>
                  </button>
                </div>
                <p
                  id="description"
                  class="title text-sm font-medium leading-5 text-gray-500 mb-3"
                >
                  Real project <br />
                  <br />
                  I participated in this project as a full stack developer. And
                  this project is still in progress
                </p>
                <div
                  id="languages"
                  class="flex flex-wrap justify-center gap-1 font-bold text-xs py-1 items-center h-16"
                >
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    HTML
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    CSS
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    JavaScript
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    VueJS
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    Nuxt
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    Nest
                  </button>
                </div>
                <div class="flex justify-center gap-5 items-center py-1">
                  <a
                    id="github_link"
                    target="_blank"
                    href="https://github.com/shahbozmamatkarimov/flowers"
                    ><i
                      class="bx bxl-github text-black text-2xl py-1 cursor-pointer"
                    ></i
                  ></a>
                  <a
                    id="link"
                    target="_blank"
                    href="https://flowers-brown.vercel.app/"
                    class="bg-gray-400 px-4 py-1 cursor-pointer rounded-lg shadow-md shadow-gray-400"
                    >Preview</a
                  >
                </div>
                <div class="flex justify-between">
                  <time
                    id="start_time"
                    class="text-sm font-medium text-gray-500"
                    >06.01.2023</time
                  >
                  <time id="end_time" class="text-sm font-medium text-gray-400"
                    >Precent</time
                  >
                </div>
              </div>
            </div>
            <div
              class="w-full bg-white max-w-sm rounded-md shadow-md overflow-hidden"
            >
              <div
                class="flex items-end justify-end h-44 overflow-hidden w-full bg-cover"
              >
                <img
                  class="object-cover my-auto mx-auto w-full"
                  src="../../assets/shop.png"
                  alt="img"
                />
              </div>
              <!-- <div class="btn relative">
                <i
                  @click="comments(i.id, i.title)"
                  class="bx bxs-message-rounded chat z-10 cursor-pointer text-4xl absolute right-0 text-[black] -bottom-1"
                  ><b
                    class="absolute bottom-8 hidden left-0 text-[#faab0d] text-[20px]"
                    >chat</b
                  ></i
                >
              </div> -->
              <div class="p-3">
                <div class="flex justify-between">
                  <h5
                    id="title"
                    class="font-bold text-lg text-black tracking-tight w-[80%] truncate"
                  >
                    Ecommerce website
                  </h5>
                  <button
                    class="flex gap-1 bg-gray-400 px-2 rounded-lg items-center"
                  >
                    0<i
                      class="bx bxs-star text-[yellow] star duration-1000"
                    ></i>
                  </button>
                </div>
                <p
                  id="description"
                  class="title text-sm font-medium leading-5 text-gray-500 mb-3"
                >
                  Real project <br /><br />
                  I participated in this project as a full stack developer. And
                  this project is still in progress
                </p>
                <div
                  id="languages"
                  class="flex flex-wrap justify-center gap-1 font-bold text-xs py-1 items-center h-16"
                >
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    HTML
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    Tailwind
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    SCSS/SASS
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    JavaScript
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    Nuxt
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    NodeJS
                  </button>
                  <button class="bg-gray-300 px-3 py-0.5 rounded-full">
                    Nest
                  </button>
                </div>
                <div class="flex justify-center gap-5 items-center py-1">
                  <a
                    id="github_link"
                    target="_blank"
                    href="https://github.com/shahbozmamatkarimov/shop"
                    ><i
                      class="bx bxl-github text-black text-2xl py-1 cursor-pointer"
                    ></i
                  ></a>
                  <a
                    id="link"
                    target="_blank"
                    href="https://shop-delta-one.vercel.app/"
                    class="bg-gray-400 px-4 py-1 cursor-pointer rounded-lg shadow-md shadow-gray-400"
                    >Preview</a
                  >
                </div>
                <div class="flex justify-between">
                  <time
                    id="start_time"
                    class="text-sm font-medium text-gray-500"
                    >06.01.2023</time
                  >
                  <time id="end_time" class="text-sm font-medium text-gray-400"
                    >Precent</time
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// const { data, error } = await useFetch(
//   "http://localhost:4000/api/project/findall"
// );

// console.log(error);

const comments = (id, title) => {
  const router = useRouter();
  router.push(`/projects/${id}/${title.split(" ").join("_")}`);
};
</script>

<style lang="scss" scoped>
.title {
  overflow: hidden !important;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  height: 5.2rem;
}

.imgbtn:hover {
  .btn {
    display: flex;
  }
}

@keyframes ping {
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.star:active {
  animation: ping 5s cubic-bezier(0.9, 0.9, 0.9, 0.9) ease;
  transform: scale(20);
}

.chat:hover {
  b {
    display: inline-block;
  }
}
</style>
