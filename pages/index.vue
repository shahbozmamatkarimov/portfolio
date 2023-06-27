<template>
  <div>
    <main class="text-white container mx-auto">
      <section
        class="flex justify-between items-center lg:flex-row flex-col lg:mb-0 mb-20 relative -mt-20 gap-20 min-h-[95vh]"
      >
        <div
          class="md:text-3xl text-xl md:leading-[4rem] leading-5 pt-20 lg:w-[55%] w-full"
        >
          <h1 class="font-bold">Hello everyone,</h1>
          <h1 class="font-bold text-gray-200 leading-9 pb-4">
            <span class="min-w-fit inline-block">I am</span>
            <span class="min-w-fit inline-block"
              >a full stack web developer.</span
            >
          </h1>
          <p class="text-gray-300 font-medium">
            <!-- {{ store.description }} -->
            My mission is to deliver high quality and fast website to clients
          </p>
          <div
            class="flex justify-between md:text-xl text-sm items-center min-w-fit py-10"
          >
            <router-link to="/projects">
              <button
                class="flex gap-2 items-center font-bold bg-[#faab0d] border-4 border-[#faab0d] hover:bg-transparent py-2 md:px-10 px-5 rounded-lg"
              >
                Projects<i class="bx bxs-credit-card-front"></i>
              </button>
            </router-link>
            <!-- <button
              class="font-bold min-w-fit ml-5 border-4 border-[#faab0d] hover:bg-[#faab0d] py-2 md:px-10 px-5 rounded-lg"
            >
              <i class="bx bxs-download"></i> Resume
            </button> -->
          </div>
        </div>
        <div class="right-0 lg:absolute">
          <img
            class="rounded-full lg:h-80 object-cover"
            src="../public/round.png"
            alt="img"
          />
        </div>
      </section>
      <section
        class="flex flex-col justify-center items-center mx-auto min-h-screen"
      >
        <div class="mx-auto w-full">
          <div class="flex justify-between items-end">
            <h2
              class="md:text-3xl text-lg lg:text-4xl tracking-tight font-extrabold"
            >
              Recent projects
            </h2>
            <p class="text-[#faab0d] font-bold">
              <router-link to="/projects">view all</router-link>
            </p>
          </div>
        </div>
        <div class="container mx-auto">
          <div>
            <div
              class="grid place-items-center gap-6 md:grid-cols-2 xl:grid-cols-3 mt-6"
            >
              <!-- <div
                v-show="index > store.projects.length - 4"
                v-for="(i, index) in store.projects"
                :key="i.id"
                class="w-full bg-white max-w-sm rounded-md shadow-md overflow-hidden"
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
                    src="../assets/tatu.png"
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
                    I participated in this project as a full stack developer.
                    And this project is still in progress
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
                    <time
                      id="end_time"
                      class="text-sm font-medium text-gray-400"
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
                    src="../assets/flowers.png"
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
                    I participated in this project as a full stack developer.
                    And this project is still in progress
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
                    <time
                      id="end_time"
                      class="text-sm font-medium text-gray-400"
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
                    src="../assets/shop.png"
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
                    I participated in this project as a full stack developer.
                    And this project is still in progress
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
                    <time
                      id="end_time"
                      class="text-sm font-medium text-gray-400"
                      >Precent</time
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="flex justify-center items-center min-h-screen">
        <div class="py-8 mx-auto w-full">
          <div class="flex justify-between items-center h-12 md:pb-0 pb-5">
            <h2
              class="md:mb-4 md:text-3xl text-lg lg:text-4xl tracking-tight font-extrabold"
            >
              Recent posts
            </h2>
            <p class="text-[#faab0d] font-bold">
              <router-link to="/blog">view all</router-link>
            </p>
          </div>
          <!-- <div id="contents" class="flex justify-between flex-wrap gap-2"></div> -->
          <div id="contents" class="grid lg:grid-cols-3 gap-5">
            <div
              class="bg-white text-black p-2 rounded-lg border-b-4 border-r-2 border-gray-600 shadow-md shadow-white"
              v-for="i in 3"
              :key="i"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              dolorem aliquid aspernatur consectetur consequuntur distinctio
              dignissimos laborum, explicabo sed, aperiam similique sint
              voluptatem quas iste doloribus nesciunt. Aut, non porro. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem
              aliquid aspernatur consectetur consequuntur distinctio dignissimos
              laborum, explicabo sed, aperiam similique sint voluptatem quas
              iste doloribus nesciunt. Aut, non porro.
            </div>
          </div>
        </div>
      </section>
      <section class="flex flex-col justify-center items-center min-h-screen">
        <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold">
          Services
        </h2>

        <div>
          <ul
            class="flex justify-center items-center flex-wrap sm:mb-0 mb-20 gap-10"
          >
            <!-- <li class="text-center" v-for="i in store.skills" :key="i">
              <img
                class="rounded-full lg:h-40 lg:w-40 md:h-20 md:w-20 sm:h-16 sm:w-16 w-10 h-10 object-cover"
                :src="i.image"
                alt="img"
              />
              <p class="text-white font-bold sm:text-md text-xs">
                {{ i.name }}
              </p>
            </li> -->
            <li class="text-center" v-for="i in store.skills" :key="i">
              <img
                class="rounded-full lg:h-40 lg:w-40 md:h-20 md:w-20 sm:h-16 sm:w-16 w-10 h-10 object-cover"
                src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"
                alt="img"
              />
              <p class="text-white font-bold sm:text-md text-xs">HTML</p>
            </li>
            <li class="text-center">
              <img
                class="rounded-full lg:h-40 lg:w-40 md:h-20 md:w-20 sm:h-16 sm:w-16 w-10 h-10 object-cover"
                src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                alt="img"
              />
              <p class="text-white font-bold sm:text-md text-xs">CSS</p>
            </li>
            <li class="text-center">
              <img
                class="rounded-full lg:h-40 lg:w-40 md:h-20 md:w-20 sm:h-16 sm:w-16 w-10 h-10 object-cover"
                src="https://images.ctfassets.net/twhs6sq7mv9q/2ygKhYdEDj8QZYr5uBhKaH/886a99a220062bd712cadcdd46997518/sass-logo.jpg"
                alt="img"
              />
              <p class="text-white font-bold sm:text-md text-xs">SASS/SCSS</p>
            </li>
            <li class="text-center">
              <img
                class="rounded-full lg:h-40 lg:w-40 md:h-20 md:w-20 sm:h-16 sm:w-16 w-10 h-10 object-cover"
                src="https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg"
                alt="img"
              />
              <p class="text-white font-bold sm:text-md text-xs">Tailwind</p>
            </li>
            <li class="text-center">
              <img
                class="rounded-full lg:h-40 lg:w-40 md:h-20 md:w-20 sm:h-16 sm:w-16 w-10 h-10 object-cover"
                src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
                alt="img"
              />
              <p class="text-white font-bold sm:text-md text-xs">JavaScript</p>
            </li>
            <li class="text-center">
              <img
                class="rounded-full lg:h-40 lg:w-40 md:h-20 md:w-20 sm:h-16 sm:w-16 w-10 h-10 object-cover"
                src="https://images.ctfassets.net/ooa29xqb8tix/RrX9HCiZ8qPoIpJSlHphR/f9778b44e2b768d31fafb4ac70956682/vue-logo.png?w=400&q=50"
                alt="img"
              />
              <p class="text-white font-bold sm:text-md text-xs">VueJS</p>
            </li>
            <li class="text-center">
              <img
                class="rounded-full lg:h-40 lg:w-40 md:h-20 md:w-20 sm:h-16 sm:w-16 w-10 h-10 object-cover"
                src="https://nuxtjs.ir/logos/nuxt-icon-white.png"
                alt="img"
              />
              <p class="text-white font-bold sm:text-md text-xs">Nuxt</p>
            </li>
            <li class="text-center">
              <img
                class="rounded-full lg:h-40 lg:w-40 md:h-20 md:w-20 sm:h-16 sm:w-16 w-10 h-10 object-cover"
                src="https://pbs.twimg.com/profile_images/1110148780991623201/vlqCsAVP_400x400.png"
                alt="img"
              />
              <p class="text-white font-bold sm:text-md text-xs">NestJS</p>
            </li>
            <li class="text-center">
              <img
                class="rounded-full lg:h-40 lg:w-40 md:h-20 md:w-20 sm:h-16 sm:w-16 w-10 h-10 object-cover"
                src="https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png"
                alt="img"
              />
              <p class="text-white font-bold sm:text-md text-xs">NodeJS</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
