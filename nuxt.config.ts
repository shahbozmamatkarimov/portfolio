// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Shahboz Mamatkarimov",
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
        },
        { rel: "icon", type: "image/svg+xml", href: "/logo.svg?v=2" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png?v=2" },
        { rel: "shortcut icon", href: "/favicon-32.png?v=2" },
        { rel: "apple-touch-icon", href: "/favicon.png?v=2" },
      ],
    },
  },
  plugins: [{ src: "~/plugins/aos", mode: "client", ssr: false }],
  experimental: {
    // workaround: radix3 route-rules manifest crashes the client router on nuxt 3.8.x
    appManifest: false,
  },
  imports: {
    autoImport: true,
  },
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    // set NUXT_TELEGRAM_TOKEN and NUXT_TELEGRAM_CHAT_ID in the environment
    telegramToken: "",
    telegramChatId: "",
  },
  // runtimeConfig: {
  //   public: {
  //     apiBaseUrl: process.env.API_BASE_URL,
  //     isDemo: process.env.IS_DEMO,
  //   },
  // },
});
