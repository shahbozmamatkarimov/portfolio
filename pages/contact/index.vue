<template>
  <main class="min-h-screen pb-20">
    <section class="contact flex justify-center gap-5 z-10">
      <div
        class="text-center text-white shadow-md shadow-white rounded-lg border bg-black min-w-fit w-72 z-10 px-5 py-7"
      >
        <button
          class="text-[#FFF] border-2 border-[#FFF] rounded-full text-2xl hover:bg-[#FFF] hover:text-black duration-700 px-3 py-2"
        >
          <i class="bx bx-map"></i>
        </button>
        <h1 class="font-bold text-lg py-5">My Location</h1>
        <p class="text-gray-400 min-w-fit">{{ store.location }}</p>
      </div>
      <div
        class="text-center text-white shadow-2xl shadow-white rounded-lg border bg-black min-w-fit w-72 z-10 px-5 py-7"
      >
        <a href="tel:+998991422303"
          class="text-[#FFF] border-2 border-[#FFF] rounded-full text-2xl hover:bg-[#FFF] hover:text-black duration-700 px-3 py-2"
        >
          <i class="bx bxs-phone-call"></i>
        </a>
        <h1 class="font-bold text-lg py-5">Contact Me</h1>
        <p class="text-gray-400">{{ store.phone }}</p>
      </div>
      <div
        class="text-center text-white shadow-md shadow-white rounded-lg border bg-black min-w-fit w-72 z-10 px-5 py-7"
      >
        <a href="mailto:shahbozmamatkarimov2303@gmail.com"
          class="text-[#FFF] border-2 border-[#FFF] rounded-full text-2xl hover:bg-[#FFF] hover:text-black duration-700 px-3 py-2"
        >
          <i class="bx bx-envelope"></i>
    </a>
        <h1 class="font-bold text-lg py-5">Send message</h1>
        <p class="text-gray-400 text-xs">{{ store.email }}</p>
      </div>
    </section>
    <section class="flex justify-center">
      <form
        @submit.prevent="handleSubmit"
        class="rounded-2xl shadow-2xl shadow-white border border-spacing-0.5 border-dashed bg-[#000] space-y-5 w-[40rem] pt-24 pb-10 px-10 -mt-12"
      >
        <h1 class="md:text-3xl sm:text-2xl text-lg font-bold w-full text-white">
          Send your message!
        </h1>
        <input
          class="w-full border-2 border-gray-300 bg-white outline-none pt-1 pb-1.5 rounded-full px-5 required"
          type="text"
          placeholder="Enter your name"
          v-model="sendMessage.name"
          required
        />
        <input
          class="w-full border-2 border-gray-300 bg-white outline-none pt-1 pb-1.5 rounded-full px-5 required"
          type="email"
          placeholder="Enter your email"
          v-model="sendMessage.email"
          required
        />
        <textarea
          class="w-full border-2 border-gray-300 bg-white outline-none py-3 resize-none rounded-3xl px-5 required"
          rows="5"
          placeholder="Enter your message"
          v-model="sendMessage.message"
          required
        ></textarea>
        <input
          v-if="store.sending == 1"
          class="w-full shadow-inner shadow-white cursor-pointer hover:bg-white hover:text-black border-b text-white focus:border-[#FFF] px-5 py-3 font-bold rounded-full"
          type="submit"
        />
        <button
          type="button"
          v-else-if="store.sending == 3"
          class="w-full shadow-inner shadow-white cursor-pointer bg-green-600 hover:text-black border-b text-white focus:border-[#FFF] px-5 py-3 font-bold rounded-full"
        >
          Thank you for your message
        </button>
        <button
          v-else
          type="button"
          class="w-full shadow-inner shadow-white cursor-pointer bg-red-600 hover:text-black border-b text-white focus:border-[#FFF] px-5 py-3 font-bold rounded-full"
        >
          Sending ...
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
  keywords: "shahboz, mamatkarimov, frontenf, backend, fullstack, front-end, back-end, full-stack",
  ogDescription: "I am a full stack web developer",
  ogImage: "/myphoto.png",
  twitterCard: "/myphoto.png",
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

store.location = "Uzbekistan, Samarkand";
store.phone = "+998 99 142 23 03";
store.email = "shahbozmamatkarimov2303@gmail.com";

function handleSubmit() {
  store.sending = 2;
  if (true) {
    try {
      const caption = `
full name: ${sendMessage.name}
email: ${sendMessage.email}
message: ${sendMessage.message}
    `;

      axios
        .post(
          "https://api.telegram.org/bot6707038912:AAGZU_e2W1Ah9nixesppAoQjvxbTXovrlJM/sendMessage",
          {
            chat_id: "979201852",
            text: caption,
          }
        )
        .then((res) => {
          console.log(res);
          store.sending = 3;
          setTimeout(() => {
            store.sending = 1;
          }, 5000);
        })
        .catch((err) => {
          console.log(err);
          store.sending = 3;
          setTimeout(() => {
            store.sending = 1;
          }, 5000);
        });
    } catch (error) {
      alert(error);
    }
  }
}
</script>

<style lang="scss">
@media (max-width: 1200px) {
  .contact {
    flex-wrap: wrap;
  }
}
</style>
