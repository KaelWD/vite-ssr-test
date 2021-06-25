import path from 'path'
import vue from '@vitejs/plugin-vue'
import viteSSR from 'vite-ssr/plugin'

const resolve = file => path.resolve(__dirname, file)

export default {
  root: path.resolve(__dirname, 'src'),
  server: {
    port: process.env.PORT,
    strictPort: !!process.env.PORT,
  },
  plugins: [
    viteSSR(),
    vue(),
  ],
}
