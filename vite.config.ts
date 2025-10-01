import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Ascolta su tutti gli indirizzi
    port: 5173, // Porta di default
    strictPort: true, // Se la porta è occupata, fallisce invece di provare un'altra
    open: true
  }
})
