// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@vueuse/nuxt', '@nuxt/content'],
  compatibilityDate: '2025-04-20',
  future: {
    compatibilityVersion: 4,
  },
  icon: {
    serverBundle: { collections: ['line-md'] },
  },
})
