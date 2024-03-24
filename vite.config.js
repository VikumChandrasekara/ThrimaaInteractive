import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base:"/ThrimaaInteractive/",
  
  plugins: [react()],
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
})

export const configForSubdirectory1 = defineConfig({
  base: '/ThrimaaInteractive/',
});

export const configForSubdirectory2 = defineConfig({
  base: '/ThrimaaInteractive/portfolio/',
});