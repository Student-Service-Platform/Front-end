import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { config } from './src/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
      proxy: {
          '/api': {
              target: config.domain, //接口域名
              
              //changeOrigin: true,             //是否跨域
              //ws: true,                       //是否代理 websockets
          }
      }
  }
})
