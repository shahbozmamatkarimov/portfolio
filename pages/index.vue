<template>
  <div ref="root" class="relative overflow-x-clip">
    <Transition name="pop">
      <a v-if="showSticky" href="mailto:shahbozmamatkarimov2303@gmail.com?subject=Software%20Engineer%20opportunity"
        class="btn-primary fixed bottom-5 right-5 z-50 !px-5 !py-3 text-sm">
        <span class="h-2 w-2 animate-pulse rounded-full bg-white"></span> Hire a Software Engineer
      </a>
    </Transition>
    <div class="relative max-w-[1200px] mx-auto md:px-10 px-5">
      <!-- HERO -->
      <section id="home" class="grid min-h-[min(80vh,720px)] [&>*]:min-w-0 items-center gap-12 py-16 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <div data-aos="fade-up" class="badge">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
            Available for new opportunities
          </div>
          <p data-aos="fade-up" data-aos-delay="80" class="mt-8 text-lg text-zinc-400">
            Assalamu alaykum 👋 I'm
          </p>
          <h1 data-aos="fade-up" data-aos-delay="140" class="hero-name">Shahboz Mamatkarimov</h1>
          <p data-aos="fade-up" data-aos-delay="200" class="hero-role">
            <span class="gradient-text">Software Engineer</span>
          </p>
          <ul data-aos="fade-up" data-aos-delay="240" class="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-zinc-300">
            <li v-for="f in facts" :key="f" class="flex items-center gap-2"><i class="bx bxs-check-circle text-lg text-emerald-400"></i>{{ f }}</li>
          </ul>
          <div data-aos="fade-up" data-aos-delay="320" class="mt-9 flex flex-wrap items-center gap-4">
            <a href="mailto:shahbozmamatkarimov2303@gmail.com?subject=Software%20Engineer%20opportunity" class="btn-primary"><i class="bx bx-envelope"></i> Email me</a>
            <a href="/Shahboz-Mamatkarimov-Resume.pdf" download="Shahboz-Mamatkarimov-Resume.pdf" class="btn-ghost"><i class="bx bx-download"></i> Download CV</a>
            <a href="https://www.linkedin.com/in/shahboz-mamatkarimov-12ba00267" target="_blank" rel="noopener" class="btn-ghost"><i class="bx bxl-linkedin"></i> LinkedIn</a>
          </div>
          <p data-aos="fade-up" data-aos-delay="360" class="mt-4 text-sm text-zinc-500">Usually replies within a day &middot; Tashkent, Uzbekistan (UTC+5)</p>
          <p data-aos="fade-up" data-aos-delay="280" class="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            I build fast, scalable products end to end &mdash; polished Vue/Nuxt &amp; React interfaces on top of
            Node.js/NestJS APIs. <b class="text-zinc-200">{{ years }}+ years</b> shipping apps used by real customers.
          </p>
          
        </div>

        <!-- code window -->
        <div data-aos="zoom-in" data-aos-delay="200" class="relative">
          <div class="float-badge max-lg:hidden left-[-30px] top-[62%]"><img :src="vue" alt="" /></div>
          <div class="float-badge max-lg:hidden right-[-10px] top-[-18px] delay-1"><img :src="react" alt="" /></div>
          <div class="glass tilt overflow-hidden" @mousemove="tilt" @mouseleave="untilt">
            <div class="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span class="h-3 w-3 rounded-full bg-red-500/80"></span>
              <span class="h-3 w-3 rounded-full bg-yellow-500/80"></span>
              <span class="h-3 w-3 rounded-full bg-green-500/80"></span>
              <span class="ml-3 font-mono text-xs text-zinc-500">shahboz.ts</span>
            </div>
