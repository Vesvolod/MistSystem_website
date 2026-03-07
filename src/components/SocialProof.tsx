import './SocialProof.css'
import { useTranslation } from '../context/LanguageContext'

const CASES = [
  {
    label: 'social.case1.label',
    title: 'social.case1.title',
    s1k: 'social.case1.s1k',
    s1v: 'social.case1.s1v',
    s2k: 'social.case1.s2k',
    s2v: 'social.case1.s2v',
    s3k: 'social.case1.s3k',
    s3v: 'social.case1.s3v',
  },
  {
    label: 'social.case2.label',
    title: 'social.case2.title',
    s1k: 'social.case2.s1k',
    s1v: 'social.case2.s1v',
    s2k: 'social.case2.s2k',
    s2v: 'social.case2.s2v',
    s3k: 'social.case2.s3k',
    s3v: 'social.case2.s3v',
  },
  {
    label: 'social.case3.label',
    title: 'social.case3.title',
    s1k: 'social.case3.s1k',
    s1v: 'social.case3.s1v',
    s2k: 'social.case3.s2k',
    s2v: 'social.case3.s2v',
    s3k: 'social.case3.s3k',
    s3v: 'social.case3.s3v',
  },
]

export function SocialProof() {
  const { t } = useTranslation()
  return (
    <section id="cases" className="section section-animated social-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('social.title')}</h2>
          <p className="section-subtitle">{t('social.subtitle')}</p>
        </div>
        <div className="social-grid">
          {CASES.map((c) => (
            <article key={c.label} className="social-card">
              <p className="social-label">{t(c.label)}</p>
              <h3 className="social-title">{t(c.title)}</h3>
              <dl className="social-spec">
                <div className="social-spec-row">
                  <dt>{t(c.s1k)}</dt>
                  <dd>{t(c.s1v)}</dd>
                </div>
                <div className="social-spec-row">
                  <dt>{t(c.s2k)}</dt>
                  <dd>{t(c.s2v)}</dd>
                </div>
                <div className="social-spec-row">
                  <dt>{t(c.s3k)}</dt>
                  <dd>{t(c.s3v)}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <p className="social-disclaimer">{t('social.disclaimer')}</p>
      </div>
    </section>
  )
}
