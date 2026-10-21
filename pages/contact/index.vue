<template>
  <main class="relative max-w-[1000px] mx-auto md:px-10 px-5 pb-20">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-[500px] opacity-70"
      style="background: radial-gradient(60% 50% at 50% 0%, rgba(253,111,0,.15), transparent 70%)"></div>
    <header class="relative text-center">
      <h1 class="page-title">Get in touch</h1>
      <p class="mt-3 text-lg text-zinc-400">Hiring or have a project in mind? Send me a message.</p>
    </header>

    <section class="relative mt-12 grid gap-4 md:grid-cols-3">
      <a v-for="c in cards" :key="c.title" :href="c.href"
        class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center hover:border-[#FD6F00]/40 transition">
        <span class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#FD6F00]/15 text-2xl c_main">
          <i :class="c.icon"></i>
        </span>
        <p class="mt-4 font-semibold text-zinc-100">{{ c.title }}</p>
        <p class="mt-1 break-words text-sm text-zinc-400">{{ c.value }}</p>
      </a>
    </section>

    <section class="relative mt-8">
      <form @submit.prevent="handleSubmit"
        class="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
        <h2 class="text-2xl font-bold text-zinc-100">Send your message</h2>
        <input class="field" type="text" placeholder="Your name" v-model="sendMessage.name" required />
        <input class="field" type="email" placeholder="Your email" v-model="sendMessage.email" required />
        <textarea class="field resize-none" rows="5" placeholder="Your message" v-model="sendMessage.message" required></textarea>
        <button v-if="store.sending == 1" type="submit"
          class="w-full rounded-xl bg-[#FD6F00] px-5 py-3 font-semibold text-white hover:bg-[#ff8629] transition">
          Send message
        </button>
        <button v-else-if="store.sending == 3" type="button"
          class="w-full rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white">
          Thank you for your message
        </button>
        <button v-else type="button" disabled
          class="w-full rounded-xl bg-zinc-700 px-5 py-3 font-semibold text-white">
          Sending...
        </button>
      </form>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: "Shahboz Mamatkarimov - contact",
  meta: [{ name: "description", content: "Full stack web developer" }],
});
useSeoMeta({
  title: "Shahboz Mamatkarimov - contact",
  ogTitle: "Shahboz Mamatkarimov",
  description: "I am a full stack web developer",
  keywords:
    "shahboz, mamatkarimov, frontenf, backend, fullstack, front-end, back-end, full-stack",
  ogDescription: "I am a full stack web developer",
  ogImage: "/logo.svg",
  twitterCard: "/logo.svg",
});

import axios from "axios";

const store = reactive({
  location: "",
  email: "",
  phone: "",
  sending: 1,
});

const sendMessage = reactive({
  name: "",
  email: "",
  message: "",
});

store.location = "Uzbekistan, Tashkent";
store.phone = "+998 93 114 40 63";
store.email = "shahbozmamatkarimov2303@gmail.com";

const cards = [
  { title: "Location", icon: "bx bx-map", value: store.location, href: "#" },
  { title: "Phone", icon: "bx bxs-phone-call", value: store.phone, href: "tel:+998931144063" },
  { title: "Email", icon: "bx bx-envelope", value: store.email, href: "mailto:shahbozmamatkarimov2303@gmail.com" },
];

function handleSubmit() {
  store.sending = 2;
  if (true) {
    try {
      const caption = `
full name: ${sendMessage.name}
email: ${sendMessage.email}
message: ${sendMessage.message}
    `;

      $fetch("/api/notify", { method: "POST", body: { text: caption } })
        .then((res) => {
          console.log(res);
          store.sending = 3;
          setTimeout(() => {
            store.sending = 1;
          }, 5000);
        })
        .catch((err) => {
          console.log(err);
          store.sending = 1;
          alert("Could not send your message. Please email me directly.");
        });
    } catch (error) {
      alert(error);
    }
  }
}

onMounted(async () => {
  let location = await axios.get('https://ipinfo.io/json');
  location = {
    ip: location?.data?.ip,
    city: location?.data?.city,
    region: location?.data?.region,
    country: location?.data?.country,
    loc: location?.data?.loc,
    timezone: location?.data?.timezone,
  }

  $fetch("/api/notify", { method: "POST", body: { markdown: true, silent: true, text: `Kimdir porfolioni kuzatmoqda\\! CONTACT PAGE
        \`\`\`${JSON.stringify(location)}\`\`\`` } })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<style lang="scss" scoped>
.page-title {
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 800;
  color: #e4e4e7;
}
.field {
  width: 100%;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  padding: 0.75rem 1rem;
  color: #f4f4f5;
  outline: none;
  &:focus {
    border-color: #fd6f00;
  }
}
</style>
