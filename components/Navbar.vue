<template>
    <nav
        class="fixed bg-[#1b0d67] z-50 border-b-2 h-[4.5rem] active:shadow-none duration-300 border-[#faab0d] shadow-lg shadow-gray-300 text-xl text-white font-bold py-5 w-full px-10">
        <div class="container flex justify-between mx-auto">
            <h1>Shahboz Mamatkarimov</h1>
            <ul class="flex gap-5">
                <li v-for="i in navbar" :key="i.id">
                    <router-link class="w-28 text-center inline-block" :to="i.path">
                        {{ i.name }}
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { navbar } from "../constants/navbar"
</script>

<style lang="scss" scoped>
.router-link-active {
    color: #edae30;
    border-bottom: 5px solid #FFF;
    transition-duration: 1s;
    padding-bottom: 17px;
}
</style>