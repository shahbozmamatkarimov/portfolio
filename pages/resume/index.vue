<template>
  <main class="relative max-w-[1000px] mx-auto md:px-10 px-5 pb-20 text-zinc-300">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-[500px] opacity-70"
      style="background: radial-gradient(60% 50% at 50% 0%, rgba(34,197,94,.15), transparent 70%)"></div>

    <header class="relative">
      <h1 class="page-title">Shahboz Mamatkarimov</h1>
      <p class="mt-2 text-2xl font-bold c_main">Full Stack Web Developer</p>
      <a href="/Shahboz-Mamatkarimov-Resume.pdf" download="Shahboz-Mamatkarimov-Resume.pdf"
        class="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#22c55e] to-teal-600 px-5 py-2.5 font-semibold text-white transition hover:-translate-y-0.5">
        <i class="bx bx-download"></i> Download PDF
      </a>
      <ul class="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-zinc-400">
        <li class="flex items-center gap-2"><img class="w-5" src="@/assets/resume/phone.svg" alt="" />+998 93 114 40 63</li>
        <li class="flex items-center gap-2"><img class="w-5" src="@/assets/resume/email.svg" alt="" />shahbozmamatkarimov2303@gmail.com</li>
        <li class="flex items-center gap-2"><img class="w-5" src="@/assets/resume/location.svg" alt="" />Tashkent, Uzbekistan</li>
        <li class="flex items-center gap-2"><i class="bx bx-link text-xl text-[#22c55e]"></i><a href="https://shahbozmamatkarimov.vercel.app" target="_blank" rel="noopener" class="hover:text-[#22c55e]">shahbozmamatkarimov.vercel.app</a></li>
        <li class="flex items-center gap-2"><i class="bx bxl-linkedin text-xl text-[#22c55e]"></i><a href="https://www.linkedin.com/in/shahboz-mamatkarimov-12ba00267" target="_blank" rel="noopener" class="hover:text-[#22c55e]">linkedin.com/in/shahboz-mamatkarimov</a></li>
      </ul>
    </header>

    <section class="block-card">
      <h2 class="block-title">Professional Summary</h2>
      <p class="leading-relaxed text-zinc-400">
        Results-driven Full Stack Developer with experience engineering scalable web applications, modern CRMs, and
        cross-platform solutions. Proficient in Node.js, React, Next.js, Vue/Nuxt, and Flutter, with a proven track
        record of optimizing client-side performance, refining system architecture, and delivering high-impact
        features that support business growth.
      </p>
    </section>

    <section class="block-card">
      <h2 class="block-title">Work Experience</h2>
      <div class="space-y-6">
        <div v-for="j in jobs" :key="j.company" class="flex items-start gap-4">
          <img v-if="j.logo" :src="j.logo" alt="" class="h-10 w-10 rounded-md bg-white object-contain p-1" />
          <span v-else class="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#22c55e] font-bold text-white">{{ j.company[0] }}</span>
          <div class="w-full">
            <div class="flex flex-wrap justify-between gap-1">
              <div>
                <h3 class="font-semibold text-zinc-100">{{ j.role }}</h3>
                <p class="text-zinc-400">{{ j.company }}</p>
              </div>
              <div class="text-sm text-zinc-500 sm:text-right">
                <p>{{ j.period }}</p>
                <p>{{ j.location }}</p>
              </div>
            </div>
            <ul class="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-400 marker:text-[#22c55e]">
              <li v-for="b in j.bullets" :key="b">{{ b }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="block-card">
      <h2 class="block-title">Projects</h2>
      <div class="space-y-5">
        <div v-for="p in projects" :key="p.url">
          <h3 class="font-semibold text-zinc-100">{{ p.name }}</h3>
          <a :href="p.url" target="_blank" rel="noopener" class="text-sm text-[#22c55e] hover:underline">{{ p.url }}</a>
          <p class="mt-1 text-zinc-500">{{ p.text }}</p>
        </div>
      </div>
    </section>

    <section class="mt-6 grid gap-6 md:grid-cols-2">
      <div class="block-card !mt-0">
        <h2 class="block-title">Technical Skills</h2>
        <div class="space-y-4">
          <div v-for="g in skills" :key="g.title">
            <h3 class="mb-2 text-sm font-semibold text-zinc-100">{{ g.title }}</h3>
            <ul class="flex flex-wrap gap-2">
              <li v-for="i in g.items" :key="i" class="chip">{{ i }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="block-card !mt-0">
        <h2 class="block-title">Education &amp; Training</h2>
        <div class="space-y-4">
          <div v-for="e in education" :key="e.title">
            <h3 class="font-semibold text-zinc-100">{{ e.title }}</h3>
            <p class="text-zinc-400">Najot Ta'lim &middot; Tashkent, Uzbekistan</p>
            <p class="text-sm text-zinc-500">{{ e.period }}</p>
          </div>
        </div>
        <h2 class="block-title mt-6">Languages</h2>
        <ul class="flex flex-wrap gap-2">
          <li v-for="i in languages" :key="i" class="chip">{{ i }}</li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup>
import axios from "axios";

useHead({
  title: "Shahboz Mamatkarimov - resume",
  meta: [{ name: "description", content: "Full Stack Web Developer" }],
});
useSeoMeta({
  title: "Shahboz Mamatkarimov - resume",
  ogTitle: "Shahboz Mamatkarimov",
  description: "I am a full stack web developer",
  keywords:
    "shahboz, mamatkarimov, frontenf, backend, fullstack, front-end, back-end, full-stack",
  ogDescription: "I am a full stack web developer",
  ogImage: "/logo.svg",
  twitterCard: "/logo.svg",
});

import hocaLogo from "@/assets/resume/hoca.svg";
import programmerLogo from "@/assets/resume/programmeruz.svg";

const jobs = [
  {
    role: "Frontend Developer", company: "Uniplatforms", period: "Jan 2025 – Present", location: "Tashkent, Uzbekistan", logo: null,
    bullets: [
      "Modernized user interface components for flagship enterprise products using modern JavaScript frameworks, improving overall WCAG accessibility standards and cross-browser performance consistency.",
      "Optimized client-side rendering pipeline and asset delivery, reducing initial page load times by ~25% and enhancing user retention across primary workflows.",
    ],
  },
  {
    role: "Frontend Developer", company: "ProgrammerUZ", period: "Aug 2023 – Jan 2025", location: "Tashkent, Uzbekistan", logo: programmerLogo,
    bullets: [
      "Refined client-side architecture for mission-critical web applications by integrating modular, re-usable component patterns and establishing automated test coverage.",
      "Streamlined code review processes and modularized state management pipelines, ensuring seamless long-term scalability and code maintainability for high-traffic clients.",
    ],
  },
  {
    role: "Full Stack Developer", company: "Hoca Inc", period: "Jul 2023 – Jan 2024", location: "Seoul, South Korea (Remote)", logo: hocaLogo,
    bullets: [
      "Engineered robust end-to-end web applications connecting modern Vue/React frontend architectures with Node.js backend microservices, elevating core user engagement.",
      "Architected real-time client interaction modules using WebSocket protocols and dynamic RESTful APIs to deliver seamless user experience across core workflows.",
    ],
  },
];

const education = [
  { title: "Full Stack NodeJS / VueJS Bootcamp", period: "May 2022 – Jul 2023" },
  { title: "IT Foundation Course", period: "2022" },
];

const projects = [
  { name: "Skool", url: "https://learnify.uz", text: "Online course platform. Frontend developer." },
  { name: "Florify", url: "https://florify.uz", text: "Flower e-commerce. Frontend developer." },
  { name: "Digital Legal Assistant", url: "https://dev-dla.newtribe.nl", text: "Legal workspace. Frontend developer." },
  { name: "Sneakers store", url: "https://dev-ecommsnkr.newtribe.nl", text: "E-commerce. Two-person frontend team." },
  { name: "MedBozor", url: "https://medbozor.uz", text: "Medical marketplace. Two-person frontend team." },
  { name: "IT Park Cabinet", url: "https://cabinet.it-park.uz/", text: "Large CRM for IT Park Uzbekistan: companies, residents, reports and applications. Frontend developer." },
  { name: "My IT Park", url: "https://my.it-park.uz/?lang=en", text: "Resident portal with a tax calculator. Frontend developer." },
  { name: "IT Relocation", url: "https://it-relocation.uz/", text: "Relocation platform for IT professionals moving to Uzbekistan. Frontend developer." },
];

const skills = [
  { title: "Frontend", items: ["React", "Next.js", "Vue", "Nuxt", "TypeScript", "JavaScript", "Tailwind", "SASS/SCSS", "Bootstrap", "HTML5/CSS3"] },
  { title: "Backend", items: ["Node.js", "Express", "NestJS", "WebSocket", "REST APIs", "Git", "CI/CD Baselines"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { title: "Mobile & Misc", items: ["Dart", "Flutter"] },
];
const languages = ["Uzbek (Native)", "English (Intermediate)"];

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

  $fetch("/api/notify", { method: "POST", body: { markdown: true, silent: true, text: `Kimdir porfolioni kuzatmoqda\\! RESUME PAGE
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
.block-card {
  position: relative;
  margin-top: 1.5rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  padding: 1.5rem;
}
.block-title {
  margin-bottom: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #22c55e;
}
.chip {
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.06);
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  color: #d4d4d8;
}
</style>
