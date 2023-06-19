// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Portfolio",
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
        {
          rel: "icon",
          href: "https://i.ibb.co/PQ4mRtC/myphoto-Round.png",
        }
      ],
      meta: [
        {
          property: "og:title",
          content: "Shahboz Mamatkarimov",
        },
        {
          property: "og:image",
          content: "https://ibb.co/TcDfsK9"
        },
        {
          property: "og:description",
          content: "Full stack NodeJS developer",
        },
        {
          name: "description",
          content: "Full Stack NodeJS developer"
        }
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
