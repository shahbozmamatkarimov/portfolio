<template>
    <main class="min-h-screen mb-20">
        <section class="flex flex-col justify-center items-center min-h-screen">
            <div class="w-full">
                <div class="flex flex-wrap justify-between -mx-5">
                    <div class="lg:w-1/3 md:w-1/2 mt-5 px-5 max-w-sm" v-for="i in data" :key="i.id">
                        <div class="bg-white my-2 shadow-md shadow-white border border-gray-200 rounded max-w-sm">
                            <div class="relative">
                                <div class="imgbtn relative">
                                    <a href="link">
                                        <img id="image" class="rounded-t h-48 mx-auto"
                                            :src="i.image"
                                            alt="img">
                                    </a>
                                    <div
                                        class="btn bg-gray-500 rounded-lg px-2 py-1 hidden absolute right-0 top-0 gap-5 text-white text-2xl">
                                        <i class='bx bxs-show cursor-pointer'></i>
                                    </div>
                                </div>
                                <div>
                                    <i @click="comments(i.id, i.title)"
                                        class='bx bxs-message-rounded chat cursor-pointer text-4xl absolute -right-6 text-black -bottom-1'><b
                                            class="absolute bottom-8 hidden left-0 text-black text-[20px]">chat</b></i>
                                </div>
                            </div>
                            <div class="p-3">
                                <div class="flex justify-between">
                                    <h5 id="title" class="font-bold text-lg tracking-tight w-[80%] truncate">{{i.title}}</h5>
                                    <button class="flex gap-1 bg-[#faab0d] px-2 rounded-lg items-center">0<i
                                            class='bx bxs-star text-[yellow] star duration-1000'></i></button>
                                </div>
                                <p id="description" class="title text-sm font-medium leading-5 text-gray-500 mb-3">
                                    {{i.description}}
                                </p>
                                <div id="languages"
                                    class="flex flex-wrap justify-center gap-1 font-bold text-xs py-1 items-center h-16">
                                    <button class="bg-gray-300 px-3 py-0.5 rounded-full" v-for="lang in i.languages.split(',')" :key="lang">{{ lang }}</button>
                                </div>
                                <div class="flex justify-center gap-5 items-center py-1">
                                    <a id="github_link" target="_blank" href="i.github_link"><i
                                            class='bx bxl-github text-black text-2xl py-1 cursor-pointer'></i></a>
                                    <a id="link" target="_blank" href="i.link"
                                        class="bg-[#faab0d] px-4 py-1 cursor-pointer rounded-lg shadow-md shadow-[#faab0d]">Preview</a>
                                </div>
                                <div class="flex justify-between">
                                    <time id="start_time" class="text-sm font-medium text-gray-500">01.02.2023</time>
                                    <time id="end_time" class="text-sm font-medium text-[#faab0d]">01.03.2024</time>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
const { data, error } =  await useFetch('http://localhost:4000/api/project/findall');

console.log(error);

const comments = (id, title) => {
    const router = useRouter();
    router.push(`/projects/${id}/${title.split(' ').join('_')}`)

}

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