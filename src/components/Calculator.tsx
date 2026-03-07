import { useMemo, useState } from 'react'
import './Calculator.css'
import { useTranslation } from '../context/LanguageContext'

type Model = {
  id: string
  label: string
  minArea: number
  maxArea: number
  powerW: number
  price: number
}

const MODELS: Model[] = [
  { id: 'MISTPRO100', label: 'MistPro 100', minArea: 10, maxArea: 65, powerW: 180, price: 12_900_000 },
  { id: 'MISTPRO150', label: 'MistPro 150', minArea: 20, maxArea: 100, powerW: 180, price: 13_900_000 },
  { id: 'MISTPRO200', label: 'MistPro 200', minArea: 30, maxArea: 150, powerW: 250, price: 15_900_000 },
  { id: 'MISTPRO300', label: 'MistPro 300', minArea: 50, maxArea: 200, powerW: 750, price: 17_900_000 },
  { id: 'MISTPRO400', label: 'MistPro 400', minArea: 100, maxArea: 300, powerW: 700, price: 20_900_000 },
  { id: 'MISTPRO500', label: 'MistPro 500', minArea: 150, maxArea: 400, powerW: 800, price: 21_900_000 },
  { id: 'MISTPRO600', label: 'MistPro 600', minArea: 200, maxArea: 500, powerW: 1_000, price: 22_900_000 },
  { id: 'MISTPRO700', label: 'MistPro 700', minArea: 250, maxArea: 600, powerW: 1_200, price: 23_900_000 },
]

const HOURS_PER_DAY = 8
const ELECTRICITY_IDR_PER_KWH = 1_800

// Бизнес-модель: консервативные допущения (без декоративных коэффициентов)
const SEAT_DENSITY = 0.2 // посадочных мест на м² (консервативно для outdoor)
const HEAT_LOSS_FACTOR = 0.28 // доля потерь использования в жаркие часы
const RECOVERY_FACTOR = 0.55 // доля восстановления за счёт туманообразования
const GROSS_MARGIN = 0.28 // валовая маржа на доп. выручку
const MAINTENANCE_IDR_PER_MONTH = 75_000

function fmtIdr(value: number, roundToMillions = false) {
  const v = roundToMillions && value >= 1e6 ? Math.round(value / 1e6) * 1e6 : value
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(v)
}

function roundPayback(months: number | null): string {
  if (months == null || months >= 120) return '—'
  if (months <= 3) return '1–3'
  if (months <= 6) return '3–6'
  if (months <= 12) return '6–12'
  if (months <= 24) return '12–24'
  return '24+'
}

function installationUplift(area: number): number {
  if (area >= 300) return 0.1
  if (area >= 150) return 0.05
  return 0
}

/** Оценка доп. гостей в день: места → потери от жары → доля восстановления. */
function estimatedExtraGuests(area: number): number {
  const seats = area * SEAT_DENSITY
  const recovered = seats * HEAT_LOSS_FACTOR * RECOVERY_FACTOR
  return Math.max(2, Math.round(recovered))
}

