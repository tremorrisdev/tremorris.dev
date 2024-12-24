// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@vueuse/nuxt"],
  ssr: true,
  compatibilityDate: "2024-12-05",
  icon: {
    serverBundle: { collections: ['line-md'] }
  }
})