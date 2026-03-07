import './Comparison.css'
import { useTranslation } from '../context/LanguageContext'

const CRITERIA = [
  { key: 'cooling', suffix: 'Cooling', icon: '❄️' },
  { key: 'tablesDry', suffix: 'Dry', icon: '💧' },
  { key: 'visual', suffix: 'Visual', icon: '👁' },
  { key: 'premiumFit', suffix: 'Fit', icon: '✦' },
  { key: 'energy', suffix: 'Energy', icon: '⚡' },
  { key: 'outdoor', suffix: 'Outdoor', icon: '☀️' },
] as const

const SYSTEMS = [
  { id: 'highPressure', highlight: true },
  { id: 'fans', highlight: false },
  { id: 'lowPressure', highlight: false },
  { id: 'ac', highlight: false },
] as const

export function Comparison() {
  const { t } = useTranslation()

  return (
    <section id="comparison" className="section comparison-section">
      <div className="container">
        <div className="section-header section-header-center comparison-header">
          <h2 className="section-title">{t('comparison.title')}</h2>
          <p className="section-subtitle">{t('comparison.subtitle')}</p>
        </div>

        {/* Десктоп: таблица */}
        <div className="comparison-desktop">
          <div className="comparison-table" role="region" aria-label="Comparison of cooling options">
            <div className="comparison-thead">
              <div className="comparison-th comparison-th-empty" aria-hidden="true" />
              {SYSTEMS.map((sys) => (
                <div
                  key={sys.id}
                  className={`comparison-th ${sys.highlight ? 'comparison-th-ours' : ''}`}
                >
                  {sys.highlight && <span className="comparison-badge">{t('comparison.ourPick')}</span>}
                  <span className="comparison-th-text">{t(`comparison.${sys.id}`)}</span>
                </div>
              ))}
            </div>
            {CRITERIA.map((row) => (
              <div key={row.key} className="comparison-tr">
                <div className="comparison-td comparison-td-label">{t(`comparison.${row.key}`)}</div>
                {SYSTEMS.map((sys) => (
                  <div
                    key={sys.id}
                    className={`comparison-td ${sys.highlight ? 'comparison-td-ours' : ''}`}
                  >
                    {t(`comparison.${sys.id}${row.suffix}`)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Мобильный: карточки */}
        <div className="comparison-mobile">
          {SYSTEMS.map((sys) => (
            <div
              key={sys.id}
              className={`comparison-card ${sys.highlight ? 'comparison-card-ours' : ''}`}
            >
              <h3 className="comparison-card-title">
                {sys.highlight && <span className="comparison-card-badge">{t('comparison.ourPick')}</span>}
                {t(`comparison.${sys.id}`)}
              </h3>
              <dl className="comparison-card-list">
                {CRITERIA.map((row) => (
                  <div key={row.key} className="comparison-card-row">
                    <dt>{t(`comparison.${row.key}`)}</dt>
                    <dd>{t(`comparison.${sys.id}${row.suffix}`)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
