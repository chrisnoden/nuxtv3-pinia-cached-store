import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        // pinia plugin
        '@pinia/nuxt',
    ],
    nitro: {
        preset: 'node-server'
    },
})
