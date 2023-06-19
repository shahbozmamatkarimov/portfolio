<template>
    <!-- Footer container -->
    <footer class="text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left px-10">
        <div class="container mx-auto">
            <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. -->
            <div class="mx-6 py-10 text-center md:text-left">
                <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <!-- Tailwind Elements section -->
                    <div>
                        <h1 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                            Shahboz Mamatkarimov
                        </h1>
                        <p>
                            {{ store.description }}
                        </p>
                        <!-- Social network icons container -->
                        <div class="flex my-5">
                            <a target="_blank" :href="i.link" class="mr-6 text-neutral-600 dark:text-neutral-200"
                                v-for="i in store.networks" :key="i.id">
                                <i class="text-2xl" :class="i.icon"></i>
                            </a>
                        </div>
                    </div>
                    <!-- Products section -->
                    <div class="">
                        <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Products
                        </h6>
                 <ul class="flex items-center justify-center flex-wrap mx-auto gap-5">
                            <li class="text-center" v-for="i in store.skills" :key="i">
                                <img class="rounded-full h-7 w-7 mx-auto" :src="i.image" alt="img">
                                <p class="text-black text-xs">{{ i.name }}</p>
                            </li>
                        </ul>
                    </div>
                    <!-- Useful links section -->
                    <div class="">
                        <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Useful links
                        </h6>
                        <ul class="flex flex-col gap-1">
                            <li v-for="i in navbar" :key="i.id">
                                <router-link class="w-28 inline-block" :to="i.path">
                                    {{ i.name }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <!-- Contact section -->
                    <div>
                        <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Contact
                        </h6>
                        <p class="mb-1 flex items-center justify-center md:justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="mr-3 h-5 w-5">
                                <path
                                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path
                                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                            {{ store.location }}
                        </p>
                        <p class="mb-1 flex items-center justify-center md:justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="mr-3 h-5 w-5">
                                <path
                                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path
                                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            {{ store.email }}
                        </p>
                        <p class="mb-1 flex items-center justify-center md:justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="mr-3 h-5 w-5">
                                <path fill-rule="evenodd"
                                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            {{ store.phone }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { navbar } from "../constants/navbar"

const store = reactive({
    description: "",
    location: "",
    email: "",
    phone: "",
    networks: "",
    skills: "",
})

const descriptionFunc = async () => {
    fetch('http://localhost:4000/api/profile/findall')
        .then(data => {
            return data.json();
        })
        .then(data => {
            store.description = data[0].description
            store.location = data[0].city + ',' + data[0].district + ',' + data[0].address
            store.phone = data[0].phone
            store.email = data[0].email
        })
        .catch(error => {
            console.log(error);
        })
}


const skillsFunc = async () => {
    fetch('http://localhost:4000/api/skills/findall')
        .then(data => {
            return data.json();
        })
        .then(data => {
            store.skills = data
        })
        .catch(error => {
            console.log(error);
        })
}

const networkFunc = async () => {
    fetch('http://localhost:4000/api/socialnetworks/findall')
        .then(data => {
            return data.json();
        })
        .then(data => {
            store.networks = data
        })
        .catch(error => {
            console.log(error);
        })
}

onMounted(() => {
    descriptionFunc()
    networkFunc()
    skillsFunc()
})
</script>

<style lang="scss" scoped>
.router-link-active {
    color: #edae30;
    transition-duration: 1s;
    font-weight: bold;
}
</style>