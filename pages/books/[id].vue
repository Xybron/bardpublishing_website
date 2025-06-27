<script setup lang="ts">
import { useRoute } from 'vue-router';
import SubHeader from '@/components/global/header/SubHeader.vue';
import { useBookStore } from '~/stores/book.store';

const route = useRoute();
const bookStore = useBookStore();

const bookId = route.params.id as string; // Nuxt dynamic route param books/:id
const bookDetails = bookStore.getBookById(bookId);
</script>

<template>
  <SubHeader :title="bookDetails?.title ?? 'Unknown Book'" :subtitle="''" />

  <div v-if="bookDetails">
    <section class="relative pt-12  pb-80 sm:py-16 lg:py-20 xl:py-40 bg-green-50">
    <div class="absolute left-50 top-10 bottom-10">
        <img class="object-cover h-full" :src="bookDetails.image" :alt="bookDetails.title" /> 
    </div>

    <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl text-black">
        <div class="flex items-center justify-end px-4 sm:px-0 text-black">
            <div class="sm:max-w-xs lg:max-w-md">
             
                    <p >{{bookDetails.description}}</p>
                    <h1 class="mt-4 text-2xl font-bold  sm:text-3xl">Key Insights:</h1>
                    <p v-for="insight in bookDetails.insights" class="mt-4 text-sm font-normal leading-6  sm:text-base sm:leading-7 sm:mt-7 text-opacity-80">
                        {{ insight }}
                    </p>
       
            </div>
            
        </div>
    </div>
</section>

  </div>
  <div v-else>
    <p>Book not found.</p>
  </div>
  <PublishedBooks />
</template>
