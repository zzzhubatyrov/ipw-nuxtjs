// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
// @ts-ignore
  app: {
    head: {
      title: 'IPW - Резюме и Вакансии'
    }
  },
// @ts-ignore
  css: [
    '@/assets/css/style.css',
  ]
})
