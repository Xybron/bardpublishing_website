<script setup lang="ts">
defineProps<{
  title: string
  subtitle:string
}>()
</script>
<template>
     <section class="h-[40vh] bg-green-50 flex flex-col items-center justify-center gap-5 relative">
       <div class="absolute inset-0 z-0 bg-cover bg-center bg-[url('/imgs/bg_hero.jpg')]">
            <div class="absolute inset-0 bg-black opacity-70"></div>
        </div>
        <div class="relative z-10 text-white text-center">

        <h1 class="font-title text-5xl">{{ title }}</h1>
        <p>{{ subtitle }}</p>
        </div>
    </section>
</template>