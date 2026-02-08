import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Webapp_BFFencing/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        gallery: 'gallery.html',
        about: 'about.html',
        contact: 'contact.html',
      },
    },
  },
})
