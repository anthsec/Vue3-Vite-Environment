import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    post: "0.0.0.0.", //打开显示本地地址
    // port: '3000',//端口号
    proxy: { // 本地开发环境通过代理实现跨域
      // 正则表达式写法
      '/api': {
        target: 'http://127.0.0.1:5000', // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
