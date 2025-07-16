<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string
  subtitle: string
  backgroundImage?: string
}>(), {
  backgroundImage: '/imgs/bg_hero.jpg'
})
</script>
<template>
  <section class="h-[40vh] bg-green-50 flex flex-col items-center justify-center gap-5 relative">
    <div class="absolute inset-0 z-0 bg-cover bg-center"
      :style="{ backgroundImage: `url('${props.backgroundImage}')` }">
      <div class="absolute inset-0 bg-black opacity-70"></div>
    </div>
    <div class="relative z-10 text-white text-center">
      <div class="max-w-xs md:max-w-3xl">
        <h1 class="font-title text-3xl md:text-5xl">{{ title }}</h1>
        <p>{{ subtitle }}</p>
      </div>

    </div>
  </section>
</template>