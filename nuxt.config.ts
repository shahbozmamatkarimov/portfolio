// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Shahboz Mamatkarimov — Software Engineer",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#09090b" },
        { name: "author", content: "Shahboz Mamatkarimov" },
        { name: "robots", content: "index, follow" },
        { property: "og:site_name", content: "Shahboz Mamatkarimov" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "en_US" },
      ],
      link: [
        { rel: "preconnect", href: "https://unpkg.com", crossorigin: "" },
        // icon font loads without blocking first paint
        { rel: "preload", as: "style", href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
          media: "print",
          onload: "this.media='all'",
        },
        { rel: "icon", type: "image/svg+xml", href: "/logo.svg?v=2" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png?v=2" },
        { rel: "shortcut icon", href: "/favicon-32.png?v=2" },
        { rel: "apple-touch-icon", href: "/favicon.png?v=2" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      noscript: [{ innerHTML: '<link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css">' }],
    },
  },
  hooks: {
    // stop the browser prefetching every screenshot and icon during first load
    "build:manifest": (manifest) => {
      for (const key in manifest) {
        const entry = manifest[key];
        if (/\.(webp|png|jpe?g|gif|svg)$/i.test(key) || entry.isDynamicEntry) entry.prefetch = false;
        entry.preload = entry.preload && !/\.(webp|png|jpe?g|gif|svg)$/i.test(key);
      }
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
