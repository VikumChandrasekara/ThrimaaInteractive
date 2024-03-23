import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"./ThrimaaInteractive/",

  // server: {
  //   proxy: {
  //     '/': {
  //       target: 'http://127.0.0.1:5173//ThrimaaInteractive/'
  //     },

  //     '/portfolio': {
  //       target: 'http://127.0.0.1:5173//ThrimaaInteractive/portfolio'
  //     }
  //   }
  // },

  plugins: [react()],
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
})
