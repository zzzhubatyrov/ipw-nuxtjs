// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },
  app: {
    head: {
      title: 'IPW - Резюме и Вакансии',
    }
  },
  css: [
    '@/assets/css/style.css',
  ],
  ssr: true,
  target: 'server',
}
