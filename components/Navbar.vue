<template>
  <nav
    class="flex items-center justify-center fixed top-0 left-0 z-[60] w-full"
  >
    <div
      class="self-stretch max-w-[1800px] mx-auto py-5 backdrop-blur-lg w-full md:px-10 px-5 flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap"
      :class="menubar ? 'bg-[#09090b]/95' : ''"
    >
      <router-link to="/" class="group" aria-label="Home"><Logo /></router-link>
      <div
        class="flex justify-between items-center gap-10 md:text-xl sm:text-[16px] text-sm"
      >
        <div class="sm:flex hidden gap-10">
          <router-link
            v-for="l in links"
            :key="l.id"
            :to="l.to"
            class="nav-link text-center font-medium leading-7"
            :class="active === l.id ? 'text-[#FD6F00] is-active' : 'text-neutral-400 hover:text-[#FD6F00]'"
          >
            {{ l.label }}
          </router-link>
        </div>
        <div class="flex gap-10">
          <a href="https://github.com/shahbozmamatkarimov" target="_blank" rel="noopener">
            <img
              class="h-7 rounded-full"
              src="@/assets/technologies/github.svg"
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/in/shahboz-mamatkarimov-12ba00267" target="_blank" rel="noopener">
            <img
              class="h-8 rounded-full w-8"
              src="@/assets/technologies/linkedin.png"
              alt=""
            />
          </a>
        </div>
        <div @click="menubar = !menubar" class="sm:hidden block">
          <img src="@/assets/svg/menu.svg" alt="" />
        </div>
      </div>
    </div>

    <!-- mobile navbar modal -->
    <Transition name="menu">
    <div
      v-if="menubar"
      class="sm:hidden flex flex-col items-center justify-between text-2xl fixed top-[80px] py-10 min-h-[calc(100vh_-_80px)] max-h-[calc(100vh_-_80px)] overflow-hidden overflow-y-auto bg-[#09090b]/95 backdrop-blur-lg w-full md:px-10 px-5 gap-10"
    >
      <router-link
        v-for="l in links"
        :key="l.id"
        :to="l.to"
        class="text-center font-medium leading-7"
        :class="active === l.id ? 'text-[#FD6F00]' : 'text-neutral-400 hover:text-[#FD6F00]'"
      >
        {{ l.label }}
      </router-link>
    </div>
    </Transition>
  </nav>
</template>

<script setup>
const menubar = ref(false);
const router = useRouter();
const route = useRoute();

const links = [
  { id: "home", to: "/#home", label: "Home" },
  { id: "experience", to: "/#experience", label: "Experience" },
  { id: "projects", to: "/#projects", label: "Projects" },
  { id: "technologies", to: "/#technologies", label: "Tech Stack" },
  { id: "resume", to: "/resume", label: "Resume" },
  { id: "contact", to: "/contact", label: "Contact" },
];
const sections = ["home", "experience", "projects", "technologies"];

const current = ref("home");
const active = computed(() => {
  if (route.path.startsWith("/resume")) return "resume";
  if (route.path.startsWith("/contact")) return "contact";
  if (route.path === "/") return current.value;
  return "";
});

// the last section whose top has passed the line just under the navbar
const spy = () => {
  if (route.path !== "/") return;
  const line = 140;
  let id = "home";
  for (const s of sections) {
    const el = document.getElementById(s);
    if (el && el.getBoundingClientRect().top <= line) id = s;
  }
  current.value = id;
};

onMounted(() => {
  window.addEventListener("scroll", spy, { passive: true });
  spy();
});
onBeforeUnmount(() => window.removeEventListener("scroll", spy));

watch(
  () => router.currentRoute.value,
  () => {
    menubar.value = false;
    nextTick(spy);
  }
);
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
@media (prefers-reduced-motion: reduce) {
  .menu-enter-active,
  .menu-leave-active {
    transition: none;
  }
}
.nav-link {
  position: relative;
  transition: color 0.2s;
}
.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, #fd6f00, #ec4899);
  transform: scaleX(0);
  transition: transform 0.25s;
}
.nav-link.is-active::after {
  transform: scaleX(1);
}
</style>
