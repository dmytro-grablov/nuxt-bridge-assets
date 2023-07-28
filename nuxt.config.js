import { defineNuxtConfig } from '@nuxt/bridge';

export default defineNuxtConfig({
  bridge: {
    // -- Opt-in features --

    // Use Vite as the bundler instead of webpack 4
    vite: true,

    // Enable Nuxt 3 compatible useHead
    meta: false,

    // -- Default features --

    // Use legacy server instead of Nitro
    nitro: true,

    // (!) Disable Nuxt 3 compatible `nuxtApp` interface
    app: true,

    // (!) disable legacy Composition API support
    capi: {
      legacy: false
    },

    // Do not transpile modules
    transpile: true,

    // Disable <script setup> support
    scriptSetup: false,

    // Disable composables auto importing
    imports: false,

    // Do not warn about module incompatibilities
    constraints: false,

    // (!) Disable typescript support
    typescript: false,
  },
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
  },
  vite: {
    base: 'https://my-cdn.net',
  },
  build: {
    publicPath: 'https://my-cdn.net',
  },
});
