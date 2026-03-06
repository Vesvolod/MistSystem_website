# SSR / пререндер и деплой на Vercel

## Важно: это не Next.js

Проект собран на **Vite + React**. В нём нет:
- `page.tsx` / `layout.tsx`
- `next.config.js` / `next.config.ts`

Точки входа:
- **Клиент:** `src/entry-client.tsx` (монтирует React, при готовом HTML — гидратация)
- **Сервер (пререндер):** `src/entry-server.tsx` (рендер в строку при сборке)
- **Страница:** `index.html` (корень) → внутри `<div id="root">` при сборке подставляется HTML из пререндера

## Как устроен пререндер

1. `npm run build` выполняет:
   - `vite build` → в `dist/` попадает клиентский билд и `dist/index.html` (с плейсхолдером или пустым `<div id="root">`);
   - `vite build --ssr src/entry-server.tsx --outDir dist/server` → SSR-бандл в `dist/server/`;
   - `node scripts/prerender.mjs` → скрипт подставляет отрендеренный HTML в `dist/index.html` вместо плейсхолдера/пустого `#root`.

2. В итоге в `dist/index.html` уже лежит полный HTML страницы (header, hero, секции и т.д.). Его и раздаёт Vercel.

## Если на Vercel видна пустая оболочка

Значит в прод отдаётся **до** пререндера вариант (без подставленного HTML). Проверьте:

1. **Build Command в Vercel**
   - В проекте: Settings → General → Build & Development Settings.
   - **Build Command** должен быть: `npm run build` (именно полная команда, не только `vite build`).
   - Если там стоит только `vite build`, пререндер не запустится — контент останется пустым до загрузки JS.

2. **Логи сборки**
   - В логах деплоя должна быть строка: `Prerender: index.html updated with SSR content.`
   - Если её нет — либо не вызывается `node scripts/prerender.mjs`, либо скрипт падает до этой строки (смотрите ошибку в логах).

3. **Output Directory**
   - Должен быть: `dist` (как в `vercel.json` → `outputDirectory`).

4. **Локальная проверка**
   - Выполните у себя: `npm run build`
   - Откройте `dist/index.html` в редакторе: внутри `<div id="root">` должен быть большой блок HTML (секции, текст «Mist System» и т.д.), а не пустота и не только `<!--ssr-outlet-->`.

## Структура релевантных файлов

```
├── index.html                 # Единственная «страница», корень
├── vercel.json                # buildCommand, outputDirectory, rewrites
├── package.json               # "build": "tsc -b && vite build && vite build --ssr ... && node scripts/prerender.mjs"
├── vite.config.ts
├── scripts/
│   └── prerender.mjs          # Подставляет HTML в dist/index.html после сборки
└── src/
    ├── entry-client.tsx       # Точка входа в браузере (+ гидратация)
    ├── entry-server.tsx       # Рендер приложения в строку для пререндера
    ├── main.tsx               # Реэкспорт entry-client (для совместимости)
    ├── App.tsx                # Корневой компонент приложения
    └── ...
```

После правок задеплойте заново и при необходимости принудительно пересоберите без кэша (в Vercel: Redeploy → Clear cache and redeploy).
