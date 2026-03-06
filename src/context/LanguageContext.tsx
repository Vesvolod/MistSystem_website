import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import { translations, type Locale } from '../i18n/translations'

const STORAGE_KEY = 'mistsystem-locale'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const defaultLocale: Locale = 'en'

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getStoredLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'id') return stored
  } catch {
    // ignore
  }
  return defaultLocale
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getStoredLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === 'id' ? 'id' : 'en'
  }, [locale])

  const t = useCallback(
    (key: string): string => {
      const dict = translations[locale]
      return dict[key] ?? key
    },
    [locale]
  )

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation must be used within LanguageProvider')
  return ctx
}
