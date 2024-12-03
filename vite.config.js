// vite.config.js
import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import injectHTML from 'vite-plugin-html-inject'

export default defineConfig({
    plugins: [injectHTML(), ViteMinifyPlugin({})],
})
