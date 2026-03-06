/**
 * Пререндер: вставляет HTML приложения в index.html при сборке.
 * Результат — статическая страница с контентом для SEO и быстрого первого отображения (SSG).
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const distDir = join(root, 'dist')
const templatePath = join(distDir, 'index.html')
const serverEntryPath = join(distDir, 'server', 'entry-server.js')
const placeholder = '<!--ssr-outlet-->'

const template = readFileSync(templatePath, 'utf-8')
const { render } = await import(pathToFileURL(serverEntryPath).href)
const appHtml = render()

if (!template.includes(placeholder)) {
  throw new Error(`Placeholder ${placeholder} not found in ${templatePath}`)
}

const html = template.replace(placeholder, appHtml)
writeFileSync(templatePath, html, 'utf-8')
console.log('Prerender: index.html updated with SSR content.')
