import './HowItWorks.css'
import { useTranslation } from '../context/LanguageContext'

export function HowItWorks() {
  const { t } = useTranslation()
  const featureBullets = [
    t('product.f1'),
    t('product.f2'),
    t('product.f3'),
    t('product.f4'),
  ]

  return (
    <section id="product" className="section section-animated how-section">
      <div className="container how-layout">
        <div className="how-diagram">
          <div className="how-diagram-inner">
            <div className="how-mist-visual">
              <svg className="how-diagram-svg" viewBox="0 0 400 130" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <defs>
                  {/* Мягкое размытие для мелких капель — воздушный вид */}
                  <filter id="how-droplet-soft" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
                    <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1.4 0" result="soft" />
                    <feMerge>
                      <feMergeNode in="soft" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Горизонтальная труба — нейтральный серый */}
                <rect x="24" y="16" width="352" height="6" rx="2" className="how-pipe" />
                {/* Нозлы и зоны тумана под каждым */}
                {[72, 136, 200, 264, 328].map((nx, ni) => (
                  <g key={ni}>
                    {/* Нозл — компактный фитинг, тёплый акцент */}
                    <rect x={nx - 5} y="22" width="10" height="6" rx="1" className="how-nozzle-body" />
                    <rect x={nx - 2} y="28" width="4" height="5" rx="0.5" className="how-nozzle-tip" />
                    {/* Лёгкая активная дымка прямо под нозлом — 2–3 частицы */}
                    <circle cx={nx} cy="35" r="0.6" className="how-spray-hint" style={{ animationDelay: `${ni * 0.3}s` }} />
                    <circle cx={nx - 0.5} cy="36" r="0.45" className="how-spray-hint" style={{ animationDelay: `${ni * 0.3 + 0.4}s` }} />
                    <circle cx={nx + 0.4} cy="35.5" r="0.5" className="how-spray-hint" style={{ animationDelay: `${ni * 0.3 + 0.8}s` }} />
                    {/* Конус тумана — мягкий холодный синий */}
                    <path
                      d={`M${nx} 34 L${nx - 32} 108 L${nx + 32} 108 Z`}
                      className="how-mist-cone"
                      style={{ animationDelay: `${ni * 0.4}s` }}
                    />
                    {/* Мелкие частицы в тумане — мерцание */}
                    <circle cx={nx - 8} cy="58" r="1.2" className="how-mist-dot" style={{ animationDelay: `${ni * 0.4 + 0.2}s` }} />
                    <circle cx={nx + 6} cy="72" r="1" className="how-mist-dot" style={{ animationDelay: `${ni * 0.4 + 0.5}s` }} />
                    <circle cx={nx - 4} cy="85" r="1.2" className="how-mist-dot" style={{ animationDelay: `${ni * 0.4 + 0.8}s` }} />
                    {/* Мелкие капли — падают от нозла до низа конуса и испаряются */}
                    <g filter="url(#how-droplet-soft)">
                      {[
                        { x: 0, r: 0.7 },
                        { x: -0.35, r: 0.55 },
                        { x: 0.4, r: 0.6 },
                        { x: -0.2, r: 0.5 },
                        { x: 0.3, r: 0.55 },
                        { x: -0.4, r: 0.5 },
                      ].map((d, i) => (
                        <circle
                          key={i}
                          cx={nx + d.x}
                          cy="36"
                          r={d.r}
                          className="how-droplet-fall"
                          style={{ animationDelay: `${ni * 0.5 + i * 0.35}s` }}
                        />
                      ))}
                    </g>
                  </g>
                ))}
                {/* Подпись «Cooling zone» — по центру между низом конусов и низом карточки */}
                <g className="how-cooling-zone-wrap">
                  <text x="200" y="123.5" textAnchor="middle" className="how-cooling-zone-label">Cooling zone</text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="how-copy">
          <h2 className="section-title">{t('product.title')}</h2>
          <p className="section-subtitle how-lead">{t('product.subtitle')}</p>

          <ul className="product-features">
            {featureBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
