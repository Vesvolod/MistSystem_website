import './TrustProof.css'
import { useTranslation } from '../context/LanguageContext'

export function TrustProof() {
  const { t } = useTranslation()
  return (
    <section id="trust" className="section trust-section">
      <div className="container">
        <div className="section-header section-header-center trust-header">
          <h2 className="section-title">{t('trust.title')}</h2>
          <p className="section-subtitle">{t('trust.subtitle')}</p>
        </div>
        <div className="trust-cards">
          <article className="trust-card">
            <h3 className="trust-card-title">{t('trust.card1.title')}</h3>
            <p className="trust-card-text">{t('trust.card1.text')}</p>
          </article>
          <article className="trust-card">
            <h3 className="trust-card-title">{t('trust.card2.title')}</h3>
            <p className="trust-card-text">{t('trust.card2.text')}</p>
          </article>
          <article className="trust-card">
            <h3 className="trust-card-title">{t('trust.card3.title')}</h3>
            <p className="trust-card-text">{t('trust.card3.text')}</p>
          </article>
        </div>
        <p className="trust-footer-note">{t('trust.designedFor')}</p>
      </div>
    </section>
  )
}
