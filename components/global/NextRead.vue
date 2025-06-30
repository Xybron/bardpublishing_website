<script setup lang="ts">
const books = [
    {
        title: 'Parenting Digital Natives',
        image: '/imgs/book/digital_natives.webp'
    },
    {
        title: 'The Allure of The Oil Palm Tree',
        image: '/imgs/book/palm_tree.webp'
    },
    {
        title: 'Mental Overload and Creating Balance',
        image: '/imgs/book/mental_overload.webp'
    },
]
</script>
<template>
    <section class="bg-green-50 py-30 px-6 md:px-20">
        <div class="max-w-7xl mx-auto grid grid-cols-5 gap-5 ">

            <!-- Text Content -->
            <div class="col-span-5 md:col-span-2">
                <p class="text-green-600 text-lg font-medium mb-2">
                    Find your next great read.
                </p>
                <h2 class="font-title text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Published Titles
                </h2>
                <p class="text-gray-700 leading-relaxed mb-6">
                    Explore a diverse and growing library of books published by Bard Publishing.
                    From powerful fiction to insightful non-fiction, our titles are crafted to inform,
                    entertain, and inspire readers across genres.
                </p>
                <NuxtLink to="/books"
                    class="hidden md:block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-medium transition">
                    Browse All Books
                </NuxtLink>
            </div>

            <!-- Book Covers -->
            <img v-for="book in books" :src="book.image" :alt="book.title" class="hidden md:block w-36 md:w-65" />

        </div>
        <div class="md:hidden">

            <div class="flex flex-wrap gap-2 justify-around">
                <!-- Book Covers -->
                <img v-for="book in books" :src="book.image" :alt="book.title"
                    class="w-36 md:w-65 h-auto object-contain" />
            </div>

            <NuxtLink to="/books"
                class="mt-10 w-full block bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-center rounded font-medium transition">
                Browse All Books
            </NuxtLink>

        </div>



    </section>
</template>
