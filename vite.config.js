import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // 明确设置基础路径为根目录
  plugins: [vue()],
  build: {
    // 确保构建输出目录正确
    outDir: 'dist',
    // 可选：优化构建配置
    rollupOptions: {
      output: {
        // 确保资源文件路径正确
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    }
  }
})