import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url' // 新增：引入Node.js的URL模块

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 新增：resolve.alias 配置，告诉 Vite '@' 指向什么路径
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})