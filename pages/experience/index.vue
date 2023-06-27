<template>
  <main class="min-h-screen">
    <section>
      <ol
        class="relative border-l-4 ml-2 text-white border-gray-200 dark:border-gray-700"
      >
        <li
          class="flex justify-between mb-10 ml-5"
          v-for="i in data"
          :key="i.id"
        >
          <div>
            <div
              class="absolute w-5 h-5 bg-gray-200 rounded-full mt-1.5 -left-3 border border-white"
            ></div>
            <time class="mb-1 text-sm font-bold leading-none text-gray-100">{{
              i.time
            }}</time>
            <h3 class="text-lg font-medium text-white">{{ i.title }}</h3>
            <p class="mb-4 text-base font-normal text-gray-300">
              {{ i.description }}
            </p>
            <div
              id="languages"
              class="flex flex-wrap text-white gap-1 text-[14px] font-bold py-1 items-center"
            >
              <button v-show="i.languages"
                class="bg-gray-500 px-3 pt-0.5 pb-1 rounded-full"
                v-for="lang in i.languages.split(',')"
                :key="lang"
              >
                {{ lang }}
              </button>
            </div>
          </div>
        </li>
      </ol>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
const data = ref([
  {
    time: "2023 May",
    title: "I studied the foundation course of Najot ta'lim for 3 months",
    languages: "C,Python",
  },
  {
    time: "2023 October",
    title: "I studied the Full Stack NodeJS bootcamp course of Najot ta'lim for 8 months",
    languages: "HTML,CSS,SASS/SCSS,JavaScript,VueJS,Nuxt,NodeJS,ExpressJS,NestJS,MongoDB,PosgreSQL,MySQL,GraphQL",
  },
  {
    time: "2023 June",
    title: "I am looking for a job",
    languages: ""
  }
]);

// const { data, error } = await useFetch('http://localhost:4000/api/experience/findall');
// console.log(error);
</script>

<style lang="scss" scoped></style>
