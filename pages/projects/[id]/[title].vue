<template>
    <main>
        <Navbar />
        <section class="main max-h-screen overflow-hidden overflow-y-auto pb-32 px-20">
            <div class="flex items-start gap-5 mt-5" v-for="i in store.data" :key="i.id">
                <img class="w-10 h-10 border-2  rounded-full"
                    src="https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=1000"
                    alt="img">
                <div>
                    <div class="flex items-center gap-5">
                        <p class="bg-white px-5 py-2 rounded-md border-b-4 border-r-2 border-black shadow-md shadow-white">
                            {{ i.comment }}
                        </p>
                        <i v-if="i.reply" class='bx bx-reply text-2xl font-bold'></i>
                    </div>
                    <p class="bg-gray-400 px-5 py-2 rounded-md border-b-4 border-r-2 border-black shadow-md shadow-white"
                        v-if="i.reply">
                        {{ i.reply }}
                    </p>
                </div>
            </div>
            <form @submit.prevent="SendMessage" class="flex items-center fixed bg-[#343E59] bottom-5 w-[90%] -ml-20 border-2 rounded-md">
                <div class="flex gap-1 flex-wrap text-lg p-1 w-[20rem]">
                    <i @click="store.message += '😀'" class="cursor-pointer">😀</i>
                    <i @click="store.message += '😂'" class="cursor-pointer">😂</i>
                    <i @click="store.message += '😎'" class="cursor-pointer">😎</i>
                    <i @click="store.message += '😍'" class="cursor-pointer">😍</i>
                    <i @click="store.message += '👇🏾'" class="cursor-pointer">👇🏾</i>
                    <i @click="store.message += '👆🏾'" class="cursor-pointer">👆🏾</i>
                    <i @click="store.message += '🚫'" class="cursor-pointer">🚫</i>
                    <i @click="store.message += '❎'" class="cursor-pointer">❎</i>
                    <i @click="store.message += '❌'" class="cursor-pointer">❌</i>
                    <i @click="store.message += '✔'" class="cursor-pointer">✔</i>
                    <i @click="store.message += '💻'" class="cursor-pointer">💻</i>
                    <i @click="store.message += '👎'" class="cursor-pointer">👎</i>
                    <i @click="store.message += '👍'" class="cursor-pointer">👍</i>
                    <i @click="store.message += '👌'" class="cursor-pointer">👌</i>
                    <i @click="store.message += '🤷‍♂️'" class="cursor-pointer">🤷‍♂️</i>
                    <i @click="store.message += '🤦‍♂️'" class="cursor-pointer">🤦‍♂️</i>
                </div>
                <textarea v-model="store.message" maxlength="200" minlength="2" class="resize-none w-full  p-2" rows="2"
                    placeholder="Write a message..." required></textarea>
                <button class='bx bxs-send bg-[#343E59] text-white text-5xl cursor-pointer'></button>
            </form>
        </section>
    </main>
</template>

<script setup>
const router = useRouter()
const store = reactive({
    message: "",
    data: "",
})

definePageMeta({
    layout: "custom",
});

const SendMessage = () => {
    const token = localStorage.getItem("tokenForUser");
    if (!token) {
        router.push('/login')
    }
    fetch('https://portfolio-wanw.onrender.com/api/comment/create', {
        method: 'POST',
        headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({
            comment: store.message,
            user_id: localStorage.getItem("userId"),
            project_id: router.currentRoute.value.fullPath.split("/")[2]
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.message == "Token expired!") {
                router.push('/login')
            }
            GetMessages();
            store.message = ""
        })
        .catch(error => {
            console.log(error.message);
        })
}

const GetMessages = () => {
    fetch('https://portfolio-wanw.onrender.com/api/comment/findall')
        .then(data => {
            return data.json();
        })
        .then(data => {
            store.data = data
        })
        .catch(error => {
            console.log(error);
        })
}

onMounted(() => {
    GetMessages();
})

watch(() => {
    function scrollFunc() {
        document.addEventListener('keydown', function (event) {
            if (event.ctrlKey && event.code === 'Enter') {
                SendMessage()
            }
        });
    }
    scrollFunc()
})
</script>

<style lang="scss" scoped></style>