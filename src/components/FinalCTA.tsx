import './FinalCTA.css'
import { useTranslation } from '../context/LanguageContext'

export function FinalCTA() {
  const { t } = useTranslation()
  return (
    <section id="final-cta" className="section final-cta-section">
      <div className="container final-cta-inner">
        <h2 className="final-cta-title">{t('finalCta.title')}</h2>
        <p className="final-cta-subtitle">{t('finalCta.subtitle')}</p>
        <a href="#lead-form" className="btn btn-primary btn-lg final-cta-btn">
          {t('finalCta.cta')}
        </a>
      </div>
    </section>
  )
}
