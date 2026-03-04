import './Benefits.css'
import { useTranslation } from '../context/LanguageContext'

const BENEFIT_ICONS = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
]

export function Benefits() {
  const { t } = useTranslation()
  return (
    <section id="benefits" className="section section-animated benefits-section">
      <div className="container">
        <div className="section-header section-header-center">
          <h2 className="section-title">{t('benefits.title')}</h2>
          <p className="section-subtitle">{t('benefits.subtitle')}</p>
        </div>
        <div className="benefits-grid">
          {[1, 2, 3, 4].map((n, i) => (
            <article key={n} className="benefit-card">
              <div className="benefit-icon-wrap">
                {BENEFIT_ICONS[i]}
              </div>
              <h3 className="benefit-title">{t(`benefit${n}.title`)}</h3>
              <p className="benefit-text">{t(`benefit${n}.text`)}</p>
              <div className="benefit-card-shine" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
