import './Process.css'
import { useTranslation } from '../context/LanguageContext'

const STEPS = [
  { key: 'step1', num: '1' },
  { key: 'step2', num: '2' },
  { key: 'step3', num: '3' },
] as const

export function Process() {
  const { t } = useTranslation()
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <div className="section-header section-header-center">
          <h2 className="section-title">{t('how.title')}</h2>
          <p className="section-subtitle">{t('how.subtitle')}</p>
        </div>
        <ol className="process-list">
          {STEPS.map(({ key, num }, idx) => (
            <li key={key} className="process-item">
              <div className="process-num-wrap">
                <span className="process-num" aria-hidden="true">{num}</span>
                {idx < STEPS.length - 1 && <span className="process-connector" aria-hidden="true" />}
              </div>
              <div className="process-body">
                <h3 className="process-item-title">{t(`how.${key}.title`)}</h3>
                <p className="process-item-text">{t(`how.${key}.text`)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
