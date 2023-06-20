<template>
    <main class="min-h-screen">
        <section>
            <div id="contents"></div>
        </section>
    </main>
</template>

<script setup>
const { data, error } = await useFetch("https://portfolio-wanw.onrender.com/api/content/findall")
console.log(error);

const content = async () => {
    const content = document.querySelector("#contents")
    for (let i in data.value) {
        let div = document.createElement("div")
        div.className = "bg-white p-5 rounded-lg overflow-hidden shadow-md shadow-gray-100 border-b-4 border-r-2 border-gray-500 max-w-fit mb-5"
        div.innerHTML += data.value[+i].content
        content.appendChild(div)
    }
}

onMounted(() => {
    content();
})
</script>

<style lang="scss" scoped></style>