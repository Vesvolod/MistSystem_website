import './HowItWorks.css'
import { useTranslation } from '../context/LanguageContext'

export function HowItWorks() {
  const { t } = useTranslation()
  const featureBullets = [
    t('product.f1'),
    t('product.f2'),
    t('product.f3'),
    t('product.f4'),
    t('product.f5'),
  ]

  return (
    <section id="product" className="section section-animated how-section">
      <div className="container how-layout">
        <div className="how-diagram">
          <div className="how-diagram-inner">
            <div className="how-mist-visual">
              <svg width="100%" height="140" viewBox="0 0 800 160" style={{ maxWidth: 700 }}>
                <rect x="80" y="18" width="640" height="4" rx="2" fill="#b8bcc4" />

                {[160, 280, 400, 520, 640].map((nx, ni) => (
                  <g key={ni}>
                    <rect x={nx - 6} y="22" width="12" height="14" rx="2" fill="#9ea3ab" />
                    <rect x={nx - 3} y="34" width="6" height="6" rx="2" fill="#d4944c" />

                    <path
                      d={`M${nx} 40 L${nx - 55} 150 L${nx + 55} 150 Z`}
                      fill="url(#sprayGrad)"
                      opacity="0.42"
                    />

                    {Array.from({ length: 14 }, (_, pi) => {
                      const offsetX = (pi - 6.5) * 9
                      const baseX = nx + offsetX
                      const delay = ni * 0.25 + pi * 0.12
                      const startY = 46 + (pi % 3) * 4
                      const endY = 150
                      const drift = offsetX > 0 ? 16 : -16
                      const duration = 2.2 + (pi % 4) * 0.35

                      return (
                        <circle key={pi} cx={baseX} r="2.4" fill="rgba(70,160,210,0.55)">
                          <animate
                            attributeName="cy"
                            from={`${startY}`}
                            to={`${endY}`}
                            dur={`${duration}s`}
                            begin={`${delay}s`}
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            values="0;0.75;0.35;0"
                            dur={`${duration}s`}
                            begin={`${delay}s`}
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="r"
                            values="1.4;3.2;1.2"
                            dur={`${duration}s`}
                            begin={`${delay}s`}
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="cx"
                            values={`${baseX};${baseX + drift}`}
                            dur={`${duration}s`}
                            begin={`${delay}s`}
                            repeatCount="indefinite"
                          />
                        </circle>
                      )
                    })}
                  </g>
                ))}

                <defs>
                  <linearGradient id="sprayGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(173, 216, 245, 0.65)" />
                    <stop offset="55%" stopColor="rgba(173, 216, 245, 0.35)" />
                    <stop offset="100%" stopColor="rgba(173, 216, 245, 0)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="how-temp-bar">
              <span className="how-temp-label how-temp-label-hot">36°C</span>
              <div className="how-temp-track">
                <svg width="100%" height="30" viewBox="0 0 600 30" style={{ maxWidth: 500 }}>
                  {[0, 1, 2, 3, 4].map((d) => (
                    <circle key={d} r="3" cy="15" fill="#d4944c" opacity="0.35">
                      <animate
                        attributeName="cx"
                        from="0"
                        to="600"
                        dur="3s"
                        begin={`${d * 0.6}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;0.5;0.5;0"
                        dur="3s"
                        begin={`${d * 0.6}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="r"
                        values="2;4;2"
                        dur="3s"
                        begin={`${d * 0.6}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  ))}
                  <rect
                    x="180"
                    y="2"
                    width="240"
                    height="26"
                    rx="13"
                    fill="rgba(70,160,210,0.06)"
                    stroke="rgba(70,160,210,0.15)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
              <span className="how-temp-label how-temp-label-cool">26°C</span>
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
