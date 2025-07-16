<script lang="ts" setup>
import { Button } from '@/components/ui/button';
import { BadgeCheckIcon } from 'lucide-vue-next';
</script>
<template>
    <main class="w-screen min-h-screen relative flex items-center ">
        <div class="absolute inset-0 z-0 bg-cover bg-center bg-[url('/imgs/bg_hero.jpg')]">
            <div class="absolute inset-0 bg-black opacity-70"></div>
        </div>
        <div class="container relative z-10 px-8 md:px-25 text-white">
            <div class="max-w-lg">
                <div
                    class="my-5 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100/30 backdrop-blur-md border border-green-200/50 shadow-sm text-green-400">

                    <BadgeCheckIcon class="w-4 h-4 mr-2" />
                    Latest Release: Parenting Digital Natives
                </div>

                <h1 class="text-4xl md:text-5xl lg:text-6xl font-title font-semibold mb-6 animate-fade-in">
                    Publishing Ideas That Matter
                </h1>
                <p class="mb-8 animate-fade-in">
                    At Bard Publishing, we champion bold voices and timely stories.
                    Our latest release, Parenting Digital Natives, offers a practical and empowering guide for raising
                    children in a hyper-connected world.
                </p>
                <div>
                    <Button @click="$router.push('/books')"
                        class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-medium transition flex items-center gap-2">

                        Explore All books
                    </Button>
                </div>

            </div>


        </div>
        <div class="hidden md:block md:absolute bg-white h-[90vh] z-10 rounded-xl -bottom-10 right-25">
            <img src="/imgs/book/digital_natives.webp" alt="Parenting Digital Natives"
                class=" h-full object-cover rounded-xl" />
        </div>
    </main>
</template>