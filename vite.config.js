import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5174,
    // อนุญาตทุกซับโดเมนของ trycloudflare.com (Cloudflare Quick Tunnel)
    allowedHosts: ['.trycloudflare.com'],
  },
})
