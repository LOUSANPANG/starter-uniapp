import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

/**
 * @type {import('vite').UserConfig}
 */

export default defineConfig({
  build: {
    sourcemap: false,
  },

  plugins: [uni()],
})
