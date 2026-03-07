import './Comparison.css'
import { useTranslation } from '../context/LanguageContext'

const ROWS = [
  { key: 'cooling', suffix: 'Cooling', labelKey: 'comparison.cooling' },
  { key: 'tablesDry', suffix: 'Dry', labelKey: 'comparison.tablesDry' },
  { key: 'visual', suffix: 'Visual', labelKey: 'comparison.visual' },
  { key: 'premiumFit', suffix: 'Fit', labelKey: 'comparison.premiumFit' },
  { key: 'energy', suffix: 'Energy', labelKey: 'comparison.energy' },
  { key: 'outdoor', suffix: 'Outdoor', labelKey: 'comparison.outdoor' },
] as const

const COLS = [
  { id: 'highPressure', labelKey: 'comparison.highPressure', highlight: true },
  { id: 'fans', labelKey: 'comparison.fans', highlight: false },
  { id: 'lowPressure', labelKey: 'comparison.lowPressure', highlight: false },
  { id: 'ac', labelKey: 'comparison.ac', highlight: false },
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

        <div className="comparison-wrap">
          <div className="comparison-table" role="region" aria-label="Comparison of cooling options">
            <div className="comparison-thead">
              <div className="comparison-th comparison-th-empty" aria-hidden="true" />
              {COLS.map((col) => (
                <div
                  key={col.id}
                  className={`comparison-th ${col.highlight ? 'comparison-th-highlight' : ''}`}
                >
                  {t(col.labelKey)}
                </div>
              ))}
            </div>
            {ROWS.map((row) => (
              <div key={row.key} className="comparison-tr">
                <div className="comparison-td comparison-td-label">{t(row.labelKey)}</div>
                <div className="comparison-td comparison-td-yes">
                  {t(`comparison.${COLS[0].id}${row.suffix}`)}
                </div>
                <div className="comparison-td">{t(`comparison.${COLS[1].id}${row.suffix}`)}</div>
                <div className="comparison-td">{t(`comparison.${COLS[2].id}${row.suffix}`)}</div>
                <div className="comparison-td">{t(`comparison.${COLS[3].id}${row.suffix}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
