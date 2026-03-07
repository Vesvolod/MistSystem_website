import './Benefits.css'
import { useTranslation } from '../context/LanguageContext'

export function Benefits() {
  const { t } = useTranslation()
  return (
    <section id="benefits" className="section benefits-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('benefits.title')}</h2>
          <p className="section-subtitle">{t('benefits.subtitle')}</p>
        </div>
        <div className="benefits-grid">
          {[1, 2, 3, 4].map((n) => (
            <article key={n} className="benefit-card">
              <p className="benefit-overline">{t(`benefit${n}.overline`)}</p>
              <h3 className="benefit-title">{t(`benefit${n}.title`)}</h3>
              <p className="benefit-text">{t(`benefit${n}.text`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
