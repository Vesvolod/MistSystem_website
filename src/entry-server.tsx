import { renderToString } from 'react-dom/server'
import { StrictMode } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import App from './App'

export function render() {
  return renderToString(
    <StrictMode>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StrictMode>,
  )
}