<pre class="overflow-x-auto p-6 font-mono text-[13px] leading-8 sm:text-sm"><span class="k">const</span> <span class="v">shahboz</span> = {
  <span class="p">role</span>: <span class="s">"Software Engineer"</span>,
  <span class="p">experience</span>: <span class="s">"{{ years }}+ years"</span>,
  <span class="p">current</span>: <span class="s">"Uniplatforms"</span>,
  <span class="p">location</span>: <span class="s">"Tashkent, Uzbekistan"</span>,
  <span class="p">languages</span>: [<span class="s">"Uzbek"</span>, <span class="s">"English"</span>],
  <span class="p">stack</span>: [
    <span class="s">"Vue"</span>, <span class="s">"Nuxt"</span>, <span class="s">"React"</span>, <span class="s">"Next.js"</span>,
    <span class="s">"Node.js"</span>, <span class="s">"NestJS"</span>, <span class="s">"PostgreSQL"</span>,
  ],
  <span class="p">shipped</span>: <span class="s">"{{ projects.length }} live products"</span>,
  <span class="p">openToWork</span>: <span class="n">true</span>,
};</pre>
          </div>
        </div>
      </section>

      <!-- trusted by -->
      <section data-aos="fade-up" class="py-6">
        <p class="text-center text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">Experience with</p>
        <div class="mt-5 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          <div v-for="c in experience" :key="c.company" class="flex items-center gap-3 text-zinc-300">
            <img v-if="c.logo" :src="c.logo" alt="" class="h-8 w-8 rounded-md bg-white object-contain p-1" />
            <span v-else class="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-[#22c55e] to-teal-600 text-sm font-bold text-white">{{ c.company[0] }}</span>
            <span class="font-semibold">{{ c.company }}</span>
          </div>
        </div>
      </section>

      <!-- STATS -->
      <section class="section">
        <dl class="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div v-for="s in stats" :key="s.label" data-aos="fade-up" class="glass spot p-6 text-center" @mousemove="spot">
            <dt class="gradient-text text-5xl font-extrabold">{{ s.shown }}<span v-if="s.suffix">{{ s.suffix }}</span></dt>
            <dd class="mt-2 text-sm text-zinc-400">{{ s.label }}</dd>
          </div>
        </dl>
      </section>

      <!-- EXPERIENCE -->
      <section id="experience" class="section">
        <h2 data-aos="fade-up" class="section-title">Experience</h2>
        <p data-aos="fade-up" class="section-sub">Where I've worked</p>
        <ol class="relative mt-12 ml-3 space-y-6 border-l border-white/10">
          <li v-for="job in experience" :key="job.company" data-aos="fade-up" class="relative ml-8">
            <span class="dot"></span>
            <div class="glass spot p-6" @mousemove="spot">
              <div class="flex flex-wrap items-start justify-between gap-3">
                <div class="flex items-center gap-4">
                  <img v-if="job.logo" :src="job.logo" alt="" class="h-12 w-12 rounded-xl bg-white object-contain p-1.5" />
                  <span v-else class="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#22c55e] to-teal-600 text-lg font-bold text-white">{{ job.company[0] }}</span>
                  <div>
                    <h3 class="text-xl font-semibold text-zinc-100">{{ job.role }}</h3>
                    <p class="text-zinc-400">{{ job.company }} &middot; {{ job.location }}</p>
                  </div>
                </div>
                <span class="badge !py-1">{{ job.period }}</span>
              </div>
              <p class="mt-4 leading-relaxed text-zinc-400">{{ job.text }}</p>
            </div>
          </li>
        </ol>
      </section>

      <!-- PROJECTS -->
      <section id="projects" class="section">
        <h2 data-aos="fade-up" class="section-title">Featured <span class="gradient-text">Projects</span></h2>
        <p data-aos="fade-up" class="section-sub">Live products I've helped build</p>
        <div data-aos="fade-up" class="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          <button v-for="c in categories" :key="c" type="button" role="tab" :aria-selected="filter === c"
            class="filter-chip" :class="{ on: filter === c }" @click="filter = c">
            {{ c }} <span class="opacity-60">{{ c === 'All' ? projects.length : projects.filter((p) => p.cat === c).length }}</span>
          </button>
        </div>
        <div class="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-6">
          <article v-for="(p, idx) in projects" v-show="filter === 'All' || p.cat === filter" :key="p.name" data-aos="fade-up"
            class="glass spot group flex flex-col overflow-hidden" :class="spanOf(idx)" @mousemove="spot">
            <div class="relative block h-[300px] cursor-zoom-in overflow-hidden bg-white xl:h-[340px]" @click="openGallery(idx)">
              <img v-if="p.fit" :src="p.images[0]" alt="" loading="lazy" class="h-full w-full object-cover object-left-top" />
              <div v-else class="animate_scroll" :class="p.pad">
                <img v-for="(img, i) in p.images" :key="i" :src="img" alt="" loading="lazy" class="w-full object-cover" />
              </div>
              <span class="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60 opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                <span class="btn-primary">View gallery ({{ p.images.length }}) <i class="bx bx-expand-alt"></i></span>
                <a :href="p.url" target="_blank" rel="noopener" class="text-sm text-zinc-200 underline underline-offset-4 hover:text-white" @click.stop>
                  Open live site <i class="bx bx-link-external"></i>
                </a>
              </span>
            </div>
            <div class="flex grow flex-col p-6">
              <p class="text-xs font-semibold uppercase tracking-widest c_main">{{ p.type }}</p>
              <h3 class="mt-1 text-2xl font-semibold text-zinc-100">{{ p.name }}</h3>
              <p class="mt-3 grow leading-relaxed text-zinc-400">{{ p.text }}</p>
              <ul class="mt-4 flex flex-wrap gap-2">
                <li v-for="tag in p.tags" :key="tag" class="chip">{{ tag }}</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <!-- TECH STACK -->
      <section id="technologies" class="section">
        <h2 data-aos="fade-up" class="section-title">Tech <span class="gradient-text">Stack</span></h2>
        <p data-aos="fade-up" class="section-sub">Tools I use to build things</p>
        <div class="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="group in stack" :key="group.title" data-aos="fade-up" class="glass spot p-6" @mousemove="spot">
            <h3 class="mb-5 text-xs font-semibold uppercase tracking-[0.2em] c_main">{{ group.title }}</h3>
            <ul class="grid grid-cols-3 gap-4">
              <li v-for="t in group.items" :key="t.name" class="group flex flex-col items-center gap-2 text-center">
                <span class="grid h-14 w-14 place-items-center rounded-xl bg-white/5 p-2.5 transition duration-300 group-hover:-translate-y-1 group-hover:bg-white/10 group-hover:shadow-[0_8px_30px_rgba(34,197,94,.25)]">
                  <img :src="t.icon" :alt="t.name" loading="lazy" class="max-h-full max-w-full object-contain" />
                </span>
                <span class="text-xs text-zinc-400">{{ t.name }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- WHAT I DO -->
      <section id="about" class="section">
        <h2 data-aos="fade-up" class="section-title">What I <span class="gradient-text">do</span></h2>
        <p data-aos="fade-up" class="section-sub">From pixel-perfect UI to production APIs</p>
        <div class="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          <div v-for="(c, i) in bento" :key="c.title" data-aos="fade-up" :data-aos-delay="i * 80"
            class="glass spot p-7" :class="c.span" @mousemove="spot">
            <span class="grid h-12 w-12 place-items-center rounded-xl bg-[#22c55e]/15 text-2xl c_main"><i :class="c.icon"></i></span>
            <h3 class="mt-5 text-xl font-semibold text-zinc-100">{{ c.title }}</h3>
            <p class="mt-2 leading-relaxed text-zinc-400">{{ c.text }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section id="contact" class="section">
        <div data-aos="fade-up" class="cta">
          <div class="cta-inner grid grid-cols-[minmax(0,1fr)] [&>*]:min-w-0 items-center gap-10 p-6 sm:p-8 md:p-14 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.25em] c_main">Let's talk</p>
              <h2 class="mt-4 text-3xl font-extrabold leading-tight text-zinc-100 md:text-5xl" style="text-wrap: balance">
                Hiring a Software Engineer? <span class="gradient-text">Let's connect.</span>
              </h2>
              <p class="mt-5 max-w-lg text-lg text-zinc-400">
                I'm open to new opportunities. Send me a message and I'll get back to you.
              </p>
              <div class="mt-8 flex flex-wrap gap-3">
                <a href="mailto:shahbozmamatkarimov2303@gmail.com?subject=Software%20Engineer%20opportunity" class="btn-primary"><i class="bx bx-envelope"></i> Email me</a>
                <NuxtLink to="/resume" class="btn-ghost"><i class="bx bx-file"></i> Resume</NuxtLink>
              </div>
            </div>
            <ul class="space-y-3">
              <li v-for="c in contacts" :key="c.label">
                <a :href="c.href" :target="c.external ? '_blank' : undefined" rel="noopener"
                  class="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-[#22c55e]/50 hover:bg-white/[0.07]">
                  <span class="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#22c55e]/15 text-2xl c_main"><i :class="c.icon"></i></span>
                  <span class="min-w-0">
                    <span class="block text-xs uppercase tracking-widest text-zinc-500">{{ c.label }}</span>
                    <span class="block truncate font-medium text-zinc-100">{{ c.value }}</span>
                  </span>
                  <i class="bx bx-right-arrow-alt ml-auto text-2xl text-zinc-600 transition group-hover:translate-x-1 group-hover:text-[#22c55e]"></i>
                </a>
              </li>
              <li>
                <button type="button" class="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 p-3 text-sm text-zinc-400 transition hover:text-zinc-100" @click="copyEmail">
                  <i :class="copied ? 'bx bx-check' : 'bx bx-copy'"></i> {{ copied ? 'Email copied!' : 'Copy email address' }}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>

    <!-- GALLERY LIGHTBOX -->
    <ClientOnly>
      <Teleport to="body">
        <Transition name="lb">
        <div v-if="gallery.open" class="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-md" @click.self="closeGallery">
          <div class="flex items-center justify-between gap-4 px-5 py-4 text-zinc-200" @click.self="closeGallery">
            <div>
              <p class="text-lg font-semibold">{{ current.name }}</p>
              <p class="text-xs text-zinc-400">{{ gallery.i + 1 }} / {{ current.images.length }}</p>
            </div>
            <div class="flex items-center gap-3">
              <a :href="current.url" target="_blank" rel="noopener" class="btn-primary !py-2 text-sm">Live site <i class="bx bx-link-external"></i></a>
              <button type="button" aria-label="Close" class="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-2xl hover:bg-white/20" @click="closeGallery">
                <i class="bx bx-x"></i>
              </button>
            </div>
          </div>

          <div class="relative flex min-h-0 grow items-center justify-center px-4 md:px-16" @click.self="closeGallery">
            <button v-if="current.images.length > 1" type="button" aria-label="Previous" class="absolute left-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/40 bg-black/70 text-2xl text-white shadow-lg backdrop-blur hover:bg-[#22c55e] md:left-6" @click="step(-1)">
              <i class="bx bx-chevron-left"></i>
            </button>
            <Transition name="lbimg" mode="out-in">
              <img :key="gallery.i" :src="current.images[gallery.i]" :alt="current.name" class="max-h-full max-w-full rounded-lg object-contain shadow-2xl" />
            </Transition>
            <button v-if="current.images.length > 1" type="button" aria-label="Next" class="absolute right-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/40 bg-black/70 text-2xl text-white shadow-lg backdrop-blur hover:bg-[#22c55e] md:right-6" @click="step(1)">
              <i class="bx bx-chevron-right"></i>
            </button>
          </div>

          <div v-if="current.images.length > 1" class="flex justify-center gap-2 overflow-x-auto px-4 py-4">
            <button v-for="(img, i) in current.images" :key="i" type="button" class="h-16 w-24 shrink-0 overflow-hidden rounded-md border-2 transition"
              :class="i === gallery.i ? 'border-[#22c55e]' : 'border-transparent opacity-60 hover:opacity-100'" @click="gallery.i = i">
              <img :src="img" alt="" class="h-full w-full object-cover object-top" />
            </button>
          </div>
        </div>
        </Transition>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<script setup>
import axios from "axios";

import html from "@/assets/technologies/html.svg";
import css from "@/assets/technologies/css.svg";
import sass from "@/assets/technologies/sass.svg";
import bootstrap from "@/assets/technologies/bootstrap.svg";
import tailwind from "@/assets/technologies/tailwind.svg";
import js from "@/assets/technologies/js.svg";
import jquery from "@/assets/technologies/jquery.gif";
import vue from "@/assets/technologies/vue.webp";
import nuxt from "@/assets/technologies/nuxt.png";
import react from "@/assets/technologies/react.svg";
import next from "@/assets/technologies/next.svg";
import node from "@/assets/technologies/node.svg";
import nest from "@/assets/technologies/nest.png";
import postgresql from "@/assets/technologies/postgresql.png";
import mongo from "@/assets/technologies/mongo.png";
import socket from "@/assets/technologies/socket.png";
import webrtc from "@/assets/technologies/webrtc.png";
import flutter from "@/assets/technologies/flutter.svg";
import dart from "@/assets/technologies/dart.svg";

import hocaLogo from "@/assets/resume/hoca.svg";
import programmerLogo from "@/assets/resume/programmeruz.svg";

import skool1 from "@/assets/images/Skool/Community.png";
import skool2 from "@/assets/images/Skool/Course.png";
import skool3 from "@/assets/images/Skool/Classroom.png";
import florify from "@/assets/images/Florify.png";
import dla1 from "@/assets/images/DLA/dla.png";
import dla2 from "@/assets/images/DLA/Team.png";
import dla3 from "@/assets/images/DLA/client_info.png";
import dla4 from "@/assets/images/DLA/Latest_activity.png";
import dla5 from "@/assets/images/DLA/group_chat.png";
import snkr1 from "@/assets/images/Sneackers/desktop.png";
import snkr2 from "@/assets/images/Sneackers/mobile.png";
import snkr3 from "@/assets/images/Sneackers/sneakers.png";
import medbozor from "@/assets/images/MedBozor.png";
import itCabinet from "@/assets/images/ITPark/cabinet.png";
import itMyitpark from "@/assets/images/ITPark/myitpark.png";
import itRelocation from "@/assets/images/ITPark/relocation.png";

useHead({
  title: "Shahboz Mamatkarimov — Software Engineer",
  meta: [{ name: "description", content: "Software Engineer building scalable web applications with Vue, Nuxt, React and Node.js" }],
});
useSeoMeta({
  title: "Shahboz Mamatkarimov — Software Engineer",
  ogTitle: "Shahboz Mamatkarimov — Software Engineer",
  description: "Software Engineer building scalable web applications with Vue, Nuxt, React and Node.js",
  keywords:
    "shahboz, mamatkarimov, software engineer, frontend, backend, fullstack, vue, nuxt, react, nodejs",
  ogDescription: "Software Engineer building scalable web applications with Vue, Nuxt, React and Node.js",
  ogImage: "/logo.svg",
  twitterCard: "/logo.svg",
});

// Career started July 2023
const years = new Date().getFullYear() - 2023;

const experience = [
  {
    role: "Frontend Developer",
    company: "Uniplatforms",
    location: "Tashkent, Uzbekistan",
    period: "Jan 2025 – Present",
    logo: null,
    text: "Modernized UI components for flagship enterprise products, improving accessibility (WCAG) and cross-browser consistency. Optimized the client-side rendering pipeline and asset delivery, cutting initial page load by ~25%.",
  },
  {
    role: "Frontend Developer",
    company: "ProgrammerUZ",
    location: "Tashkent, Uzbekistan",
    period: "Aug 2023 – Jan 2025",
    logo: programmerLogo,
    text: "Refined client-side architecture with modular, reusable components and automated tests, and streamlined code review and state management for high-traffic clients. Shipped Skool, Florify, Digital Legal Assistant, Sneakers store and MedBozor.",
  },
  {
    role: "Full Stack Web Developer",
    company: "Hoca Inc",
    location: "Seoul, South Korea (Remote)",
    period: "Jul 2023 – Jan 2024",
    logo: hocaLogo,
    text: "Built end-to-end web apps connecting Vue/React frontends with Node.js backend services, including real-time modules using WebSocket and RESTful APIs.",
  },
];

const stack = [
  {
    title: "Frontend",
    items: [
      { name: "Vue", icon: vue },
      { name: "Nuxt", icon: nuxt },
      { name: "React", icon: react },
      { name: "Next.js", icon: next },
      { name: "JavaScript", icon: js },
      { name: "jQuery", icon: jquery },
    ],
  },
  {
    title: "Styling",
    items: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "Sass", icon: sass },
      { name: "Tailwind", icon: tailwind },
      { name: "Bootstrap", icon: bootstrap },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { name: "Node.js", icon: node },
      { name: "NestJS", icon: nest },
      { name: "PostgreSQL", icon: postgresql },
      { name: "MongoDB", icon: mongo },
      { name: "Socket.io", icon: socket },
      { name: "WebRTC", icon: webrtc },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "Flutter", icon: flutter },
      { name: "Dart", icon: dart },
    ],
  },
];

