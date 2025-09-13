import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: 'src/sidepanel',
  publicDir: fileURLToPath(new URL('./public', import.meta.url)),
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: fileURLToPath(new URL('./dist', import.meta.url)),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        sidepanel: fileURLToPath(new URL('./src/sidepanel/index.html', import.meta.url)),
        background: fileURLToPath(new URL('./src/background/background.ts', import.meta.url)),
        content: fileURLToPath(new URL('./src/content/content.ts', import.meta.url)),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'background') return 'background.js'
          if (chunkInfo.name === 'content') return 'content.js'
          return 'assets/[name].[hash].js'
        },
      },
    },
  },
})
