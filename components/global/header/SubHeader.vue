<script setup lang="ts">
defineProps<{
  title: string
  subtitle:string
}>()
</script>
<template>
     <section class="h-[40vh] bg-orange-50 flex flex-col items-center justify-center gap-5 relative">
        <h1 class="font-title text-5xl text-gray-700">{{ title }}</h1>
        <p>{{ subtitle }}</p>
        <img class="absolute right-0 left-0 w-40 -bottom-10 mx-auto z-10" src="/imgs/leaf-2.png" alt="" />
    </section>
</template>