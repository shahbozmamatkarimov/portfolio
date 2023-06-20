<template>
    <main class="min-h-screen mb-10">
        <section class="contact flex justify-center gap-5 z-10">
            <div class="text-center rounded bg-white min-w-fit w-72 z-10 px-5 py-7">
                <button
                    class="text-[#faab0d] border-2 border-[#faab0d] rounded-full text-2xl hover:bg-[#faab0d] hover:text-white duration-700 px-3 py-2"><i
                        class='bx bx-map'></i></button>
                <h1 class="font-bold text-lg py-5">Our location</h1>
                <p class="text-gray-700 min-w-fit">{{store.location}}</p>
            </div>
            <div class="text-center rounded bg-white min-w-fit w-72 z-10 px-5 py-7">
                <button
                    class="text-[#faab0d] border-2 border-[#faab0d] rounded-full text-2xl hover:bg-[#faab0d] hover:text-white duration-700 px-3 py-2"><i
                        class='bx bxs-phone-call'></i></button>
                <h1 class="font-bold text-lg py-5">Contact us</h1>
                <p class="text-gray-700">{{store.phone}}</p>
            </div>
            <div class="text-center rounded min-w-fit bg-white w-72 z-10 px-5 py-7">
                <button
                    class="text-[#faab0d] border-2 border-[#faab0d] rounded-full text-2xl hover:bg-[#faab0d] hover:text-white duration-700 px-3 py-2"><i
                        class='bx bx-envelope'></i></button>
                <h1 class="font-bold text-lg py-5">Send message</h1>
                <p class="text-gray-700 text-xs">{{store.email}}</p>
            </div>
        </section>
        <section class="flex justify-center">
            <form class="flex flex-col justify-center rounded items-center bg-[#faab0d] gap-5 w-[40rem] pt-24 pb-10 -mt-12">
                <h1 class="md:text-3xl sm:text-2xl text-lg font-bold text-center text-white">Send your message!</h1>
                <input class="w-[80%] border-2 border-gray-300 bg-white outline-none p-1 rounded required" type="text"
                    placeholder="Enter your name">
                <input class="w-[80%] border-2 border-gray-300 bg-white outline-none p-1 rounded required" type="email"
                    placeholder="Enter your email">
                <textarea class="w-[80%] border-2 border-gray-300 bg-white outline-none p-1 rounded required" rows="5"
                    placeholder="Enter your message"></textarea>
                <input
                    class="border-2 border-white cursor-pointer hover:bg-white hover:text-[#faab0d] text-white focus:border-[#faab0d] px-5 py-1 font-bold rounded-lg"
                    type="submit">
            </form>
        </section>
    </main>
</template>
  
<script setup>

const store = reactive({
    location: "",
    email: "",
    phone: "",
})

const descriptionFunc = async () => {
    fetch('https://portfolio-wanw.onrender.com/api/profile/findall')
        .then(data => {
            return data.json();
        })
        .then(data => {
            store.location = data[0].city + ',' + data[0].district + ',' + data[0].address
            store.phone = data[0].phone
            store.email = data[0].email
        })
        .catch(error => {
            console.log(error);
        })
}

onMounted(() => {
    descriptionFunc();
})
</script>
    
<style lang="scss">
@media (max-width:1200px) {
    .contact {
        flex-wrap: wrap;
    }
}
</style>
    