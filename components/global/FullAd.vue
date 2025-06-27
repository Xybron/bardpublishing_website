<script lang="ts" setup>
import { Button } from '@/components/ui/button';
</script>
<template>
    <main class="w-screen h-screen relative flex items-center">
        <div class="absolute inset-0 z-0 bg-cover bg-center bg-[url('/imgs/bg_hero_1.jpg')] bg-fixed">
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div class="absolute inset-0 bg-green-900 opacity-40"></div>
        </div>
        <div class="container relative z-10 px-8 md:px-25 text-white">
            <div>
                <p class="mb-15 animate-fade-in uppercase">
                    Expertly Crafted Stories & Ideas
                </p>
                
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-title font-semibold mb-6 animate-fade-in">
                    Unlock Your Next Great Read
                </h1>
                <p class="mb-20 animate-fade-in">
                    Explore captivating stories and insightful knowledge from our curated collection of books.
                </p>
                <div>
                    <Button variant="outline"
                        class="bg-transparent hover:bg-green-700 text-white px-6 py-3 rounded font-medium transition flex items-center gap-2">
                        Discover Our Books
                    </Button>
                </div>
            </div>


        </div>
   
    </main>
</template>