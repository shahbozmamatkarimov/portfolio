<template>
  <nav
    class="flex items-center justify-center fixed top-0 left-0 z-50 shadow-2xl shadow-white/20 w-full"
  >
    <div
      class="self-stretch max-w-[1800px] mx-auto py-2 backdrop-blur-lg w-full md:px-10 px-5 flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap"
    >
      <img
        @click="$router.push('/')"
        loading="lazy"
        src="/logo.svg"
        class="h-10"
      />
      <div
        class="flex justify-between items-center gap-5 md:text-xl sm:text-[16px] text-sm"
      >
        <div class="sm:flex hidden gap-5">
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
        <div class="flex gap-3">
          <router-link
            to="https://github.com/shahbozmamatkarimov"
            target="_blank"
          >
            <img
              class="h-7 rounded-full"
              src="@/assets/technologies/github.svg"
              alt=""
            />
          </router-link>
          <router-link
            to="https://www.linkedin.com/in/shahboz-mamatkarimov-12ba00267"
            target="_blank"
          >
            <img
              class="h-8 rounded-full w-8"
              src="@/assets/technologies/linkedin.png"
              alt=""
            />
          </router-link>
        </div>
        <div @click="menubar = !menubar" class="sm:hidden block">
          <img src="@/assets/svg/menu.svg" alt="" />
        </div>
      </div>
    </div>

    <!-- mobile navbar modal -->
    <div
      v-if="menubar"
      data-aos="fade-left"
      class="sm:hidden flex flex-col items-center justify-between text-2xl fixed top-[55px] py-10 min-h-[calc(100vh_-_73px)] max-h-[calc(100vh_-_73px)] overflow-hidden overflow-y-auto backdrop-blur-lg w-full md:px-10 px-5 gap-10"
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
  </nav>
</template>

<script setup>
const menubar = ref(false);
const router = useRouter();

watch(
  () => router.currentRoute.value,
  () => (menubar.value = false)
);
</script>

<style scoped></style>
