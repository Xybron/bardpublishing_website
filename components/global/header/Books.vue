<script lang="ts" setup>
import { Button } from '@/components/ui/button';
import { BadgeCheckIcon } from 'lucide-vue-next';
import { motion } from 'motion-v'
</script>
<template>
    <main class="w-screen h-screen grid grid-cols-1 place-items-center  md:grid-cols-2 bg-green-50">

        <div class="px-8 md:px-25 ">
            <div class="max-w-lg text-black">
                <motion.div :initial="{ opacity: 0, y: 10 }" :animate="{ opacity: 1, y: 0 }"
                    :transition="{ delay: 0.1, duration: 0.5 }"
                    class="my-5 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <BadgeCheckIcon class="w-4 h-4 mr-2" />
                    New Release
                </motion.div>
                <motion.h1 :initial="{ opacity: 0, y: 10 }" :animate="{ opacity: 1, y: 0 }"
                    :transition="{ delay: 0.25, duration: 0.5 }"
                    class="text-4xl md:text-5xl lg:text-6xl font-title font-semibold mb-6 animate-fade-in">
                    Managing Technology and Family Life
                </motion.h1>
                <motion.p :initial="{ opacity: 0, y: 10 }" :animate="{ opacity: 1, y: 0 }"
                    :transition="{ delay: 0.5, duration: 0.5 }"
                    class="mb-8 animate-fade-in leading-relaxed text-gray-700">
                    In today’s fast-paced digital world, parenting comes with new challenges—and opportunities. In
                    Parenting Digital Natives, author Aubrey Richards provides a practical and insightful guide to
                    raising children in the age of screens, social media, and smart devices.
                </motion.p>
                <motion.div :initial="{ opacity: 0, y: 10 }" :animate="{ opacity: 1, y: 0 }"
                    :transition="{ delay: 0.75, duration: 0.5 }">
                    <Button
                        class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-medium transition flex items-center gap-2">

                        Read on Kindle
                    </Button>
                </motion.div>
            </div>


        </div>
        <motion.div class=" bg-white h-[50vh] md:h-[90vh] z-10 rounded-xl" :initial="{ opacity: 0, y: 100 }"
            :animate="{ opacity: 1, y: 0 }" :transition="{
                duration: 0.4,
                delay: 0.5,
                y: { type: 'spring', visualDuration: 0.4, bounce: 0.5 }
            }">
            <img src="/imgs/book/digital_natives.webp" alt="Parenting Digital Natives"
                class=" h-full object-cover rounded-xl" />
        </motion.div>
    </main>
</template>