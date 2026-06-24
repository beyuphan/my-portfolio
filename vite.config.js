import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // hr-backend ayrı bir proje; Vite onu izlemesin (yoksa backend her derlemede sayfa full reload olur)
    watch: {
      ignored: ['**/hr-backend/**'],
    },
  },
})
