<script setup lang="ts">
const testimonials = [
  {
    quote: "Finally, a parenting guide that speaks directly to our digital challenges. Practical, relatable, and much needed!",
    name: "Amina Okoro",
    book: "Parenting Digital Natives",
    image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg",
  },
  {
    quote: "This book helped me regain control over screen time in our home. So helpful for modern parents.",
    name: "Sarah Thompson",
    book: "Parenting Digital Natives",
    image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-2.jpg",
  },
  {
    quote: "Gave me clarity and practical steps to manage stress at home. A real game-changer.",
    name: "Kwame Boateng",
    book: "Mental Overload and Creating Balance in Your Home",
    image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-3.jpg",
  },
  {
    quote: "The author provides clear, actionable advice that’s easy to implement.",
    name: "Rachel Collins",
    book: "Parenting Digital Natives",
    image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-4.jpg",
  },
  {
    quote: "An insightful and refreshing take on how to foster calm in the midst of family chaos.",
    name: "Michael Mensah",
    book: "Mental Overload and Creating Balance in Your Home",
    image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-5.jpg",
  },
  {
    quote: "Highly recommended for every parent navigating the challenges of raising kids in a connected world.",
    name: "Laura Bennett",
    book: "Parenting Digital Natives",
    image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-6.jpg",
  },
]
</script>
<template>
    <section class="bg-green-50 py-50 px-6 md:px-20">
        <div class="max-w-7xl mx-auto grid grid-cols-5 gap-5 ">

            <!-- Text Content -->
            <div class="col-span-2">
     
                <h2 class="font-title text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    See What Our Readers Are Discovering
                </h2>
                <p class="text-gray-700 leading-relaxed mb-6">
                    More than just books, we offer experiences that resonate. Read what our community is saying about the journeys they’ve undertaken and the insights they’ve gained from our diverse collection of publications.
                </p>

            </div>
           

           

        </div>
       
      <div>
    <div class="mt-10 grid grid-cols-1 gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="(item, index) in testimonials"
        :key="index"
        class="flex flex-col bg-white rounded-md"
      >
        <div class="flex flex-col justify-between flex-1 p-8">
          <div class="flex-1">
            <blockquote>
              <p class="text-lg text-gray-800">“{{ item.quote }}”</p>
            </blockquote>
          </div>

          <div class="mt-8">
            <div class="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
            <div class="flex items-center">
              <img :src="item.image" alt="" class="flex-shrink-0 object-cover w-10 h-10 rounded-full" />
              <div class="ml-3">
                <p class="text-base font-semibold text-gray-800 truncate">{{ item.name }}</p>
                <p class="text-sm text-gray-500 truncate italic break-words">{{ item.book }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


    </section>
</template>