const categories = ["All", "IT Park", "Platforms", "E-commerce"];
const filter = ref("All");
// spans follow the position among the visible cards, so every filter keeps a tidy grid
const spanOf = (idx) => {
  const shown = projects.map((p, i) => i).filter((i) => filter.value === "All" || projects[i].cat === filter.value);
  const pos = shown.indexOf(idx);
  const n = shown.length;
  if (n % 3 === 0 || n === 1) return "xl:col-span-2";
  if (n % 3 === 1 && pos >= n - 4 || n % 3 === 2 && pos >= n - 2) return "xl:col-span-3";
  return "xl:col-span-2";
};

const projects = [
  {
    name: "Skool.uz",
    cat: "Platforms",
    type: "Online course platform",
    text: "Community, courses and classroom in one learning platform.",
    url: "https://learnify.uz",
    images: [skool1, skool2, skool3],
    tags: ["Frontend", "Vue"],
  },
  {
    name: "Florify.uz",
    cat: "E-commerce",
    type: "Flower e-commerce",
    text: "Online flower store with a clean catalogue and ordering flow.",
    url: "https://florify.uz",
    images: [florify],
    tags: ["Frontend", "E-commerce"],
  },
  {
    name: "Digital Legal Assistant",
    cat: "Platforms",
    type: "Legal SaaS",
    text: "Team workspace with client info, activity feed and group chat.",
    url: "https://dev-dla.newtribe.nl",
    images: [dla1, dla2, dla3, dla4, dla5],
    pad: "pb-5",
    tags: ["Frontend", "Realtime chat"],
  },
  {
    name: "Sneakers Store",
    cat: "E-commerce",
    type: "E-commerce",
    text: "Responsive sneakers shop built as a two-person frontend team.",
    url: "https://dev-ecommsnkr.newtribe.nl",
    images: [snkr1, snkr2, snkr3],
    pad: "pb-96",
    tags: ["Frontend", "E-commerce"],
  },
  {
    name: "MedBozor.uz",
    cat: "E-commerce",
    type: "Medical marketplace",
    text: "Marketplace for medical products, built with a two-person frontend team.",
    url: "https://medbozor.uz",
    images: [medbozor],
    tags: ["Frontend", "Marketplace"],
  },
  {
    name: "IT Park Cabinet",
    cat: "IT Park",
    type: "CRM · Internal platform",
    text: "Large CRM for IT Park Uzbekistan: companies, residents, reports, applications, IT visa and more, split into 8 modules.",
    url: "https://cabinet.it-park.uz/",
    images: [itCabinet],
    fit: true,
    tags: ["Frontend", "CRM", "Dashboard"],
  },
  {
    name: "My IT Park",
    cat: "IT Park",
    type: "Resident portal",
    text: "Public portal for becoming an IT Park resident, with a tax calculator and a resident cabinet.",
    url: "https://my.it-park.uz/?lang=en",
    images: [itMyitpark],
    fit: true,
    tags: ["Frontend", "Portal"],
  },
  {
    name: "IT Relocation",
    cat: "IT Park",
    type: "Relocation platform",
    text: "Gateway for IT professionals moving to Uzbekistan: IT visa, guide, success stories and applications.",
    url: "https://it-relocation.uz/",
    images: [itRelocation],
    fit: true,
    tags: ["Frontend", "Multilingual"],
  },
];


