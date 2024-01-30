<template>
  <footer
    v-if="$router.currentRoute.value.name != 'resume'"
    class="flex flex-col justify-center items-center py-12 md:px-10 border-t border-white/50 px-5"
  >
    <div class="flex w-full items-stretch justify-between gap-5 mt-5 pr-1.5">
      <img @click="$router.push('/')" loading="lazy" src="/grey_logo.svg" class="h-10" />
      <div
        class="self-center sm:flex hidden lg:flex-row flex-col lg:justify-between justify-center gap-5 my-auto items-start"
      >
        <div
          class="text-neutral-400 text-lg leading-7 whitespace-nowrap text-center w-full"
        >
          <a href="tel:+998991422303">+998 991422303</a>
        </div>
        <div class="text-neutral-400 text-lg leading-7">
          <a href="mailto:shahbozmamatkarimov2303@gmail.com"
            >shahbozmamatkarimov2303@gmail.com</a
          >
        </div>
      </div>
      <div class="flex gap-3 mt-2">
        <a href="https://github.com/shahbozmamatkarimov" target="_blank">
          <img
            class="h-7 rounded-full"
            src="@/assets/technologies/github.svg"
            alt=""
          />
        </a>
        <a
          href="https://www.linkedin.com/in/shahboz-mamatkarimov-12ba00267"
          target="_blank"
        >
          <img
            class="h-8 rounded-full w-8"
            src="@/assets/technologies/linkedin.png"
            alt=""
          />
        </a>
      </div>
    </div>
    <div
      class="self-center sm:hidden flex mt-5 lg:flex-row flex-col lg:justify-between justify-center gap-5 my-auto items-start"
    >
      <div
        class="text-neutral-400 text-lg leading-7 whitespace-nowrap text-center w-full"
      >
        <a href="tel:+998991422303">+998 991422303</a>
      </div>
      <div class="text-neutral-400 text-lg leading-7">
        <a href="mailto:shahbozmamatkarimov2303@gmail.com"
          >shahbozmamatkarimov2303@gmail.com</a
        >
      </div>
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1c84cee94683edb30a7e84f328d5ea0fe5f28bdf7b953f10452b676c69208e3?"
      class="aspect-[500] object-contain object-center w-full stroke-[2px] stroke-slate-600 overflow-hidden self-stretch mt-11 max-md:max-w-full max-md:mt-10"
    />
    <div
      class="self-stretch flex w-full lg:justify-between justify-center gap-5 mt-16 items-start max-md:max-w-full flex-wrap max-md:mt-10"
    >
      <div
        class="flex items-stretch justify-between gap-5 mt-1.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center lg:text-xl whitespace-nowrap"
      >
        <router-link
          to="/#home"
          class="text-neutral-400 text-center font-medium leading-7"
        >
          Home
        </router-link>
        <router-link
          to="/#technologies"
          class="text-neutral-400 text-center font-medium leading-7"
        >
          Tech Stack
        </router-link>
        <router-link
          to="/#projects"
          class="text-neutral-400 text-center font-medium leading-7"
        >
          Projects
        </router-link>
        <router-link
          to="/resume"
          class="text-neutral-400 text-center font-medium leading-7"
        >
          Resume
        </router-link>
        <div>
          <router-link
            to="/contact"
            class="text-neutral-400 text-center font-medium leading-7"
          >
            Contact
          </router-link>
        </div>
      </div>
      <div
        class="text-neutral-400 text-center mt-1.5 text-lg leading-7 bg-clip-text text-[linear-gradient(90deg,#13B0F5_-2.06%,#E70FAA_100%)]"
      >
        <span class="text-neutral-400">Designed and built by </span>Shahboz
        Mamatkarimov
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
