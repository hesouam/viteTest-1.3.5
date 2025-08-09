import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/// git<reference types="vitest" />

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  }
})
