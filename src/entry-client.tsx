import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import { LanguageProvider } from './context/LanguageContext'
import App from './App'

const app = (
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
)

const rootEl = document.getElementById('root')!
// Если контент уже есть (пререндер/SSR) — гидратируем, иначе обычный рендер (dev)
if (rootEl.hasChildNodes() && rootEl.children.length > 0) {
  hydrateRoot(rootEl, app)
} else {
  createRoot(rootEl).render(app)
}
