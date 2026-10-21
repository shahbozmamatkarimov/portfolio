<template>
  <footer
    v-if="$router.currentRoute.value.name != 'resume'"
    class="border-t border-white/10 bg-black/30 backdrop-blur-sm"
  >
    <div class="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row md:px-10">
      <router-link to="/" class="group" aria-label="Home"><Logo /></router-link>

      <nav class="flex flex-wrap justify-center gap-x-8 gap-y-3 text-neutral-400">
        <router-link to="/#home" class="hover:text-[#FD6F00]">Home</router-link>
        <router-link to="/#experience" class="hover:text-[#FD6F00]">Experience</router-link>
        <router-link to="/#projects" class="hover:text-[#FD6F00]">Projects</router-link>
        <router-link to="/resume" class="hover:text-[#FD6F00]">Resume</router-link>
        <router-link to="/contact" class="hover:text-[#FD6F00]">Contact</router-link>
      </nav>

      <div class="flex items-center gap-3 text-2xl text-neutral-400">
        <a href="mailto:shahbozmamatkarimov2303@gmail.com" aria-label="Email" class="hover:text-[#FD6F00]"><i class="bx bx-envelope"></i></a>
        <a href="https://github.com/shahbozmamatkarimov" target="_blank" rel="noopener" aria-label="GitHub" class="hover:text-[#FD6F00]"><i class="bx bxl-github"></i></a>
        <a href="https://www.linkedin.com/in/shahboz-mamatkarimov-12ba00267" target="_blank" rel="noopener" aria-label="LinkedIn" class="hover:text-[#FD6F00]"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
    <p class="border-t border-white/5 py-4 text-center text-sm text-zinc-600">
      &copy; {{ new Date().getFullYear() }} Shahboz Mamatkarimov &middot; Software Engineer
    </p>
  </footer>
</template>
