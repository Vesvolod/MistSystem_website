/**
 * Пререндер: вставляет HTML приложения в index.html при сборке.
 * Результат — статическая страница с контентом для SEO и быстрого первого отображения (SSG).
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = process.cwd?.() || join(__dirname, '..')
const distDir = join(root, 'dist')
const templatePath = join(distDir, 'index.html')
const serverEntryPath = join(distDir, 'server', 'entry-server.js')

if (!existsSync(templatePath)) {
  throw new Error(`[prerender] dist/index.html not found at ${templatePath}. Run "vite build" first.`)
}
if (!existsSync(serverEntryPath)) {
  throw new Error(`[prerender] SSR bundle not found at ${serverEntryPath}. Run "vite build --ssr ..." first.`)
}

let template = readFileSync(templatePath, 'utf-8')
const { render } = await import(pathToFileURL(serverEntryPath).href)
const appHtml = render()

// Подставляем контент: либо по плейсхолдеру, либо в пустой <div id="root">
const placeholder = '<!--ssr-outlet-->'
const rootDivEmpty = '<div id="root"></div>'
const rootDivWithPlaceholder = '<div id="root"><!--ssr-outlet--></div>'

if (template.includes(placeholder)) {
  template = template.replace(placeholder, appHtml)
} else if (template.includes(rootDivWithPlaceholder)) {
  template = template.replace(rootDivWithPlaceholder, `<div id="root">${appHtml}</div>`)
} else if (template.includes(rootDivEmpty)) {
  template = template.replace(rootDivEmpty, `<div id="root">${appHtml}</div>`)
} else {
  // Пытаемся заменить по regex на случай минификации
  const rootRegex = /<div\s+id="root"[^>]*>\s*<\/div>/i
  if (rootRegex.test(template)) {
    template = template.replace(rootRegex, `<div id="root">${appHtml}</div>`)
  } else {
    throw new Error('[prerender] Could not find <div id="root"> or <!--ssr-outlet--> in index.html')
  }
}

if (!template.includes('page-root') && !template.includes('Mist System')) {
  throw new Error('[prerender] Rendered HTML does not contain expected content. SSR may have failed.')
}

writeFileSync(templatePath, template, 'utf-8')
console.log('Prerender: index.html updated with SSR content.')
