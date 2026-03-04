import './PainSolution.css'
import { useTranslation } from '../context/LanguageContext'

export function PainSolution() {
  const { t } = useTranslation()
  return (
    <section id="problems" className="section section-animated pain-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('pain.title')}</h2>
          <p className="section-subtitle">{t('pain.subtitle')}</p>
        </div>
        <div className="pain-grid">
          <article className="pain-card pain-card-bad">
            <p className="pain-label">{t('pain.badLabel')}</p>
            <h3 className="pain-title">{t('pain.badTitle')}</h3>
            <ul className="pain-list">
              <li>{t('pain.bad1')}</li>
              <li>{t('pain.bad2')}</li>
              <li>{t('pain.bad3')}</li>
              <li>{t('pain.bad4')}</li>
            </ul>
          </article>
          <article className="pain-card pain-card-good">
            <p className="pain-label">{t('pain.goodLabel')}</p>
            <h3 className="pain-title">{t('pain.goodTitle')}</h3>
            <ul className="pain-list">
              <li>{t('pain.good1')}</li>
              <li>{t('pain.good2')}</li>
              <li>{t('pain.good3')}</li>
              <li>{t('pain.good4')}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
