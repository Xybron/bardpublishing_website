<template>
  <footer
    class="relative py-12 sm:py-16 bg-black overflow-hidden bg-cover bg-no-repeat bg-right"
    style="background: linear-gradient(to left, rgba(0, 0, 0, 0.85) 40%, rgba(0, 0, 0, 1) 90%), url('/imgs/books.jpg');"
  >
    <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl relative z-10">
      <div class="grid grid-cols-1 gap-y-12 xl:grid-cols-3 xl:gap-8">
        <!-- Left Column -->
        <div class="xl:col-span-1">
          <img class="w-auto h-15" src="/imgs/logo_white.png" alt="Bard Publishing logo" />
          <p class="mt-6 text-sm text-white">contact@bardpublishing.com</p>
          <p class="mt-2 text-sm text-white">(233) 54 577 3449</p>
        </div>

        <!-- Links -->
        <div class="grid gap-x-8 gap-y-12 md:grid-cols-2 xl:col-span-2">
          <div class="grid grid-cols-2 gap-8 md:grid-cols-2">
            <div>
              <h6 class="font-serif text-lg font-semibold text-white">Quick Links</h6>
              <ul class="mt-5 space-y-4">
                <li><NuxtLink to="/about" class="text-sm text-white text-opacity-50 hover:text-opacity-100">About Us</NuxtLink></li>
                <li><NuxtLink to="/publishing-packages" class="text-sm text-white text-opacity-50 hover:text-opacity-100">Publishing Packages</NuxtLink></li>
                <li><NuxtLink to="/success-stories" class="text-sm text-white text-opacity-50 hover:text-opacity-100">Success Stories</NuxtLink></li>
                <li><NuxtLink to="/store" class="text-sm text-white text-opacity-50 hover:text-opacity-100">Bookstore</NuxtLink></li>
              </ul>
            </div>

            <div>
              <h6 class="font-serif text-lg font-semibold text-white">Site Links</h6>
              <ul class="mt-5 space-y-4 cursor-pointer">
                <li><NuxtLink to="/blog" class="text-sm text-white text-opacity-50 hover:text-opacity-100">Blog</NuxtLink></li>
                <li><NuxtLink to="/faqs" class="text-sm text-white text-opacity-50 hover:text-opacity-100">FAQs</NuxtLink></li>
                <li><NuxtLink to="/resources" class="text-sm text-white text-opacity-50 hover:text-opacity-100">Author Resources</NuxtLink></li>
                <li><NuxtLink to="/terms" class="text-sm text-white text-opacity-50 hover:text-opacity-100">Terms & Conditions</NuxtLink></li>
                <li><NuxtLink to="/privacy" class="text-sm text-white text-opacity-50 hover:text-opacity-100">Privacy Policy</NuxtLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
