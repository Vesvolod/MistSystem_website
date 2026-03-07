import './Hero.css'
import { useTranslation } from '../context/LanguageContext'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-layout">
        <div className="hero-content section-animated">
          <p className="hero-eyebrow">{t('hero.eyebrow')}</p>

          <h1 className="hero-title">
            {t('hero.title')}
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
        </div>

        <figure className="hero-image-card section-animated">
          <picture>
            <source
              srcSet="/images/hero_mobile.jpg"
              media="(max-width: 768px)"
            />
            <img
              src="/images/hero_desktop.jpg"
              alt="Guests dining comfortably in a cooled outdoor terrace"
            />
          </picture>
        </figure>
      </div>

      <div className="container hero-bottom" aria-label="Key benefits">
        <div className="hero-bottom-item hero-bottom-item-primary">
          <p className="hero-bottom-label">
            {t('heroBenefits.1.labelPrefix')}{' '}
            <span className="hero-bottom-label-accent">10°C</span>{' '}
            {t('heroBenefits.1.labelSuffix')}
          </p>
          <p className="hero-bottom-main hero-bottom-main-primary">
            {t('heroBenefits.1.main')}
          </p>
        </div>
        <div className="hero-bottom-item">
          <p className="hero-bottom-label">{t('heroBenefits.2.label')}</p>
          <p className="hero-bottom-main">{t('heroBenefits.2.main')}</p>
        </div>
        <div className="hero-bottom-item">
          <p className="hero-bottom-label">{t('heroBenefits.3.label')}</p>
          <p className="hero-bottom-main hero-bottom-main-soft">
            {t('heroBenefits.3.main')}
          </p>
        </div>
        <div className="hero-bottom-item">
          <p className="hero-bottom-label">{t('heroBenefits.4.label')}</p>
          <p className="hero-bottom-main">{t('heroBenefits.4.main')}</p>
        </div>
      </div>
    </section>
  )
}
