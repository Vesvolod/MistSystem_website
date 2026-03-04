import './InstallationMap.css'
import { useState } from 'react'
import { useTranslation } from '../context/LanguageContext'

export function InstallationMap() {
  const { t } = useTranslation()
  const steps = [t('install.s1'), t('install.s2'), t('install.s3')]

  const parts = {
    faucet: { label: 'Water Supply', desc: 'Standard faucet connection' },
    filter: { label: 'Filtration', desc: 'Sediment & mineral filter' },
    pump: { label: 'High-Pressure Pump', desc: '70 bar ceramic plunger' },
    tubing: { label: 'SS Tubing', desc: '316L stainless steel line' },
    elbow: { label: 'Corner Fitting', desc: 'Slip-lock or compression' },
    nozzle: { label: 'Mist Nozzle', desc: 'Brass, 0.15mm orifice' },
    clamp: { label: 'Tube Clamp', desc: 'Mounted every 60 cm' },
  } as const

  type PartId = keyof typeof parts
  const [hoveredPart, setHoveredPart] = useState<PartId | null>(null)

  const Tooltip = ({ id, x, y }: { id: PartId; x: number; y: number }) => {
    if (hoveredPart !== id) return null
    const part = parts[id]
    return (
      <g>
        <rect
          x={x - 75}
          y={y - 52}
          width="150"
          height="44"
          rx="8"
          fill="white"
          stroke="rgba(212,148,76,0.3)"
          strokeWidth="1"
          filter="url(#tooltipShadow)"
        />
        <text
          x={x}
          y={y - 34}
          textAnchor="middle"
          fontSize="11"
          fontWeight={700}
          fill="#1a1f2e"
          fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
        >
          {part.label}
        </text>
        <text
          x={x}
          y={y - 18}
          textAnchor="middle"
          fontSize="9.5"
          fill="#8a929c"
          fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
        >
          {part.desc}
        </text>
      </g>
    )
  }

  return (
    <section id="installation" className="section section-animated installation-section">
      <div className="container installation-layout">
        <div className="installation-visual">
          <div className="installation-card">
            <svg className="installation-svg" viewBox="0 0 800 500" aria-hidden="true">
              <defs>
                <linearGradient id="waterFlow" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(70,160,210,0.15)" />
                  <stop offset="50%" stopColor="rgba(70,160,210,0.4)" />
                  <stop offset="100%" stopColor="rgba(70,160,210,0.15)" />
                </linearGradient>
                <linearGradient id="mistGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(70,160,210,0.4)" />
                  <stop offset="100%" stopColor="rgba(70,160,210,0)" />
                </linearGradient>
                <filter id="tooltipShadow">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.08" />
                </filter>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Patio area */}
              <rect
                x="40"
                y="100"
                width="480"
                height="340"
                rx="16"
                fill="rgba(212,148,76,0.03)"
                stroke="rgba(212,148,76,0.12)"
                strokeWidth="1"
                strokeDasharray="6 4"
              />
              <text
                x="280"
                y="290"
                textAnchor="middle"
                fontSize="14"
                fill="rgba(212,148,76,0.25)"
                fontWeight={700}
                fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
                letterSpacing="4"
              >
                PATIO AREA
              </text>

              {/* House wall */}
              <line x1="540" y1="80" x2="540" y2="460" stroke="#c0c8d0" strokeWidth="3" strokeDasharray="8 4" />
              <text x="543" y="475" fontSize="9" fill="#aab0b8" fontFamily="Plus Jakarta Sans, system-ui, sans-serif">
                WALL
              </text>

              {/* Faucet */}
              <g
                onMouseEnter={() => setHoveredPart('faucet')}
                onMouseLeave={() => setHoveredPart(null)}
                style={{ cursor: 'pointer' }}
              >
                <rect x="710" y="395" width="50" height="40" rx="6" fill="#f5f7f9" stroke="#c0c8d0" strokeWidth="1.5" />
                <rect x="725" y="385" width="20" height="14" rx="3" fill="#dde1e6" stroke="#c0c8d0" strokeWidth="1" />
                <circle cx="735" cy="415" r="6" fill="none" stroke="#46a0d2" strokeWidth="1.5" />
                <line x1="735" y1="409" x2="735" y2="421" stroke="#46a0d2" strokeWidth="1" />
                <Tooltip id="faucet" x={735} y={385} />
              </g>

              {/* Faucet to filter line + flow */}
              <line x1="710" y1="415" x2="680" y2="415" stroke="#46a0d2" strokeWidth="2" opacity="0.4" />
              {[0, 1, 2].map((i) => (
                <circle key={`wf${i}`} r="2.5" cy="415" fill="#46a0d2" opacity="0.6">
                  <animate attributeName="cx" from="710" to="680" dur="1.5s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                  <animate
                    attributeName="opacity"
                    values="0;0.7;0"
                    dur="1.5s"
                    begin={`${i * 0.5}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}

              {/* Filter */}
              <g
                onMouseEnter={() => setHoveredPart('filter')}
                onMouseLeave={() => setHoveredPart(null)}
                style={{ cursor: 'pointer' }}
              >
                <rect x="640" y="400" width="36" height="30" rx="8" fill="#e8f4ec" stroke="#6bc48a" strokeWidth="1.5" />
                <line x1="650" y1="407" x2="650" y2="423" stroke="#6bc48a" strokeWidth="1" opacity="0.5" />
                <line x1="658" y1="407" x2="658" y2="423" stroke="#6bc48a" strokeWidth="1" opacity="0.5" />
                <line x1="666" y1="407" x2="666" y2="423" stroke="#6bc48a" strokeWidth="1" opacity="0.5" />
                <Tooltip id="filter" x={658} y={395} />
              </g>

              {/* Filter to pump tubing + flow */}
              <line x1="640" y1="415" x2="610" y2="415" stroke="#46a0d2" strokeWidth="2" opacity="0.4" />
              <path d="M610 415 L610 300" stroke="#46a0d2" strokeWidth="2" opacity="0.4" />
              {[0, 1, 2].map((i) => (
                <circle key={`fp${i}`} r="2.5" fill="#46a0d2" opacity="0.6">
                  <animate
                    attributeName="cx"
                    values="640;610;610"
                    dur="2s"
                    begin={`${i * 0.65}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values="415;415;300"
                    dur="2s"
                    begin={`${i * 0.65}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;0.7;0.7;0"
                    dur="2s"
                    begin={`${i * 0.65}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}

              {/* Pump */}
              <g
                onMouseEnter={() => setHoveredPart('pump')}
                onMouseLeave={() => setHoveredPart(null)}
                style={{ cursor: 'pointer' }}
              >
                <rect x="580" y="230" width="60" height="70" rx="10" fill="#fff8f0" stroke="#d4944c" strokeWidth="2" />
                <circle cx="610" cy="258" r="14" fill="none" stroke="#d4944c" strokeWidth="1.5" />
                <circle cx="610" cy="258" r="5" fill="#d4944c" opacity="0.2" />
                <line x1="610" y1="244" x2="610" y2="250" stroke="#d4944c" strokeWidth="1.5" />
                <line x1="610" y1="266" x2="610" y2="272" stroke="#d4944c" strokeWidth="1.5" />
                <circle cx="618" cy="240" r="6" fill="white" stroke="#d4944c" strokeWidth="1" />
                <line x1="618" y1="238" x2="621" y2="236" stroke="#d4944c" strokeWidth="1" strokeLinecap="round" />
                <rect
                  x="580"
                  y="230"
                  width="60"
                  height="70"
                  rx="10"
                  fill="none"
                  stroke="#d4944c"
                  strokeWidth="1"
                  opacity="0.3"
                >
                  <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" repeatCount="indefinite" />
                </rect>
                <text
                  x="610"
                  y="290"
                  textAnchor="middle"
                  fontSize="8"
                  fontWeight={700}
                  fill="#d4944c"
                  fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
                >
                  70 BAR
                </text>
                <Tooltip id="pump" x={610} y={225} />
              </g>

              {/* Pump to patio tubing + flow */}
              <line x1="580" y1="265" x2="545" y2="265" stroke="#9ea3ab" strokeWidth="3" strokeLinecap="round" />
              <line x1="540" y1="265" x2="535" y2="265" stroke="#9ea3ab" strokeWidth="3" />
              <path
                d="M535 265 L500 265 L500 130 L460 130"
                stroke="#9ea3ab"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {[0, 1, 2, 3, 4].map((i) => (
                <circle key={`pm${i}`} r="3" fill="#46a0d2" opacity="0.5" filter="url(#glow)">
                  <animate
                    attributeName="cx"
                    values="580;535;500;500;460"
                    dur="3s"
                    begin={`${i * 0.6}s`}
                    repeatCount="indefinite"
                    keyTimes="0;0.2;0.35;0.7;1"
                  />
                  <animate
                    attributeName="cy"
                    values="265;265;265;130;130"
                    dur="3s"
                    begin={`${i * 0.6}s`}
                    repeatCount="indefinite"
                    keyTimes="0;0.2;0.35;0.7;1"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;0.6;0.6;0.6;0"
                    dur="3s"
                    begin={`${i * 0.6}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}

              {/* U-shape patio tubing */}
              <line x1="460" y1="130" x2="80" y2="130" stroke="#9ea3ab" strokeWidth="3" strokeLinecap="round" />
              <line x1="80" y1="130" x2="80" y2="410" stroke="#9ea3ab" strokeWidth="3" strokeLinecap="round" />
              <line x1="80" y1="410" x2="460" y2="410" stroke="#9ea3ab" strokeWidth="3" strokeLinecap="round" />

              {/* Flow along U */}
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <circle key={`uf${i}`} r="2.5" fill="#46a0d2" opacity="0.4">
                  <animate
                    attributeName="cx"
                    values="460;80;80;460"
                    dur="5s"
                    begin={`${i * 0.7}s`}
                    repeatCount="indefinite"
                    keyTimes="0;0.35;0.65;1"
                  />
                  <animate
                    attributeName="cy"
                    values="130;130;410;410"
                    dur="5s"
                    begin={`${i * 0.7}s`}
                    repeatCount="indefinite"
                    keyTimes="0;0.35;0.65;1"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;0.5;0.5;0.5;0"
                    dur="5s"
                    begin={`${i * 0.7}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}

              {/* Elbows */}
              {[
                { x: 460, y: 130 },
                { x: 80, y: 130 },
                { x: 80, y: 410 },
              ].map((pos, i) => (
                <g
                  key={`elbow${i}`}
                  onMouseEnter={() => setHoveredPart('elbow')}
                  onMouseLeave={() => setHoveredPart(null)}
                  style={{ cursor: 'pointer' }}
                >
                  <circle cx={pos.x} cy={pos.y} r="8" fill="white" stroke="#d4944c" strokeWidth="1.5" />
                  <circle cx={pos.x} cy={pos.y} r="3" fill="#d4944c" opacity="0.3" />
                </g>
              ))}
              <Tooltip id="elbow" x={80} y={100} />

              {/* Nozzles top */}
              {[140, 210, 280, 350, 420].map((nx, ni) => (
                <g
                  key={`nt${ni}`}
                  onMouseEnter={() => setHoveredPart('nozzle')}
                  onMouseLeave={() => setHoveredPart(null)}
                  style={{ cursor: 'pointer' }}
                >
                  <rect x={nx - 4} y={130} width="8" height="12" rx="2" fill="#d4944c" />
                  <rect x={nx - 2} y={141} width="4" height="4" rx="1" fill="#c47a2c" />
                  <path d={`M${nx} 145 L${nx - 18} 210 L${nx + 18} 210 Z`} fill="url(#mistGrad)" opacity="0.3" />
                  {[0, 1, 2, 3].map((pi) => (
                    <circle key={pi} r="1.8" fill="rgba(70,160,210,0.5)">
                      <animate
                        attributeName="cx"
                        values={`${nx + (pi - 1.5) * 6};${nx + (pi - 1.5) * 10}`}
                        dur="2s"
                        begin={`${ni * 0.2 + pi * 0.3}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="cy"
                        from="148"
                        to="205"
                        dur="2s"
                        begin={`${ni * 0.2 + pi * 0.3}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;0.6;0.3;0"
                        dur="2s"
                        begin={`${ni * 0.2 + pi * 0.3}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  ))}
                </g>
              ))}

              {/* Nozzles left */}
              {[180, 240, 300, 360].map((ny, ni) => (
                <g key={`nl${ni}`}>
                  <rect x={80} y={ny - 4} width="12" height="8" rx="2" fill="#d4944c" />
                  <rect x={91} y={ny - 2} width="4" height="4" rx="1" fill="#c47a2c" />
                  <path d={`M95 ${ny} L160 ${ny - 18} L160 ${ny + 18} Z`} fill="url(#mistGrad)" opacity="0.25" />
                  {[0, 1, 2].map((pi) => (
                    <circle key={pi} r="1.5" fill="rgba(70,160,210,0.4)">
                      <animate
                        attributeName="cx"
                        from="98"
                        to="155"
                        dur="2.2s"
                        begin={`${ni * 0.25 + pi * 0.35}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="cy"
                        values={`${ny + (pi - 1) * 5};${ny + (pi - 1) * 10}`}
                        dur="2.2s"
                        begin={`${ni * 0.25 + pi * 0.35}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;0.5;0.2;0"
                        dur="2.2s"
                        begin={`${ni * 0.25 + pi * 0.35}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  ))}
                </g>
              ))}

              {/* Nozzles bottom */}
              {[140, 210, 280, 350, 420].map((nx, ni) => (
                <g key={`nb${ni}`}>
                  <rect x={nx - 4} y={398} width="8" height="12" rx="2" fill="#d4944c" />
                  <rect x={nx - 2} y={395} width="4" height="4" rx="1" fill="#c47a2c" />
                  <path
                    d={`M${nx} 395 L${nx - 18} 330 L${nx + 18} 330 Z`}
                    fill="url(#mistGrad)"
                    opacity="0.25"
                    style={{ transform: 'scaleY(-1)', transformOrigin: `${nx}px 362px` }}
                  />
                </g>
              ))}

              {/* Clamps */}
              {[170, 310, 450].map((cx, ci) => (
                <g
                  key={`ct${ci}`}
                  onMouseEnter={() => setHoveredPart('clamp')}
                  onMouseLeave={() => setHoveredPart(null)}
                  style={{ cursor: 'pointer' }}
                >
                  <rect x={cx - 3} y={122} width="6" height="8" rx="1" fill="#c0c8d0" stroke="#aab0b8" strokeWidth="0.5" />
                  <line x1={cx - 5} y1={118} x2={cx + 5} y2={118} stroke="#c0c8d0" strokeWidth="1.5" />
                </g>
              ))}

              <Tooltip id="clamp" x={310} y={100} />
              <Tooltip id="nozzle" x={280} y={110} />
              <Tooltip id="tubing" x={270} y={420} />

              {/* Labels for pump / filter / water */}
              <text
                x="610"
                y="315"
                textAnchor="middle"
                fontSize="10"
                fontWeight={600}
                fill="#d4944c"
                fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
              >
                PUMP
              </text>
              <text
                x="658"
                y="440"
                textAnchor="middle"
                fontSize="9"
                fontWeight={500}
                fill="#6bc48a"
                fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
              >
                FILTER
              </text>
              <text
                x="735"
                y="445"
                textAnchor="middle"
                fontSize="9"
                fontWeight={500}
                fill="#46a0d2"
                fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
              >
                WATER
              </text>

              {/* Spacing indicator */}
              <line x1="210" y1="155" x2="280" y2="155" stroke="#d4944c" strokeWidth="0.8" opacity="0.5" />
              <line x1="210" y1="152" x2="210" y2="158" stroke="#d4944c" strokeWidth="0.8" opacity="0.5" />
              <line x1="280" y1="152" x2="280" y2="158" stroke="#d4944c" strokeWidth="0.8" opacity="0.5" />
              <text
                x="245"
                y="167"
                textAnchor="middle"
                fontSize="8"
                fill="#d4944c"
                fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
                opacity="0.6"
              >
                60 cm
              </text>
            </svg>

            <div className="installation-legend">
              {[
                { color: '#46a0d2', label: 'Water flow' },
                { color: '#d4944c', label: 'Mist nozzles' },
                { color: '#9ea3ab', label: 'SS tubing' },
                { color: '#6bc48a', label: 'Filtration' },
              ].map((item) => (
                <div key={item.label} className="installation-legend-item">
                  <span
                    className="installation-legend-dot"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="installation-legend-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="installation-copy">
          <div className="section-header">
            <h2 className="section-title">{t('install.title')}</h2>
            <p className="section-subtitle">{t('install.subtitle')}</p>
          </div>

          <ul className="installation-steps">
            {steps.map((step) => (
              <li key={step} className="installation-step">
                <span className="installation-step-dot" />
                <span className="installation-step-text">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}


