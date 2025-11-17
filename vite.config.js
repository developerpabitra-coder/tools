import { defineConfig } from 'vite'

// Minimal Vite config — no plugin import (avoids @vitejs/plugin-react resolution errors on CI)
export default defineConfig({
  build: {
    // keep default build behavior for Vite
  }
})