const bento = [
  { icon: "bx bx-layout", title: "Frontend engineering", span: "md:col-span-2", text: "Fast, accessible, responsive interfaces in Vue/Nuxt and React/Next, with clean component architecture and polished interactions." },
  { icon: "bx bx-server", title: "Backend & APIs", span: "", text: "REST APIs and services with Node.js and NestJS, backed by PostgreSQL and MongoDB." },
  { icon: "bx bx-wifi", title: "Realtime", span: "", text: "Live features such as chat and calls with Socket.io and WebRTC." },
  { icon: "bx bx-rocket", title: "Shipped to production", span: "md:col-span-2", text: "Eight live products for real users, built in teams and delivered end to end — from design handoff to deployment." },
];

const contacts = [
  { label: "Email", icon: "bx bx-envelope", value: "shahbozmamatkarimov2303@gmail.com", href: "mailto:shahbozmamatkarimov2303@gmail.com?subject=Software%20Engineer%20opportunity" },
  { label: "Phone", icon: "bx bx-phone", value: "+998 93 114 40 63", href: "tel:+998931144063" },
  { label: "LinkedIn", icon: "bx bxl-linkedin", value: "shahboz-mamatkarimov", href: "https://www.linkedin.com/in/shahboz-mamatkarimov-12ba00267", external: true },
  { label: "GitHub", icon: "bx bxl-github", value: "shahbozmamatkarimov", href: "https://github.com/shahbozmamatkarimov", external: true },
];

