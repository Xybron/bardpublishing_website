<script setup>

// Set default title template
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Bard Publishing` : 'Bard Publishing';
  },
  // Default meta tags
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },

    // Default Open Graph meta tags
    { property: 'og:site_name', content: 'Bard Publishing' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Bard Publishing - Empowering Authors, One Book at a Time' },
    { property: 'og:description', content: 'Bard Publishing helps aspiring authors bring their stories to life through professional self-publishing services and global book distribution.' },
    { property: 'og:image', content: '/imgs/og.jpg' },
    { property: 'og:url', content: 'https://bardpublishing.com' },

    // Twitter Card meta tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Bard Publishing - Empowering Authors, One Book at a Time' },
    { name: 'twitter:description', content: 'Bard Publishing helps aspiring authors bring their stories to life through professional self-publishing services and global book distribution.' },
    { name: 'twitter:image', content: '/imgs/og.jpg' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :height="5"></NuxtLoadingIndicator>
    <div class="min-h-screen relative">

      <NuxtPage />

      <!-- WHATSAPP -->
      <WhatsApp />

    </div>
  </NuxtLayout>
</template>
