<template>
    <div>
        <Navbar />
        <div id="main" class="overflow-hidden overflow-y-auto max-h-screen">
            <div class="lg:pt-32 pt-20 lg:px-40 md:px-20 sm:px-10 px-5">
                <slot />

            </div>
            <Footer class="bg-neutral-100" />
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const routerUrl = ref('/');

watch(
    () => route.fullPath,
    async () => {
        let main = document.querySelector('#main');
        main.scrollTo(0, 0);
        routerUrl.value = route.fullPath
    }
);
</script>

<style lang="scss" scoped></style>