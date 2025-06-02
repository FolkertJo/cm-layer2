export default defineNuxtConfig({
    // Extending from base nuxt.config.ts!
    app: {
      head: {
        title: 'Cow Layer',
        meta: [
          { name: 'description', content: 'I am using the extends feature in Nuxt!' }
        ],
      }
    }
  })