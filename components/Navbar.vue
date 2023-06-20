<template>
  <nav
    class="flex items-center justify-center fixed bg-[#1b0d67] z-50 border-b-2 lg:h-[4.5rem] md:h-16 h-12 active:shadow-none duration-300 border-[#faab0d] shadow-lg shadow-gray-300 lg:text-xl text-lg text-white font-bold py-5 w-full sm:px-10 px-2"
  >
    <div class="container flex justify-between mx-auto">
      <h1 class="min-w-fit md:text-md text-sm my-auto">Shahboz Mamatkarimov</h1>
      <ul class="flex gap-5 pt-5">
        <li v-for="i in navbar" :key="i.id">
          <router-link
            class="w-28 text-center lg:inline-block hidden"
            :to="i.path"
          >
            {{ i.name }}
          </router-link>
        </li>
        <div class="lg:hidden relative md:h-16 h-12">
          <i @click="menu = !menu" class="bx bx-menu my-auto sm:text-3xl text-lg"></i>
          <div
            class="lg:hidden absolute right-0 sm:top-10 rounded-lg border-2 bg-[#1b0d67]"
          >
            <ul @click="menu=false" v-show="menu" class="flex flex-col p-2">
              <li v-for="i in navbar" :key="i.id">
                <router-link class="w-28 inline-block md:text-lg text-sm" :to="i.path">
                  {{ i.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { navbar } from "../constants/navbar";
const menu = ref(false);
</script>

<style lang="scss" scoped>
.router-link-active {
  color: #edae30;
  border-bottom: 5px solid #fff;
  transition-duration: 1s;
  padding-bottom: 17px;
}

@media (max-width: 1024px) {
  .router-link-active {
    border-bottom: 5px solid #fff;
    transition-duration: 1s;
    padding-bottom: 5px;
  }
}
</style>
