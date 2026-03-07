import './FinalCTA.css'
import { useTranslation } from '../context/LanguageContext'

const TRUST_KEYS = ['1', '2', '3', '4'] as const

export function FinalCTA() {
  const { t } = useTranslation()
  return (
    <section id="final-cta" className="section final-cta-section">
      <div className="container final-cta-inner">
        <h2 className="final-cta-title">{t('finalCta.title')}</h2>
        <p className="final-cta-subtitle">{t('finalCta.subtitle')}</p>
        <div className="final-cta-trust">
          {TRUST_KEYS.map((k) => (
            <span key={k} className="final-cta-trust-item">{t(`finalCta.trust${k}`)}</span>
          ))}
        </div>
        <a href="#lead-form" className="btn btn-primary btn-lg final-cta-btn">
          {t('finalCta.cta')}
        </a>
        <p className="final-cta-note">{t('finalCta.note')}</p>
      </div>
    </section>
  )
}
