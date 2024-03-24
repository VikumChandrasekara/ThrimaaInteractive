import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/ThrimaaInteractive/",

  server: {
    fs: {
      strict: false // Allow serving files outside of project root
    }
  },
  
  plugins: [react()],
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
})
