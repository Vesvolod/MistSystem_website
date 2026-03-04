import './SocialProof.css'
import { useTranslation } from '../context/LanguageContext'

const CASES = [
  { label: 'social.case1.label', title: 'social.case1.title', text: 'social.case1.text', author: 'social.case1.author' },
  { label: 'social.case2.label', title: 'social.case2.title', text: 'social.case2.text', author: 'social.case2.author' },
  { label: 'social.case3.label', title: 'social.case3.title', text: 'social.case3.text', author: 'social.case3.author' },
]

export function SocialProof() {
  const { t } = useTranslation()
  return (
    <section id="cases" className="section section-animated social-section">
      <div className="container">
        <div className="section-header section-header-center">
          <h2 className="section-title">{t('social.title')}</h2>
          <p className="section-subtitle">{t('social.subtitle')}</p>
        </div>
        <div className="social-grid">
          {CASES.map((c) => (
            <article key={c.label} className="social-card">
              <div className="social-quote-icon">"</div>
              <p className="social-label">{t(c.label)}</p>
              <h3 className="social-title">{t(c.title)}</h3>
              <p className="social-text">{t(c.text)}</p>
              <div className="social-author-row">
                <div className="social-avatar" />
                <p className="social-author">{t(c.author)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
