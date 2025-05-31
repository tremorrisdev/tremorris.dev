// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
