import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: { chunkSizeWarningLimit: 1600 },
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            ssr: 'resources/js/ssr.tsx',
            refresh: true
        }),
        react()
    ],
    resolve: {
        alias: {
            ui: resolve('resources/js/components/ui'),
            'ziggy-js': resolve('resources/js/tightenco/ziggy')
        }
    }
})
