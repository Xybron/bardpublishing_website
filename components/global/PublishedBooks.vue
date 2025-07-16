<script setup lang="ts">
import { useBookStore } from '~/stores/book.store';
const bookStore = useBookStore();
const books = bookStore.books;
import { motion } from 'motion-v'
</script>

<template>

    <section class="py-12 bg-white sm:py-16 lg:py-20">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="max-w-md mx-auto text-center">
                <h2 class="text-5xl font-title font-bold text-gray-900">Published Titles</h2>
                <p class="mt-4 text-base font-normal leading-7 text-gray-600">Explore a diverse and growing library of
                    books published by Bard Publishing.</p>
            </div>

            <div
                class="grid grid-cols-1 px-4 mt-12 text-center xl:gap-5 sm:gap-x-4 sm:mt-16 md:gap-y-10 sm:grid-cols-2 md:grid-cols-3 gap-y-8 lg:grid-cols-3 xl:px-3">
                <motion.div class="relative group rounded-sm" v-for="(book, i) in books" :key="book.title"
                    ref="el => cards[i] = el"
                    :initial="{scale:1, opacity: 0, y: 150 }" :whileInView="{ opacity: 1, y: 0, }"
                    :transition="{ delay: i * 0.15, duration: 0.5 }"
                     :whileHover="{ scale: 1.025 }"
                    >
                    <div class="relative">
                        <div class="overflow-hidden aspect-w-3 aspect-h-4">
                            <img class="object-cover w-full h-full transition-all duration-300 origin-bottom "
                                :src="book.image" :alt="book.title" />
                        </div>
                        <!-- <div class="absolute inset-x-0 bottom-6">
                    <p class="bg-white rounded-full border border-green-200 px-4 text-sm font-bold text-gray-900 py-1.5 inline-flex items-center justify-center">Get Now</p>
                </div> -->
                    </div>
                    <h3 class="mt-4 text-base font-bold text-gray-900">
                        <NuxtLink :to="`/books/${book.id}`" title="">
                            {{ book.title }}
                            <span class="absolute inset-0" aria-hidden="true"></span>
                        </NuxtLink>
                    </h3>
                    <!-- <p class="mt-1.5 text-base font-medium text-gray-500">Audio & Sound</p> -->
                </motion.div>


            </div>
        </div>
    </section>


</template>