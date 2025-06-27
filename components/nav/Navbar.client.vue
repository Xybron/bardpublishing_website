<template>
  <header :class="[
    'py-4 sm:py-4  z-50 transition-all duration-300 fixed top-0 left-0 right-0  mx-auto',
    transparentMode && !scrolled ? 'bg-transparent w-full' : 'bg-black opacity-90 rounded-full mt-3 w-[95vw]'
  ]">
    <div class="px-4 md:px-15">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="shrink-0">
          <NuxtLink to="/" title="" class="flex">
            <img class="w-auto h-15"
              src="/imgs/logo_white.png"
              alt="Bard Publishing Logo" />
          </NuxtLink>
        </div>

        <!-- Mobile toggle -->
        <div class="flex md:hidden">
          <button type="button" class="text-white" @click="expanded = !expanded" :aria-expanded="expanded.toString()">
            <span v-if="!expanded">
              <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </span>
            <span v-else>
              <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden space-x-10 md:flex md:items-center md:justify-center lg:space-x-12">
          <NuxtLink to="/" class="text-base font-normal text-gray-100 transition hover:text-white">Home</NuxtLink>
          <NuxtLink to="/books" class="text-base font-normal text-gray-100 transition hover:text-white">Books</NuxtLink>
          <NuxtLink to="#" class="text-base font-normal text-gray-100 transition hover:text-white">Contact Us</NuxtLink>
        </nav>
      </div>

      <Dialog :open="expanded" @update:open="expanded = $event">
        <DialogContent class="transform -translate-y-10">
          <DialogHeader>
            <DialogTitle>Menu</DialogTitle>
          </DialogHeader>

          <!-- Navigation Menu -->
          <div class="py-4">
            <nav class="space-y-2">
              <NuxtLink
                to="/"
                class="flex items-center px-4 py-3 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                @click="expanded = false"
              >
                <svg class="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </NuxtLink>

              <NuxtLink
                to="/books"
                class="flex items-center px-4 py-3 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                @click="expanded = false"
              >
                <svg class="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Books
              </NuxtLink>

              <NuxtLink
                to="#"
                class="flex items-center px-4 py-3 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                @click="expanded = false"
              >
                <svg class="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </NuxtLink>
            </nav>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  </header>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const props = defineProps({
  transparent: {
    type: Boolean,
    default: true
  }
})

const expanded = ref(false)
const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 50)

const windowWidth = ref(0)

onMounted(() => {
  windowWidth.value = window.innerWidth

  const handleResize = () => {
    windowWidth.value = window.innerWidth
  }

  window.addEventListener('resize', handleResize)

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })
})

const transparentMode = computed(() => props.transparent && windowWidth.value >= 768)
</script>
