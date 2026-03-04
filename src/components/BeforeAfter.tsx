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
    const next = ((clientX - rect.left) / rect.width) * 100
    setValue(clamp(next))
  }

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
    updateFromClientX(event.clientX)
  }

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (event) => {
    setIsDragging(true)
    const touch = event.touches[0]
    updateFromClientX(touch.clientX)
  }

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (event) => {
    if (!isDragging) return
    const touch = event.touches[0]
    updateFromClientX(touch.clientX)
  }

  const handleTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    setIsDragging(false)
  }

  return (
    <section id="before-after" className="section section-animated before-after-section">
      <div className="container before-after-layout">
        <div className="section-header">
          <h2 className="section-title">{t('beforeAfter.title')}</h2>
          <p className="section-subtitle">{t('beforeAfter.subtitle')}</p>
        </div>

        <div className="before-after-visual">
          <div className="before-after-label before-label">
            <span>{t('beforeAfter.beforeLabel')}</span>
          </div>
          <div className="before-after-label after-label">
            <span>{t('beforeAfter.afterLabel')}</span>
          </div>

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
            <div className="before-after-image before-image">
              <img src="/images/terrace-before.jpg" alt={t('beforeAfter.beforeAlt')} />
            </div>
            <div className="before-after-image after-image" style={{ width: `${value}%` }}>
              <img src="/images/terrace-after.jpg" alt={t('beforeAfter.afterAlt')} />
            </div>
            <div
              className="before-after-handle"
              style={{ left: `${value}%` }}
            >
              <div className="before-after-handle-line" />
              <div className="before-after-handle-knob" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

