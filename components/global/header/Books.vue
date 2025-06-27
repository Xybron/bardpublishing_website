<script lang="ts" setup>
import { Button } from '@/components/ui/button';
</script>
<template>
    <main class="w-screen h-screen relative flex justify-around items-center bg-green-50">
       
        <div class=" relative z-10 px-8 md:px-25 ">
            <div class="max-w-lg text-black">
                                <p class="text-green-500 mb-5">New Release</p>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-title font-semibold mb-6 animate-fade-in">
                    Managing Technology and Family Life
                </h1>
                <p class="mb-8 animate-fade-in">
                    In today’s fast-paced digital world, parenting comes with new challenges—and opportunities. In Parenting Digital Natives, author Aubrey Richards provides a practical and insightful guide to raising children in the age of screens, social media, and smart devices.
                </p>
                <div>
                    <Button
                        class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-medium transition flex items-center gap-2">
                        <!-- Amazon SVG Logo -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 256 256"
                            fill="currentColor">
                            <path
                                d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0Zm54.8 184.3c-7.6 4.6-15.4 8.7-23.2 12.4-26.7 12.2-55.4 18.7-83.6 18.7-9.4 0-18.8-.7-28.1-2.1-3.1-.5-5.3-3.4-4.8-6.5.5-3.1 3.4-5.3 6.5-4.8 8.6 1.3 17.3 2 25.9 2 25.5 0 51.4-5.9 75.9-17 6.5-3 12.8-6.3 19-9.9 2.7-1.6 6.2-.7 7.8 2 .7 1.2 1 2.6.7 3.9-.4 1.4-1.3 2.5-2.5 3.3Zm-73.3-35.5c0-11.9 9.7-21.6 21.6-21.6s21.6 9.7 21.6 21.6-9.7 21.6-21.6 21.6-21.6-9.7-21.6-21.6Zm72.6 2c.7-2.5 1.1-5.1 1.1-7.7 0-18.4-14.9-33.3-33.3-33.3s-33.3 14.9-33.3 33.3 14.9 33.3 33.3 33.3c7.2 0 13.9-2.3 19.4-6.2l10.2 10.2c1.7 1.7 4.4 1.7 6.1 0s1.7-4.4 0-6.1l-10.2-10.2c4-5.4 6.2-12.2 6.2-19.4 0-2.6-.4-5.2-1.1-7.7Z" />
                        </svg>
                        Read on Kindle
                    </Button>
                </div>
            </div>


        </div>
        <div class=" bg-white h-[90vh] z-10 rounded-xl">
            <img src="/imgs/book/digital_natives.webp" alt="Parenting Digital Natives"
                class=" h-full object-cover rounded-xl" />
        </div>
    </main>
</template>