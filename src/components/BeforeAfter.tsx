import { useRef, useState } from 'react'
import './BeforeAfter.css'
import { useTranslation } from '../context/LanguageContext'

export function BeforeAfter() {
  const { t } = useTranslation()
  const [value, setValue] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const frameRef = useRef<HTMLDivElement | null>(null)

  const clamp = (v: number) => Math.min(100, Math.max(0, v))

  const updateFromClientX = (clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect()
    if (!rect) return
    setValue(clamp(((clientX - rect.left) / rect.width) * 100))
  }

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => updateFromClientX(e.clientX)

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    setIsDragging(true)
    updateFromClientX(e.touches[0].clientX)
  }

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (!isDragging) return
    updateFromClientX(e.touches[0].clientX)
  }

  const handleTouchEnd = () => setIsDragging(false)

  return (
    <section id="before-after" className="section before-after-section">
      <div className="container before-after-layout">
        <div className="section-header">
          <h2 className="section-title">
            {t('beforeAfter.titleLine1')}
            <br />
            {t('beforeAfter.titleLine2')}
          </h2>
          <p className="section-subtitle">{t('beforeAfter.subtitle')}</p>
        </div>

        <div className="before-after-visual">
          <div className="before-after-card">
            <div
              ref={frameRef}
              className="before-after-frame"
              role="slider"
              aria-valuenow={value}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={t('beforeAfter.sliderLabel')}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
            >
              <div className="before-after-label before-label">
                <span>{t('beforeAfter.beforeLabel')}</span>
              </div>
              <div className="before-after-label after-label">
                <span>{t('beforeAfter.afterLabel')}</span>
              </div>
              <div className="before-after-image before-image">
                <img src="/images/terrace-before.jpg" alt={t('beforeAfter.beforeAlt')} loading="lazy" />
              </div>
              <div
                className="before-after-image after-image"
                style={{ ['--split' as string]: `${value}%` }}
              >
                <img src="/images/terrace-after.jpg" alt={t('beforeAfter.afterAlt')} loading="lazy" />
              </div>
              <div
                className="before-after-handle"
                style={{ left: `${value}%` }}
              >
                <div className="before-after-handle-line" />
                <div className="before-after-handle-knob" />
              </div>
            </div>

            <p className="before-after-note">{t('beforeAfter.note')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

