import './Hero.css'
import { useEffect, useRef } from 'react'
import { useTranslation } from '../context/LanguageContext'

export function Hero() {
  const { t } = useTranslation()
  const heroSectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 220
      const progress = Math.max(0, Math.min(window.scrollY / maxScroll, 1))

      if (heroSectionRef.current) {
        heroSectionRef.current.style.setProperty('--fog-progress', progress.toString())
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section id="hero" ref={heroSectionRef} className="hero-section">
      <div className="hero-bg">
        <div className="hero-bg-photo" />
        <div className="hero-gradient-orb hero-orb-1" />
        <div className="hero-gradient-orb hero-orb-2" />
        <div className="hero-grid-overlay" />
      </div>
      <div className="container hero-layout">
        <div className="hero-content section-animated">
          <p className="hero-eyebrow">{t('hero.eyebrow')}</p>
          <h1 className="hero-title">
            {t('hero.title')}
            <br />
            <span className="hero-title-accent">{t('hero.titleLine2')}</span>
          </h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <div className="hero-cta-row">
            <a href="#lead-form" className="btn btn-primary btn-lg">
              {t('hero.ctaPrimary')}
            </a>
            <a href="#calculator" className="btn btn-secondary btn-lg">
              {t('hero.ctaSecondary')}
            </a>
          </div>
          <div className="hero-meta">
            <span>{t('hero.meta1')}</span>
            <span className="hero-meta-dot" />
            <span>{t('hero.meta2')}</span>
            <span className="hero-meta-dot" />
            <span>{t('hero.meta3')}</span>
          </div>
        </div>
        <div className="hero-visual section-animated">
          <p className="hero-visual-caption">{t('hero.caption')}</p>
        </div>
      </div>
      <div className="hero-fog-layer" />
      <div className="hero-scroll-indicator">
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