const facts = ["Frontend-focused full-stack engineer", `${projects.length} live products shipped`, "Works in teams & ships to production"];
// project gallery lightbox
const gallery = reactive({ open: false, p: 0, i: 0 });
const current = computed(() => projects[gallery.p]);
function openGallery(p) {
  gallery.p = p;
  gallery.i = 0;
  gallery.open = true;
}
function closeGallery() {
  gallery.open = false;
}
function step(d) {
  const n = current.value.images.length;
  gallery.i = (gallery.i + d + n) % n;
}
function onKey(e) {
  if (!gallery.open) return;
  if (e.key === "Escape") closeGallery();
  else if (e.key === "ArrowRight") step(1);
  else if (e.key === "ArrowLeft") step(-1);
}
watch(
  () => gallery.open,
  (o) => {
    document.body.style.overflow = o ? "hidden" : "";
  }
);

// sticky CTA appears after the hero, so contact is always one click away
const showSticky = ref(false);
function onScroll() {
  const cta = document.getElementById("contact");
  const ctaVisible = cta && cta.getBoundingClientRect().top < window.innerHeight - 100;
  showSticky.value = window.scrollY > 700 && !ctaVisible;
}
const copied = ref(false);
async function copyEmail() {
  try {
    await navigator.clipboard.writeText("shahbozmamatkarimov2303@gmail.com");
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  } catch {
    window.location.href = "mailto:shahbozmamatkarimov2303@gmail.com";
  }
}

