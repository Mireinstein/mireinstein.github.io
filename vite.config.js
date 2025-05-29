import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // ─── Base URL ───────────────────────────────────────────────────────────────
  base: '/',

  // ─── Build output ───────────────────────────────────────────────────────────
  build: {
    outDir: 'docs',
    emptyOutDir: true,   // clean docs/ on each build
  },
})
