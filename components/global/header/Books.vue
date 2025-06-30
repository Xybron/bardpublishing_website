<script lang="ts" setup>
import { Button } from '@/components/ui/button';
import { BadgeCheckIcon } from 'lucide-vue-next';
</script>
<template>
    <main class="w-screen h-screen grid grid-cols-1 place-items-center  md:grid-cols-2 bg-green-50">

        <div class="px-8 md:px-25 ">
            <div class="max-w-lg text-black">
                <div
                    class="my-5 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <BadgeCheckIcon class="w-4 h-4 mr-2" />
                    New Release
                </div>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-title font-semibold mb-6 animate-fade-in">
                    Managing Technology and Family Life
                </h1>
                <p class="mb-8 animate-fade-in leading-relaxed text-gray-700">
                    In today’s fast-paced digital world, parenting comes with new challenges—and opportunities. In
                    Parenting Digital Natives, author Aubrey Richards provides a practical and insightful guide to
                    raising children in the age of screens, social media, and smart devices.
                </p>
                <div>
                    <Button
                        class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-medium transition flex items-center gap-2">

                        Read on Kindle
                    </Button>
                </div>
            </div>


        </div>
        <div class=" bg-white h-[50vh] md:h-[90vh] z-10 rounded-xl">
            <img src="/imgs/book/digital_natives.webp" alt="Parenting Digital Natives"
                class=" h-full object-cover rounded-xl" />
        </div>
    </main>
</template>