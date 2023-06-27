<template>
  <main class="min-h-screen">
    <section>
      <!-- <div id="contents"></div> -->
      <div id="contents" class="flex flex-col justify-between gap-5">
        <div
          class="bg-white text-black p-2 rounded-lg border-b-4 border-r-2 w-[70%] border-gray-600 shadow-md shadow-white"
          v-for="i in 3"
          :key="i"
        >
          <h1 class="text-center"><strong>Blog title</strong></h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem
          aliquid aspernatur consectetur consequuntur distinctio dignissimos
          laborum, explicabo sed, aperiam similique sint voluptatem quas iste
          doloribus nesciunt. Aut, non porro. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Magni dolorem aliquid aspernatur
          consectetur consequuntur distinctio dignissimos laborum, explicabo
          sed, aperiam similique sint voluptatem quas iste doloribus nesciunt.
          Aut, non porro.
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
// const { data, error } = await useFetch("http://localhost:4000/api/content/findall")
// console.log(error);

// const content = async () => {
//     const content = document.querySelector("#contents")
//     for (let i in data.value) {
//         let div = document.createElement("div")
//         div.className = "bg-white p-5 rounded-lg overflow-hidden shadow-md shadow-gray-100 border-b-4 border-r-2 border-gray-500 max-w-fit mb-5"
//         div.innerHTML += data.value[+i].content
//         content.appendChild(div)
//     }
// }

// onMounted(() => {
//     content();
// })
</script>

<style lang="scss" scoped></style>
