<template>
    <div class="relative min-h-screen overflow-x-clip bg-[#09090b]">
        <a href="#main" class="skip">Skip to content</a>
        <div class="progress" :style="{ transform: `scaleX(${progress})` }"></div>
        <div class="aurora" aria-hidden="true">
            <span class="blob b1"></span>
            <span class="blob b2"></span>
            <span class="blob b3"></span>
            <span class="grid-bg"></span>
        </div>
        <Navbar />
        <div id="main" class="relative pt-28">
            <slot />
        </div>
        <Footer class="relative max-w-[1800px] mx-auto" />
        <button type="button" aria-label="Back to top" class="totop" :class="{ show: progress > 0.12 }"
            @click="toTop">
            <i class="bx bx-chevron-up"></i>
        </button>
    </div>
</template>

<script setup>
const progress = ref(0);
function toTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
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
    transform-origin: left; background: linear-gradient(90deg, #22c55e, #0d9488, #0f766e);
}
.skip { position: fixed; left: 12px; top: -60px; z-index: 100; padding: 8px 14px; border-radius: 8px; background: #22c55e; color: #052e16; font-weight: 600; transition: top .2s; }
.skip:focus { top: 12px; }
.totop {
    position: fixed; left: 20px; bottom: 20px; z-index: 50; display: grid; place-items: center;
    width: 46px; height: 46px; border-radius: 9999px; font-size: 26px; color: #fff;
    background: rgba(24,24,27,.85); border: 1px solid rgba(255,255,255,.18); backdrop-filter: blur(8px);
    opacity: 0; transform: translateY(12px); pointer-events: none;
    transition: opacity .3s, transform .3s, background .2s, border-color .2s;
}
.totop.show { opacity: 1; transform: none; pointer-events: auto; }
.totop:hover { background: #16a34a; border-color: #22c55e; }
.aurora { position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
.blob { position: absolute; border-radius: 9999px; filter: blur(110px); opacity: .45; animation: drift 22s ease-in-out infinite; }
.b1 { width: 520px; height: 520px; left: -120px; top: -80px; background: #22c55e; }
.b2 { width: 480px; height: 480px; right: -120px; top: 20%; background: #0f766e; animation-delay: -7s; opacity: .3; }
.b3 { width: 440px; height: 440px; left: 30%; bottom: -160px; background: #0d9488; animation-delay: -14s; opacity: .25; }
.grid-bg {
    position: absolute; inset: 0;
    background-image: linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: radial-gradient(ellipse at 50% 20%, #000 20%, transparent 75%);
}
@keyframes drift { 50% { transform: translate(60px, 50px) scale(1.12); } }
@media (prefers-reduced-motion: reduce) { .blob { animation: none; } }
</style>
