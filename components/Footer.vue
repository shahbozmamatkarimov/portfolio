<template>
  <!-- Footer container -->
  <footer class="text-center text-neutral-600 lg:text-left sm:px-10 px-5">
    <div class="container mx-auto">
      <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. -->
      <div class="md:mx-6 py-10 text-center md:text-left">
        <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <!-- Tailwind Elements section -->
          <div>
            <h1
              class="mb-4 flex items-center justify-center font-semibold md:justify-start"
            >
              Shahboz Mamatkarimov
            </h1>
            <p>
              <!-- {{ store.description }} -->
              My mission is to deliver high quality and fast website to clients
            </p>
            <!-- Social network icons container -->
            <div class="flex gap-5 flex-wrap justify-center items-center my-5">
              <a
                target="_blank"
                :href="i.link"
                class="text-neutral-600 dark:text-neutral-200"
                v-for="i in store.networks"
                :key="i.id"
              >
                <i class="text-2xl" :class="i.icon"></i>
              </a>
            </div>
          </div>
          <!-- Products section -->
          <div class="">
            <h6
              class="mb-4 flex justify-center font-semibold uppercase"
            >
              Services
            </h6>
            <ul
              class="flex items-center justify-center flex-wrap mx-auto gap-5"
            >
              <!-- <li class="text-center" v-for="i in store.skills" :key="i">
                <img
                  class="rounded-full h-7 w-7 mx-auto"
                  :src="i.image"
                  alt="img"
                />
                <p class="text-black text-xs">{{ i.name }}</p>
              </li> -->
              <li class="text-center">
                <img
                  class="rounded-full w-10 h-10 object-cover"
                  src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"
                  alt="img"
                />
              </li>
              <li class="text-center">
                <img
                  class="rounded-full w-10 h-10 object-cover"
                  src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                  alt="img"
                />
              </li>
              <li class="text-center">
                <img
                  class="rounded-full w-10 h-10 object-cover"
                  src="https://images.ctfassets.net/twhs6sq7mv9q/2ygKhYdEDj8QZYr5uBhKaH/886a99a220062bd712cadcdd46997518/sass-logo.jpg"
                  alt="img"
                />
              </li>
              <li class="text-center">
                <img
                  class="rounded-full w-10 h-10 object-cover"
                  src="https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg"
                  alt="img"
                />
              </li>
              <li class="text-center">
                <img
                  class="rounded-full w-10 h-10 object-cover"
                  src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
                  alt="img"
                />
              </li>
              <li class="text-center">
                <img
                  class="rounded-full w-10 h-10 object-cover"
                  src="https://images.ctfassets.net/ooa29xqb8tix/RrX9HCiZ8qPoIpJSlHphR/f9778b44e2b768d31fafb4ac70956682/vue-logo.png?w=400&q=50"
                  alt="img"
                />
              </li>
              <li class="text-center">
                <img
                  class="rounded-full w-10 h-10 object-cover"
                  src="https://nuxtjs.ir/logos/nuxt-icon-white.png"
                  alt="img"
                />
              </li>
              <li class="text-center">
                <img
                  class="rounded-full w-10 h-10 object-cover"
                  src="https://pbs.twimg.com/profile_images/1110148780991623201/vlqCsAVP_400x400.png"
                  alt="img"
                />
              </li>
              <li class="text-center">
                <img
                  class="rounded-full w-10 h-10 object-cover"
                  src="https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png"
                  alt="img"
                />
              </li>
            </ul>
          </div>
          <!-- Useful links section -->
          <div class="">
            <h6
              class="mb-4 flex justify-center font-semibold uppercase md:justify-start"
            >
              Useful links
            </h6>
            <ul class="flex flex-col gap-1">
              <li v-for="i in navbar" :key="i.id">
                <router-link class="w-28 inline-block" :to="i.path">
                  {{ i.name }}
                </router-link>
              </li>
            </ul>
          </div>
          <!-- Contact section -->
          <div class="text-lg">
            <h6
              class="mb-4 flex justify-center font-semibold uppercase md:justify-start"
            >
              Contact
            </h6>
            <p
              class="mb-1 flex gap-2 items-center justify-center md:justify-start"
            >
              <i class="bx bx-home"></i> {{ store.location }}
            </p>
            <p
              class="mb-1 flex gap-2 items-center justify-center md:justify-start sm:text-md text-xs"
            >
              <i class="bx bx-envelope"></i>
              {{ store.email }}
            </p>
            <p
              class="mb-1 flex gap-2 items-center justify-center md:justify-start"
            >
              <i class="bx bx-phone"></i>
              {{ store.phone }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { navbar } from "../constants/navbar";

const store = reactive({
  description: "",
  location: "",
  email: "",
  phone: "",
  networks: "",
  skills: "",
});

store.location = "Toshkent, Chilonzor, 9 ST";
store.email = "shahbozmamatkarimov@gmail.com";
store.phone = "+998 99 142 23 03";
store.networks = [
  {
    icon: "bx bxl-github",
    link: "https://github.com/shahbozmamatkarimov",
  },
  {
    icon: "bx bxl-telegram",
    link: "https://t.me/shakhboz23",
  },
  {
    icon: "bx bxl-facebook-circle",
    link: "https://github.com/shahbozmamatkarimov",
  },
  {
    icon: "bx bxl-instagram-alt",
    link: "https://www.instagram.com/shahbozmamatkarimov2303/",
  },
  {
    icon: "bx bxl-twitter",
    link: "https://twitter.com/shahboz2303",
  },
];

// const descriptionFunc = async () => {
//   fetch("http://localhost:4000/api/profile/findall")
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => {
//       store.description = data[0].description;
//       store.location =
//         data[0].city + "," + data[0].district + "," + data[0].address;
//       store.phone = data[0].phone;
//       store.email = data[0].email;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// const skillsFunc = async () => {
//   fetch("http://localhost:4000/api/skills/findall")
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => {
//       store.skills = data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// const networkFunc = async () => {
//   fetch("http://localhost:4000/api/socialnetworks/findall")
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => {
//       store.networks = data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// onMounted(() => {
//   descriptionFunc();
//   networkFunc();
//   skillsFunc();
// });
</script>

<style lang="scss" scoped>
.router-link-active {
  color: #edae30;
  transition-duration: 1s;
  font-weight: bold;
}
</style>
