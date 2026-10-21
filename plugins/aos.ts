import AOS from "aos"

import "aos/dist/aos.css"

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== "undefined") {
    nuxtApp.AOS = AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60, disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches }) // eslint-disable-line new-cap
  }
})