const store = reactive({
  skills: "",
  projects: "",
  description: "",
});

const comments = (id, title) => {
  const router = useRouter();
  router.push(`/projects/${id}/${title.split(" ").join("_")}`);
};

fetch("http://localhost:4000/api/project/findall")
  .then((data) => {
    return data.json();
  })
  .then((post) => {
    store.projects = post;
  })
  .catch((error) => {
    console.log(error);
  });

const contentFunc = async () => {
  fetch("http://localhost:4000/api/content/findall")
    .then((data) => {
      return data.json();
    })
    .then((content) => {
      const contents = document.querySelector("#contents");
      if (contents.innerHTML == "") {
        for (let i in content) {
          if (+i > content.length - 4) {
            let div = document.createElement("div");
            div.className =
              "bg-white text-black p-5 rounded-lg shadow-md lg:w-[30%] md:w-[49%] w-full shadow-gray-100 border-b-4 border-r-2 border-gray-500 mb-5";
            if (+i == content.length - 1) {
              div.className =
                "bg-white text-black p-5 rounded-lg shadow-md lg:w-[30%] w-full shadow-gray-100 border-b-4 border-r-2 border-gray-500 mb-5";
            }
            div.innerHTML += content[i].content;
            contents.appendChild(div);
          }
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const descriptionFunc = async () => {
  fetch("http://localhost:4000/api/profile/findall")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      store.description = data[0].description;
    })
    .catch((error) => {
      console.log(error);
    });
};

const skillsFunc = async () => {
  fetch("http://localhost:4000/api/skills/findall")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      store.skills = data;
    })
    .catch((error) => {
      console.log(error);
    });
};

onMounted(() => {
  contentFunc();
  skillsFunc();
  descriptionFunc();
});
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
