<template>
    <div>
        <main class="text-white container mx-auto">
            <section class="flex justify-between items-center -mt-20 gap-20 min-h-[95vh]">
                <div class="text-3xl leading-[4rem] pt-20 w-[40%]">
                    <h1 class="font-bold">Hello everyone,</h1>
                    <h1 class="font-bold text-gray-200">I am a full stack web developer.</h1>
                    <p class="text-3xl text-gray-300 font-medium">{{ store.description }}
                    </p>
                    <div class="flex justify-between items-center py-10">
                        <router-link to="/projects">
                            <button
                                class="flex gap-2 items-center font-bold text-xl bg-[#faab0d] border-4 border-[#faab0d] hover:bg-transparent py-2 px-10 rounded-lg">Projects<i
                                    class='bx bxs-credit-card-front'></i></button>
                        </router-link>
                        <button
                            class="font-bold text-xl border-4 border-[#faab0d] hover:bg-[#faab0d] py-2 px-10 rounded-lg"><i
                                class='bx bxs-download'></i> Resume</button>
                    </div>
                </div>
                <div>
                    <img class="rounded-full h-96 w-96" src="../public/round.png" alt="img" />
                </div>
            </section>
            <section class="flex flex-col justify-center items-center min-h-screen">
                <div class="mx-auto w-full">
                    <div class="flex justify-between items-end">
                        <h2 class="text-3xl lg:text-4xl tracking-tight font-extrabold">Recent projects</h2>
                        <p class="text-[#faab0d] font-bold"><router-link to="/projects">view all</router-link></p>
                    </div>
                </div>
                <div class="w-full">
                    <div class="flex flex-wrap justify-between -mx-5">
                        <div v-show="index < 3" class="lg:w-1/3 md:w-1/2 mt-5 px-5 max-w-sm"
                            v-for="(i, index) in store.projects" :key="i.id">
                            <div class="bg-white my-2 shadow-md shadow-white border border-gray-200 rounded max-w-sm">
                                <div class="relative">
                                    <div class="imgbtn relative">
                                        <a href="link">
                                            <img id="image" class="rounded-t h-48 mx-auto" :src="i.image" alt="img">
                                        </a>
                                        <div
                                            class="btn bg-gray-500 rounded-lg px-2 py-1 hidden absolute right-0 top-0 gap-5 text-white text-2xl">
                                            <i class='bx bxs-show cursor-pointer'></i>
                                        </div>
                                    </div>
                                    <div>
                                        <i
                                            class='bx bxs-message-rounded chat cursor-pointer text-4xl absolute -right-6 text-black -bottom-1'><b
                                                class="absolute bottom-8 hidden left-0 text-black text-[20px]">chat</b></i>
                                    </div>
                                </div>
                                <div class="p-3">
                                    <div class="flex justify-between">
                                        <h5 id="title" class="font-bold text-lg tracking-tight w-[80%] truncate">{{ i.title
                                        }}
                                        </h5>
                                        <button class="flex gap-1 bg-[#faab0d] px-2 rounded-lg items-center">0<i
                                                class='bx bxs-star text-[yellow] star duration-1000'></i></button>
                                    </div>
                                    <p id="description" class="title text-sm font-medium leading-5 text-gray-500 mb-3">
                                        {{ i.description }}
                                    </p>
                                    <div id="languages"
                                        class="flex flex-wrap justify-center gap-1 font-bold text-xs py-1 items-center h-16">
                                        <button class="bg-gray-300 px-3 py-0.5 rounded-full"
                                            v-for="lang in i.languages.split(',')" :key="lang">{{ lang }}</button>
                                    </div>
                                    <div class="flex justify-center gap-5 items-center py-1">
                                        <a id="github_link" target="_blank" :href="i.github_link"><i
                                                class='bx bxl-github text-black text-2xl py-1 cursor-pointer'></i></a>
                                        <a id="link" target="_blank" :href="i.link"
                                            class="bg-[#faab0d] px-4 py-1 cursor-pointer rounded-lg shadow-md shadow-[#faab0d]">Preview</a>
                                    </div>
                                    <div class="flex justify-between">
                                        <time id="start_time" class="text-sm font-medium text-gray-500">{{
                                            i.start_time.slice(0, 10) }}</time>
                                        <time id="end_time" class="text-sm font-medium text-[#faab0d]">{{
                                            i.end_time.slice(0, 10) }}</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="flex justify-center items-center min-h-screen">
                <div class="py-8 mx-auto w-full">
                    <div class="flex justify-between items-center">
                        <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold">Recent posts</h2>
                        <p class="text-[#faab0d] font-bold"><router-link to="/blog">view all</router-link></p>
                    </div>
                    <div id="contents" class="flex justify-between"></div>
                </div>
            </section>
            <section class="flex flex-col justify-center items-center min-h-screen">
                <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold">Services</h2>

                <div>
                    <ul class="flex justify-center items-center flex-wrap gap-10">
                        <li class="text-center" v-for="i in store.skills" :key="i">
                            <img class="rounded-full h-40 w-40" :src="i.image" alt="img">
                            <p class="text-black">{{ i.name }}</p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup>
const store = reactive({
    skills: "",
    projects: "",
    description: "",
})
fetch('http://localhost:4000/api/project/findall')
    .then(data => {
        return data.json();
    })
    .then(post => {
        store.projects = post
    })
    .catch(error => {
        console.log(error);
    })

const contentFunc = async () => {
    fetch('http://localhost:4000/api/content/findall')
        .then(data => {
            return data.json();
        })
        .then(content => {
            const contents = document.querySelector("#contents")
            if (contents.innerHTML == "") {
                for (let i in content) {
                    if (i >= 2) {
                        return
                    }
                    console.log(content[i].content);
                    let div = document.createElement("div")
                    div.className = "bg-white min-w-fit text-black p-5 rounded-lg shadow-md shadow-gray-100 border-b-4 border-r-2 border-gray-500 max-w-fit mb-5"
                    div.innerHTML += content[i].content
                    contents.appendChild(div)
                }
            }
        })
        .catch(error => {
            console.log(error);
        })
}

const descriptionFunc = async () => {
    fetch('http://localhost:4000/api/profile/findall')
        .then(data => {
            return data.json();
        })
        .then(data => {
            store.description = data[0].description
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

onMounted(() => {
    contentFunc();
    skillsFunc();
    descriptionFunc();
})
</script>

<style lang="scss" scoped>
.title {
    overflow: hidden !important;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    height: 5.2rem;
}

.imgbtn:hover {
    .btn {
        display: flex;
    }
}

@keyframes ping {

    75%,
    100% {
        transform: scale(2);
        opacity: 0;
    }
}

.star:active {
    animation: ping 5s cubic-bezier(0.9, 0.9, 0.9, 0.9) ease;
    transform: scale(20);
}

.chat:hover {
    b {
        display: inline-block;
    }
}
</style>