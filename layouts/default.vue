<template>
    <div class="relative min-h-screen overflow-x-clip bg-[#09090b]">
        <div class="progress" :style="{ transform: `scaleX(${progress})` }"></div>
        <div class="aurora" aria-hidden="true">
            <span class="blob b1"></span>
            <span class="blob b2"></span>
            <span class="blob b3"></span>
            <span class="grid-bg"></span>
        </div>
        <Navbar />
        <div class="relative pt-28">
            <slot />
        </div>
        <Footer class="relative max-w-[1800px] mx-auto" />
    </div>
</template>

<script setup>
const progress = ref(0);
function onScroll() {
    const h = document.documentElement;
    progress.value = h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1);
}
onMounted(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
});
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<style scoped>
.progress {
    position: fixed; top: 0; left: 0; right: 0; height: 3px; z-index: 60;
    transform-origin: left; background: linear-gradient(90deg, #fd6f00, #ff3d77, #a855f7);
}
.aurora { position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
.blob { position: absolute; border-radius: 9999px; filter: blur(110px); opacity: .45; animation: drift 22s ease-in-out infinite; }
.b1 { width: 520px; height: 520px; left: -120px; top: -80px; background: #fd6f00; }
.b2 { width: 480px; height: 480px; right: -120px; top: 20%; background: #a855f7; animation-delay: -7s; opacity: .3; }
.b3 { width: 440px; height: 440px; left: 30%; bottom: -160px; background: #ff3d77; animation-delay: -14s; opacity: .25; }
.grid-bg {
    position: absolute; inset: 0;
    background-image: linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: radial-gradient(ellipse at 50% 20%, #000 20%, transparent 75%);
}
@keyframes drift { 50% { transform: translate(60px, 50px) scale(1.12); } }
@media (prefers-reduced-motion: reduce) { .blob { animation: none; } }
</style>
