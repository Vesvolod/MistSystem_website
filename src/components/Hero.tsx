import './Hero.css'
import { useTranslation } from '../context/LanguageContext'

const BENEFIT_KEYS = ['1', '2', '3', '4'] as const

export function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="hero-eyebrow">{t('hero.eyebrow')}</p>
          <h1 className="hero-title">{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <div className="hero-cta-row">
            <a href="#lead-form" className="btn btn-primary btn-lg">
              {t('hero.ctaPrimary')}
            </a>
            <a href="#pricing" className="btn btn-secondary btn-lg">
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>
        <figure className="hero-image-card">
          <picture>
            <source srcSet="/images/hero_mobile.jpg" media="(max-width: 768px)" />
            <img
              src="/images/hero_desktop.jpg"
              alt="Guests dining comfortably in a cooled outdoor terrace"
            />
          </picture>
        </figure>
      </div>

      <div className="container hero-proof" aria-label="Key benefits">
        {BENEFIT_KEYS.map((i) => (
          <div key={i} className={`hero-proof-item ${i === '1' ? 'hero-proof-item-primary' : ''}`}>
            <p className="hero-proof-label">{t(`heroBenefits.${i}.label`)}</p>
            <p className="hero-proof-main">{t(`heroBenefits.${i}.main`)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
