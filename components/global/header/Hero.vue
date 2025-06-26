<script lang="ts" setup>
import { Button } from '@/components/ui/button';
</script>
<template>
    <main class="w-screen h-screen overflow-hidden relative flex items-center">
        <div
            class="absolute inset-0 z-0 bg-cover bg-center bg-[url('/imgs/bg_hero.jpg')]">
            <div class="absolute inset-0 bg-black opacity-70"></div>
        </div>
        <div class="container relative z-10 px-8 md:px-25 text-white">
            <div class="max-w-lg">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-title font-semibold mb-6 animate-fade-in">
                    Publishing Ideas That Matter
                </h1>
                <p class="text-green-500 mb-5">Latest Release: Parenting Digital Natives</p>
                <p class="mb-8 animate-fade-in">
                    At Bard Publishing, we champion bold voices and timely stories.
                    Our latest release, Parenting Digital Natives, offers a practical and empowering guide for raising
                    children in a hyper-connected world.
                </p>
                <div>
                    <Button class="bg-transparent" variant="outline" @click="$router.push('/properties')">
                        Read On Kindle
                    </Button>
                </div>
            </div>


        </div>
    </main>
</template>