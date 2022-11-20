import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import {createStyleImportPlugin,ElementPlusResolve} from 'vite-plugin-style-import'
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }, 
    plugins: [
        vue(),
        createStyleImportPlugin({
            resolves:[
                ElementPlusResolve()
            ],
            libs:[{
                libraryName:'element-plus',
                esModule:true,
                resolveStyle:(name)=>{
                    return `element-plus/libs/theme-chalk/${name}.css`
                },
             ensureStyleFile:true
            }]
        })
    ],
    server: {
        // port: 8080, //启动端口
        // hmr: {
        //     host: '127.0.0.1',
        //     port: 8080
        // },
        host: '0.0.0.0',
        // 设置 https 代理
        proxy: {
            '/api': {
                target: 'your https address',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, '')
            }
        }
    }
   
});

