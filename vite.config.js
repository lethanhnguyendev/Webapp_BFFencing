import { defineConfig } from 'vite'

export default defineConfig({
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
