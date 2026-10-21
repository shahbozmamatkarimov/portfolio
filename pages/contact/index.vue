<template>
  <main class="relative max-w-[1000px] mx-auto md:px-10 px-5 pb-20">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-[500px] opacity-70"
      style="background: radial-gradient(60% 50% at 50% 0%, rgba(34,197,94,.15), transparent 70%)"></div>
    <header class="relative text-center">
      <h1 class="page-title">Get in touch</h1>
      <p class="mt-3 text-lg text-zinc-400">Hiring or have a project in mind? Send me a message.</p>
    </header>

    <section class="relative mt-12 grid gap-4 md:grid-cols-[1fr_1fr_1.5fr]">
      <component :is="c.href ? 'a' : 'div'" v-for="c in cards" :key="c.title" :href="c.href"
        class="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center hover:border-[#22c55e]/40 transition">
        <span class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#22c55e]/15 text-2xl c_main">
          <i :class="c.icon"></i>
        </span>
        <p class="mt-4 font-semibold text-zinc-100">{{ c.title }}</p>
        <p class="mt-1 text-sm text-zinc-400 [overflow-wrap:anywhere] max-md:break-all">{{ c.value }}</p>
      </component>
    </section>

    <section class="relative mt-8">
      <form @submit.prevent="handleSubmit"
        class="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
        <h2 class="text-2xl font-bold text-zinc-100">Send your message</h2>
        <label class="block">
          <span class="label">Name</span>
          <input class="field" type="text" name="name" autocomplete="name" placeholder="Your name" v-model="sendMessage.name" required />
        </label>
        <label class="block">
          <span class="label">Email</span>
          <input class="field" type="email" name="email" autocomplete="email" placeholder="you@company.com" v-model="sendMessage.email" required />
        </label>
        <label class="block">
          <span class="label">Message</span>
          <textarea class="field resize-none" rows="5" name="message" placeholder="Tell me about the role or project" v-model="sendMessage.message" required></textarea>
        </label>
        <p v-if="store.error" role="alert" class="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          Could not send your message. Please email me directly at
          <a :href="'mailto:' + store.email" class="underline">{{ store.email }}</a>.
        </p>
        <button v-if="store.sending == 1" type="submit"
          class="w-full rounded-xl bg-[#22c55e] px-5 py-3 font-semibold text-[#04210f] hover:bg-[#4ade80] transition">
          Send message
        </button>
        <button v-else-if="store.sending == 3" type="button"
          class="w-full rounded-xl bg-emerald-800 px-5 py-3 font-semibold text-white">
          <i class="bx bx-check"></i> Thank you! I'll get back to you soon.
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
useSeoMeta({
  title: "Contact Shahboz Mamatkarimov — Software Engineer",
  ogTitle: "Contact Shahboz Mamatkarimov — Software Engineer",
  description: "Hiring or have a project in mind? Contact Shahboz Mamatkarimov, Software Engineer based in Tashkent, Uzbekistan.",
  ogDescription: "Hiring or have a project in mind? Contact Shahboz Mamatkarimov, Software Engineer based in Tashkent, Uzbekistan.",
  keywords: "shahboz mamatkarimov, software engineer, frontend developer, full stack developer, vue, nuxt, react, nodejs, flutter, tashkent, uzbekistan",
  ogUrl: "https://shahbozmamatkarimov.vercel.app/contact",
  ogImage: "https://shahbozmamatkarimov.vercel.app/og-image.png",
  ogImageAlt: "Shahboz Mamatkarimov — Software Engineer",
  twitterCard: "summary_large_image",
  twitterTitle: "Contact Shahboz Mamatkarimov — Software Engineer",
  twitterDescription: "Hiring or have a project in mind? Contact Shahboz Mamatkarimov, Software Engineer based in Tashkent, Uzbekistan.",
  twitterImage: "https://shahbozmamatkarimov.vercel.app/og-image.png",
});
useHead({ link: [{ rel: "canonical", href: "https://shahbozmamatkarimov.vercel.app/contact" }] });


const store = reactive({
  location: "",
  email: "",
  phone: "",
  sending: 1,
  error: false,
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
  { title: "Location", icon: "bx bx-map", value: store.location, href: "" },
  { title: "Phone", icon: "bx bxs-phone-call", value: store.phone, href: "tel:+998931144063" },
  { title: "Email", icon: "bx bx-envelope", value: store.email, href: "mailto:shahbozmamatkarimov2303@gmail.com" },
];

function handleSubmit() {
  store.sending = 2;
  store.error = false;
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
          store.error = true;
        });
    } catch (error) {
      alert(error);
    }
  }
}

onMounted(async () => {
  visitPing("CONTACT PAGE");
});
</script>

<style lang="scss" scoped>
.page-title {
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 800;
  color: #e4e4e7;
}
.label {
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #a1a1aa;
}
.field {
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  width: 100%;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  padding: 0.75rem 1rem;
  color: #f4f4f5;
  outline: none;
  &::placeholder { color: #71717a; }
  &:focus {
    border-color: #22c55e;
    background: rgba(34, 197, 94, 0.06);
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
  }
}
</style>
