import './Pricing.css'
import { useTranslation } from '../context/LanguageContext'

export function Pricing() {
  const { t } = useTranslation()
  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('pricing.title')}</h2>
          <p className="section-subtitle">{t('pricing.subtitle')}</p>
        </div>
        <div className="pricing-grid">
          <article className="pricing-card">
            <div className="pricing-top">
              <p className="pricing-label">{t('pricing.card1.label')}</p>
              <h3 className="pricing-title">{t('pricing.card1.title')}</h3>
            </div>
            <p className="pricing-text">{t('pricing.card1.text')}</p>
            <ul className="pricing-list">
              <li>{t('pricing.card1.li1')}</li>
              <li>{t('pricing.card1.li2')}</li>
              <li>{t('pricing.card1.li3')}</li>
            </ul>
            <div className="pricing-bottom">
              <p className="pricing-note">{t('pricing.card1.note')}</p>
              <a href="#lead-form" className="btn btn-secondary btn-full">
                {t('pricing.card1.cta')}
              </a>
            </div>
          </article>
          <article className="pricing-card pricing-card-featured">
            <div className="pricing-top">
              <p className="pricing-label">{t('pricing.card2.label')}</p>
              <h3 className="pricing-title">{t('pricing.card2.title')}</h3>
            </div>
            <p className="pricing-text">{t('pricing.card2.text')}</p>
            <ul className="pricing-list">
              <li>{t('pricing.card2.li1')}</li>
              <li>{t('pricing.card2.li2')}</li>
              <li>{t('pricing.card2.li3')}</li>
            </ul>
            <div className="pricing-bottom">
              <p className="pricing-note">{t('pricing.card2.note')}</p>
              <a href="#lead-form" className="btn btn-primary btn-full">
                {t('pricing.card2.cta')}
              </a>
            </div>
          </article>
          <article className="pricing-card">
            <div className="pricing-top">
              <p className="pricing-label">{t('pricing.card3.label')}</p>
              <h3 className="pricing-title">{t('pricing.card3.title')}</h3>
            </div>
            <p className="pricing-text">{t('pricing.card3.text')}</p>
            <ul className="pricing-list">
              <li>{t('pricing.card3.li1')}</li>
              <li>{t('pricing.card3.li2')}</li>
              <li>{t('pricing.card3.li3')}</li>
            </ul>
            <div className="pricing-bottom">
              <p className="pricing-note">{t('pricing.card3.note')}</p>
              <a href="#lead-form" className="btn btn-secondary btn-full">
                {t('pricing.card3.cta')}
              </a>
            </div>
          </article>
        </div>

        <p className="pricing-disclaimer">{t('pricing.disclaimer')}</p>
      </div>
    </section>
  )
}
