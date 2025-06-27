<template>
  <section class="py-12 bg-gray-900 sm:py-16 lg:py-20 xl:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="max-w-2xl mx-auto text-center">
        <p class="text-base font-semibold text-green-500">Subscribe for free</p>
        <h2 class="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:mt-8">Subscribe to
          our newsletter & get the latest updates</h2>
      </div>

      <form action="#" method="POST"
        class="flex flex-col justify-between max-w-lg mx-auto mt-12 rounded-full sm:items-center sm:border sm:border-gray-700 sm:p-1 sm:flex-row sm:mt-16 sm:focus-within:border-green-500 sm:focus-within:ring-1 sm:focus-within:ring-green-500">
        <div class="flex-1">
          <label for="email" class="sr-only"> Email address </label>
          <input type="email" name="email" id="email" placeholder="Enter your email address"
            class="block w-full px-6 py-4 text-base font-normal text-white placeholder-gray-400 bg-transparent border border-gray-700 rounded-full focus:outline-none sm:border-transparent focus:border-green-500 focus:ring-1 focus:ring-green-500 sm:focus:ring-0 sm:focus:border-transparent" />
        </div>
        <button type="submit"
          class="inline-flex items-center justify-center w-full px-6 py-4 mt-4 text-base font-medium text-white transition-all duration-200 bg-green-600 border border-transparent rounded-full shadow-sm sm:mt-0 sm:w-auto hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:ring-offset-gray-900">
          Subscribe Now
        </button>
      </form>
    </div>
  </section>

  <footer class="relative py-12 sm:py-16 bg-black overflow-hidden bg-cover bg-no-repeat bg-right"
    style="background: linear-gradient(to left, rgba(0, 0, 0, 0.85) 40%, rgba(0, 0, 0, 1) 90%), url('/imgs/books.jpg');">
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
                <li>
                  <NuxtLink to="/about" class="text-sm text-white text-opacity-50 hover:text-opacity-100">About Us
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/publishing-packages" class="text-sm text-white text-opacity-50 hover:text-opacity-100">
                    Publishing Packages</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/success-stories" class="text-sm text-white text-opacity-50 hover:text-opacity-100">
                    Success Stories</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/store" class="text-sm text-white text-opacity-50 hover:text-opacity-100">Bookstore
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <div>
              <h6 class="font-serif text-lg font-semibold text-white">Site Links</h6>
              <ul class="mt-5 space-y-4 cursor-pointer">
                <li>
                  <NuxtLink to="/blog" class="text-sm text-white text-opacity-50 hover:text-opacity-100">Blog</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/faqs" class="text-sm text-white text-opacity-50 hover:text-opacity-100">FAQs</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/resources" class="text-sm text-white text-opacity-50 hover:text-opacity-100">Author
                    Resources</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/terms" class="text-sm text-white text-opacity-50 hover:text-opacity-100">Terms &
                    Conditions</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/privacy" class="text-sm text-white text-opacity-50 hover:text-opacity-100">Privacy
                    Policy</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