// animated counters
const stats = reactive([
  { target: years, suffix: "+", label: "Years of experience", shown: 0 },
  { target: projects.length, suffix: "", label: "Live products shipped", shown: 0 },
  { target: 3, suffix: "", label: "Companies", shown: 0 },
  { target: stack.reduce((n, g) => n + g.items.length, 0), suffix: "", label: "Technologies", shown: 0 },
]);
function countUp() {
  const t0 = performance.now();
  const step = (now) => {
    const p = Math.min((now - t0) / 1400, 1);
    const e = 1 - Math.pow(1 - p, 3);
    stats.forEach((s) => (s.shown = Math.round(s.target * e)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// hover effects
function spot(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
}
function tilt(e) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
}
function untilt(e) {
  e.currentTarget.style.transform = "";
}

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("keydown", onKey);
  document.body.style.overflow = "";
});

onMounted(async () => {
  countUp();
  window.addEventListener("keydown", onKey);
  window.addEventListener("scroll", onScroll, { passive: true });
  let location = await axios.get('https://ipinfo.io/json');
  location = {
    ip: location?.data?.ip,
    city: location?.data?.city,
    region: location?.data?.region,
    country: location?.data?.country,
    loc: location?.data?.loc,
    timezone: location?.data?.timezone,
  }
  $fetch("/api/notify", { method: "POST", body: { markdown: true, silent: true, text: `Kimdir porfolioni kuzatmoqda\\! MAIN PAGE
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
.section { padding-top: 6rem; padding-bottom: 1rem; }
#contact.section { padding-bottom: 5rem; }
.section-title { font-size: clamp(2rem, 4.5vw, 3.5rem); font-weight: 800; color: #f4f4f5; letter-spacing: -0.02em; }
.section-sub { margin-top: 0.5rem; font-size: 1.125rem; color: #71717a; }

.hero-name { margin-top: 0.25rem; font-size: clamp(2rem, 5vw, 3.25rem); font-weight: 800; line-height: 1.1; color: #f4f4f5; letter-spacing: -0.02em; }
.hero-role { margin-top: 0.5rem; font-size: clamp(2.25rem, 9vw, 4rem); font-weight: 900; line-height: 1; letter-spacing: -0.03em; }

.gradient-text {
  background: linear-gradient(100deg, #22c55e, #0d9488 45%, #0f766e 90%);
  background-size: 200% auto;
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent; color: transparent;
  animation: shine 6s linear infinite;
}
@keyframes shine { to { background-position: 200% center; } }

.badge {
  display: inline-flex; width: fit-content; align-items: center; gap: 0.5rem;
  border-radius: 9999px; border: 1px solid rgba(255,255,255,.12); background: rgba(255,255,255,.05);
  padding: 0.4rem 1rem; font-size: 0.875rem; color: #d4d4d8; backdrop-filter: blur(8px);
}
.caret { display: inline-block; width: 8px; height: 1.1em; margin-left: 2px; vertical-align: -3px; background: #22c55e; animation: blink 1s steps(1) infinite; }
@keyframes blink { 50% { opacity: 0; } }

.btn-primary, .btn-ghost {
  display: inline-flex; align-items: center; gap: 0.5rem; border-radius: 0.875rem;
  padding: 0.85rem 1.75rem; font-weight: 600; transition: all .25s;
}
.filter-chip { border-radius: 9999px; border: 1px solid rgba(255,255,255,.14); background: rgba(255,255,255,.04); padding: .45rem 1rem; font-size: .875rem; color: #d4d4d8; transition: background .2s, border-color .2s, color .2s, transform .2s; }
.filter-chip:hover { border-color: #22c55e; color: #fff; transform: translateY(-1px); }
.filter-chip.on { background: #22c55e; border-color: #22c55e; color: #052e16; font-weight: 600; }
.btn-primary { background: linear-gradient(100deg, #22c55e, #0d9488); color: #fff; box-shadow: 0 10px 40px -10px rgba(34,197,94,.7);
  &:hover { transform: translateY(-2px); box-shadow: 0 16px 50px -10px rgba(255,61,119,.8); } }
.btn-ghost { border: 1px solid rgba(255,255,255,.18); color: #e4e4e7; background: rgba(255,255,255,.03); backdrop-filter: blur(8px);
  &:hover { border-color: #22c55e; color: #22c55e; transform: translateY(-2px); } }

/* glass card with cursor spotlight */
.glass {
  position: relative; border-radius: 1.25rem; border: 1px solid rgba(255,255,255,.09);
  background: linear-gradient(160deg, rgba(255,255,255,.06), rgba(255,255,255,.015));
  backdrop-filter: blur(14px); transition: transform .3s ease, border-color .3s;
}
.spot::before {
  content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; opacity: 0; transition: opacity .3s;
  background: radial-gradient(380px circle at var(--x, 50%) var(--y, 50%), rgba(34,197,94,.16), transparent 60%);
}
.spot:hover::before { opacity: 1; }
.spot:hover { border-color: rgba(34,197,94,.35); }
.tilt { transition: transform .15s ease-out; will-change: transform; box-shadow: 0 30px 80px -30px rgba(34,197,94,.35); }

/* code colors */
pre { color: #d4d4d8; }
.k { color: #c084fc; } .v { color: #60a5fa; } .p { color: #fca5a5; } .s { color: #86efac; } .n { color: #fdba74; }

.float-badge {
  position: absolute; z-index: 5; display: grid; height: 3.5rem; width: 3.5rem; place-items: center; padding: .7rem;
  border-radius: 1rem; border: 1px solid rgba(255,255,255,.12); background: rgba(24,24,27,.8); backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0,0,0,.4); animation: floaty 5s ease-in-out infinite;
  img { max-height: 100%; max-width: 100%; object-fit: contain; }
  &.delay-1 { animation-delay: -1.2s; } &.delay-2 { animation-delay: -2.4s; } &.delay-3 { animation-delay: -3.6s; }
}
@media (max-width: 1023px) { .float-badge { display: none; } }
@keyframes floaty { 50% { transform: translateY(-14px); } }

.marquee { overflow: hidden; mask-image: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent); }
.marquee-track { display: flex; width: max-content; gap: 1.25rem; animation: marquee 40s linear infinite; }
@keyframes marquee { to { transform: translateX(-50%); } }

.dot { position: absolute; left: -41px; top: 1.75rem; height: 1rem; width: 1rem; border-radius: 9999px; background: #09090b; border: 2px solid #22c55e; box-shadow: 0 0 18px rgba(34,197,94,.8); }
.chip { border-radius: 9999px; background: rgba(255,255,255,.06); padding: .25rem .75rem; font-size: .75rem; color: #a1a1aa; }

.cta { border-radius: 1.75rem; padding: 1px; background: linear-gradient(120deg, #22c55e, #0d9488, #0f766e, #22c55e); background-size: 300% 300%; animation: border-move 8s linear infinite; }
.cta-inner { border-radius: calc(1.75rem - 1px); background: radial-gradient(70% 120% at 50% 0%, #2a1408, #0b0b0e 70%); }
@keyframes border-move { 50% { background-position: 100% 50%; } }

.lb-enter-active, .lb-leave-active { transition: opacity .3s ease; }
.lb-enter-from, .lb-leave-to { opacity: 0; }
.lbimg-enter-active, .lbimg-leave-active { transition: opacity .25s ease, transform .25s ease; }
.lbimg-enter-from { opacity: 0; transform: scale(.96) translateX(16px); }
.lbimg-leave-to { opacity: 0; transform: scale(.96) translateX(-16px); }
.spot:hover { transform: translateY(-4px); box-shadow: 0 24px 60px -24px rgba(34,197,94,.35); }
.glass { transition: transform .4s cubic-bezier(.22,1,.36,1), border-color .3s, box-shadow .4s; }
/* text reveal: blur + tracking settle as the text scrolls in (only while AOS is active and hasn't revealed it yet) */
h1[data-aos], h2[data-aos], p[data-aos], li[data-aos] {
  transition-property: opacity, transform, filter, letter-spacing !important;
}
h1.aos-init:not(.aos-animate), h2.aos-init:not(.aos-animate), p.aos-init:not(.aos-animate), li.aos-init:not(.aos-animate) { filter: blur(10px); }
h1.aos-init:not(.aos-animate) { letter-spacing: .06em; }
h2.aos-init:not(.aos-animate) { letter-spacing: .04em; }
.section-title { position: relative; padding-bottom: .6rem; }
.section-title::after {
  content: ""; position: absolute; left: 0; bottom: 0; height: 3px; width: 64px; border-radius: 3px;
  background: linear-gradient(90deg, #22c55e, #14b8a6); transform: scaleX(0); transform-origin: left;
  transition: transform .8s cubic-bezier(.22,1,.36,1) .35s;
}
.section-title.aos-animate::after { transform: scaleX(1); }
@media (prefers-reduced-motion: reduce) {
  .section-title::after { transform: scaleX(1); transition: none; }
}
.pop-enter-active, .pop-leave-active { transition: all .3s ease; }
.pop-enter-from, .pop-leave-to { opacity: 0; transform: translateY(20px); }

@media (prefers-reduced-motion: reduce) {
  .gradient-text, .float-badge, .marquee-track, .cta, .caret { animation: none; }
  .lb-enter-active, .lb-leave-active, .lbimg-enter-active, .lbimg-leave-active, .glass { transition: none; }
}
</style>