export function Calculator() {
  const { t } = useTranslation()
  const [area, setArea] = useState(120)
  const [avgCheck, setAvgCheck] = useState(200_000)

  const result = useMemo(() => {
    const safeArea = Math.max(10, Math.min(600, area))
    const model =
      MODELS.find((m) => safeArea >= m.minArea && safeArea <= m.maxArea) ?? MODELS[MODELS.length - 1]

    const extraGuests = estimatedExtraGuests(safeArea)
    const powerKW = model.powerW / 1000
    const electricityPerDay = Math.round(powerKW * HOURS_PER_DAY * ELECTRICITY_IDR_PER_KWH)
    const revenuePerDay = Math.round(extraGuests * Math.max(0, avgCheck))
    const contributionPerDay = Math.round(revenuePerDay * GROSS_MARGIN)
    const monthlyContribution = contributionPerDay * 30
    const monthlyElectricity = electricityPerDay * 30
    const monthlyNetBenefit = Math.max(
      0,
      monthlyContribution - monthlyElectricity - MAINTENANCE_IDR_PER_MONTH
    )
    const installedCost = Math.round(model.price * (1 + installationUplift(safeArea)))
    const paybackMonthsRaw =
      monthlyNetBenefit > 0 ? installedCost / monthlyNetBenefit : null
    const paybackMonths =
      paybackMonthsRaw != null
        ? paybackMonthsRaw < 1.5
          ? 2
          : Math.ceil(paybackMonthsRaw)
        : null

    return {
      model,
      extraGuests,
      revenuePerDay,
      electricityPerDay,
      monthlyNetBenefit,
      paybackMonths,
    }
  }, [area, avgCheck])

  return (
    <section id="calculator" className="section calculator-section">
      <div className="container calculator-layout">
        <header className="calculator-header">
          <h2 className="section-title">{t('calculator.title')}</h2>
          <p className="calculator-desc">{t('calculator.subtitleSimple')}</p>
        </header>

        <div className="calculator-module">
          <div className="calculator-inputs">
            <div className="calc-field calc-field-area">
              <label htmlFor="area">{t('calculator.areaLabel')}</label>
              <div className="calc-field-row">
                <input
                  id="area"
                  type="range"
                  min={10}
                  max={600}
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                />
                <span className="calc-value" aria-live="polite">{area} m²</span>
              </div>
            </div>
            <div className="calc-field calc-field-check">
              <label htmlFor="avgCheck">{t('calculator.avgCheckShort')}</label>
              <input
                id="avgCheck"
                type="number"
                min={0}
                step={10000}
                value={avgCheck}
                onChange={(e) => setAvgCheck(Number(e.target.value) || 0)}
              />
            </div>
            <p className="calculator-helper-trust">{t('calculator.helperTrust')}</p>
          </div>

          <div className="calculator-results">
            <div className="results-primary">
              <div className="results-payback">
                <span className="results-payback-label">{t('calculator.infographic.payback')}</span>
                <span className="results-payback-value">
                {roundPayback(result.paybackMonths)}
                {result.paybackMonths != null && result.paybackMonths < 120 && (
                  <span className="results-payback-unit"> {t('calculator.paybackMonths')}</span>
                )}
                <span className="results-payback-hint"> (indicative)</span>
              </span>
                <span className="results-payback-line" aria-hidden="true" />
              </div>
              <div className="results-system">
                <span className="results-system-label">{t('calculator.infographic.model')}</span>
                <span className="results-system-name">{result.model.label}</span>
                <span className="results-system-meta">
                  {t('calculator.infographic.systemRange')
                    .replace('{min}', String(result.model.minArea))
                    .replace('{max}', String(result.model.maxArea))}{' '}
                  · {result.model.powerW}W
                </span>
              </div>
            </div>

            <div className="results-metrics">
              <div className="results-metric">
                <span className="results-metric-label">{t('calculator.infographic.systemCost')}</span>
                <span className="results-metric-value">≈ {fmtIdr(result.model.price, true)}</span>
              </div>
              <div className="results-metric">
                <span className="results-metric-label">{t('calculator.infographic.revenueDay')}</span>
                <span className="results-metric-value">{fmtIdr(result.revenuePerDay)}</span>
                <span className="results-metric-note">
                  {t('calculator.infographic.extraGuests').replace('{n}', String(result.extraGuests))}
                </span>
              </div>
              <div className="results-metric">
                <span className="results-metric-label">{t('calculator.infographic.monthlyNet')}</span>
                <span className="results-metric-value results-metric-net">{fmtIdr(result.monthlyNetBenefit)}</span>
                <span className="results-metric-note">{t('calculator.infographic.monthlyNetNote')}</span>
              </div>
              <div className="results-metric">
                <span className="results-metric-label">{t('calculator.infographic.electricityDay')}</span>
                <span className="results-metric-value">{fmtIdr(result.electricityPerDay)}</span>
                <span className="results-metric-note">
                  {result.model.powerW}W · {HOURS_PER_DAY}h/day
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="calculator-bottom-cta">
          <a href="#lead-form" className="btn btn-primary">
            {t('calculator.ctaAfter')}
          </a>
        </div>

        <p className="calculator-disclaimer">{t('calculator.disclaimerLong')}</p>
      </div>
    </section>
  )
}
