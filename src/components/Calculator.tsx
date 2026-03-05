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
const PROFIT_MARGIN = 0.30
const UTILIZATION = 0.75

function estimatedExtraGuests(area: number) {
  return Math.max(2, Math.round(area / 20))
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
    const profitPerDay = Math.round(revenuePerDay * PROFIT_MARGIN * UTILIZATION)
    const netProfitPerDay = Math.max(profitPerDay - electricityPerDay, 0)
    const paybackMonths = netProfitPerDay > 0 ? model.price / netProfitPerDay / 30 : null
    const paybackPct =
      paybackMonths != null && paybackMonths <= 24
        ? Math.min(100, Math.round((12 / paybackMonths) * 8))
        : 0

    return {
      model,
      extraGuests,
      revenuePerDay,
      profitPerDay,
      electricityPerDay,
      netProfitPerDay,
      paybackMonths: paybackMonths != null ? +paybackMonths.toFixed(1) : null,
      paybackPct,
    }
  }, [area, avgCheck])

  const fmt = (value: number) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(value)

  return (
    <section id="calculator" className="section section-animated calculator-section">
      <div className="container calculator-layout">
        <header className="calculator-header">
          <h2 className="section-title">{t('calculator.title')}</h2>
          <p className="calculator-desc">{t('calculator.subtitleSimple')}</p>
        </header>

        <div className="calculator-stack">
          {/* Ввод данных */}
          <div className="calculator-input-card">
            <div className="calculator-input-row">
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
                  <span className="calc-value">{area} m²</span>
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
            </div>

            <p className="calculator-assumptions">{t('calculator.assumptionNote')}</p>
          </div>

          {/* Результаты: модель, цена, окупаемость, прибыль */}
          <div className="calculator-summary-card">
            <div className="summary-columns">
              <div className="summary-column summary-column-model">
                <p className="summary-label">{t('calculator.infographic.model')}</p>
                <p className="summary-value summary-model-name">{result.model.label}</p>
                <p className="summary-sublabel">
                  {result.model.minArea}–{result.model.maxArea} m² · {result.model.powerW}W
                </p>
              </div>

              <div className="summary-column summary-column-investment">
                <p className="summary-label">{t('calculator.infographic.systemCost')}</p>
                <p className="summary-value">{fmt(result.model.price)}</p>

                <p className="summary-sublabel">
                  {t('calculator.infographic.payback')}
                </p>
                {result.paybackMonths != null && result.paybackMonths < 120 ? (
                  <>
                    <p className="summary-payback">
                      ~{result.paybackMonths}{' '}
                      <span className="summary-payback-unit">{t('calculator.paybackMonths')}</span>
                    </p>
                    <div className="payback-bar">
                      <div
                        className="payback-bar-fill"
                        style={{ width: `${result.paybackPct}%` }}
                      />
                    </div>
                  </>
                ) : (
                  <p className="summary-payback">—</p>
                )}
              </div>

              <div className="summary-column summary-column-profit">
                <p className="summary-label">{t('calculator.infographic.netProfit')}</p>
                <p className="summary-profit-main">{fmt(result.netProfitPerDay)}</p>
                <p className="summary-sublabel summary-profit-note">
                  {t('calculator.infographic.profitNote')}
                </p>

                <p className="summary-sublabel summary-revenue-extra">
                  {t('calculator.infographic.revenueDay')} ·{' '}
                  {t('calculator.infographic.extraGuests').replace('{n}', String(result.extraGuests))}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="calculator-bottom-cta">
          <a href="#lead-form" className="btn btn-primary">
            {t('calculator.ctaAfter')}
          </a>
        </div>
      </div>
    </section>
  )
}
