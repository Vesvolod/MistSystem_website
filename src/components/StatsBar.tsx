import './StatsBar.css'
import { useTranslation } from '../context/LanguageContext'

const STATS = [
  { value: 'stats.venues', label: 'stats.venuesLabel' },
  { value: 'stats.tempDrop', label: 'stats.tempDropLabel' },
  { value: 'stats.energySaving', label: 'stats.energySavingLabel' },
  { value: 'stats.lifespan', label: 'stats.lifespanLabel' },
]

export function StatsBar() {
  const { t } = useTranslation()
  return (
    <section className="stats-bar" aria-label="Key numbers">
      <div className="container stats-grid">
        {STATS.map((s) => (
          <div key={s.value} className="stats-item">
            <span className="stats-number">{t(s.value)}</span>
            <span className="stats-label">{t(s.label)}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
