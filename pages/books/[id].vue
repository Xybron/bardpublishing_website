<script setup lang="ts">
import { useRoute } from 'vue-router';
import SubHeader from '@/components/global/header/SubHeader.vue';
import { useBookStore } from '~/stores/book.store';

const route = useRoute();
const bookStore = useBookStore();

const bookId = route.params.id as string;
const bookDetails = bookStore.getBookById(bookId);

const downloadFile = (resource_link: string) => {
  const link = document.createElement('a')
  link.href = `${window.location.origin}/${resource_link}`
  link.download = ""
  link.click()
}

</script>

<template>
  <SubHeader :title="bookDetails?.title ?? 'Unknown Book'" :subtitle="''" />

  <div v-if="bookDetails">
    <!-- Hero Section with Enhanced Layout -->
    <section class="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
      <div
        class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%23059669 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40">
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <!-- Book Cover Section -->
          <div class="relative group text-center">
            <!-- <div class="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div> -->
            <div
              class="relative bg-white rounded-2xl p-8 shadow-2xl transform group-hover:scale-102 transition-all duration-300">

              <img class="w-full h-full object-cover rounded-xl shadow-lg" :src="bookDetails.image"
                :alt="bookDetails.title" />
              <!-- CTA Button -->
              <div class="pt-5">
                <Button
                  class="mx-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-medium transition flex items-center gap-2">

                  Read on Kindle
                </Button>
              </div>

            </div>
          </div>

          <!-- Book Details Section -->
          <div class="space-y-8">
            <div class="space-y-6">
              <div
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Bestseller
              </div>

              <h1 class="font-title text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {{ bookDetails.title }}
              </h1>

              <p class="text-gray-600 leading-relaxed max-w-2xl">
                {{ bookDetails.description }}
              </p>
            </div>

            <!-- Key Insights Section -->
            <div class="space-y-6">
              <h2 class="text-2xl font-bold text-gray-900 flex items-center">
                <svg class="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Key Insights
              </h2>

              <div class="grid gap-4">
                <div v-for="(insight, index) in bookDetails.insights" :key="index"
                  class="flex items-start space-x-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-green-100 hover:border-green-200 transition-colors duration-200">
                  <div class="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span class="text-green-600 font-semibold text-sm">{{ index + 1 }}</span>
                  </div>
                  <p class="text-gray-700 leading-relaxed">{{ insight }}</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>

    <!-- Book Stats/Info Section -->
    <section class="bg-white border-t border-gray-100" v-if="false">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center group cursor-pointer">
            <div
              class="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4 group-hover:bg-green-200 transition-colors duration-200">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div class="text-2xl font-bold text-gray-900">240</div>
            <div class="text-sm text-gray-500">Pages</div>
          </div>

          <div class="text-center group cursor-pointer">
            <div
              class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4 group-hover:bg-blue-200 transition-colors duration-200">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div class="text-2xl font-bold text-gray-900">4.8</div>
            <div class="text-sm text-gray-500">Rating</div>
          </div>

          <div class="text-center group cursor-pointer">
            <div
              class="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4 group-hover:bg-purple-200 transition-colors duration-200">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div class="text-2xl font-bold text-gray-900">7.5K</div>
            <div class="text-sm text-gray-500">Readers</div>
          </div>

          <div class="text-center group cursor-pointer">
            <div
              class="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl mb-4 group-hover:bg-orange-200 transition-colors duration-200">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="text-2xl font-bold text-gray-900">4h</div>
            <div class="text-sm text-gray-500">Read Time</div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center">
      <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-1.01-6-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
      <h3 class="mt-2 text-sm font-medium text-gray-900">Book not found</h3>
      <p class="mt-1 text-sm text-gray-500">The book you're looking for doesn't exist.</p>
    </div>
  </div>

  <!-- Book Resources Section -->
  <section class="bg-gray-50 py-16 lg:py-20" v-if="bookDetails.resources?.length > 0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="font-title text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Exclusive Resources
        </h2>
        <p class=" text-gray-600 max-w-2xl mx-auto">
          Download these free resources from the author to enhance your reading experience and put the book's insights
          into practice.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Resource Card  -->
        <div v-for="resource in bookDetails.resources" :key="resource.name"
          class="group bg-white rounded-2xl p-6 hover:shadow-xl hover:cursor-pointer transition-all duration-300 border border-gray-100 hover:border-green-200">
          <div class="flex items-start justify-between mb-4">

            <span class="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">{{ resource.type
              }}</span>
          </div>

          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            {{ resource.name }}
          </h3>
          <div class="my-2 h-20 w-full rounded-2xl bg-gray-50 bg-cover bg-center"
            :style="`background-image: url('${resource.previewImage}')`">
          </div>

          <p class="text-gray-600 text-sm mb-4 leading-relaxed">
            {{ resource.description }}
          </p>
          <button @click="downloadFile(resource.link)"
            class="w-full flex items-center justify-center px-4 py-3 bg-gray-50 hover:bg-green-50 text-gray-700 hover:text-green-700 hover:cursor-pointer rounded-lg transition-colors duration-200 group-hover:bg-green-50 group-hover:text-green-700">

            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>

            Download Free
          </button>

        </div>


      </div>


    </div>
  </section>

  <!-- Enhanced Quote Section -->
  <section class="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">

    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="mb-8">
        <svg class="w-16 h-16 mx-auto text-green-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
        </svg>
      </div>

      <blockquote class="text-2xl md:text-3xl lg:text-4xl font-serif italic text-white leading-relaxed mb-8">
        "Any book that helps you understand yourself better, that helps you grow, that helps you improve your
        circumstances, any book that does that for you is worth your time."
      </blockquote>

      <div class="flex items-center justify-center space-x-4">
        <div class="w-12 h-0.5 bg-gradient-to-r from-transparent to-green-400"></div>
        <cite class="text-xl font-semibold text-green-400 not-italic">Maya Angelou</cite>
        <div class="w-12 h-0.5 bg-gradient-to-l from-transparent to-green-400"></div>
      </div>
    </div>
  </section>

  <PublishedBooks />
</template>