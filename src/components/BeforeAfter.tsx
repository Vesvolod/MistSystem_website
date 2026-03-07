import { useEffect, useRef, useState } from 'react'
import './BeforeAfter.css'
import { useTranslation } from '../context/LanguageContext'

export function BeforeAfter() {
  const { t } = useTranslation()
  const [value, setValue] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const frameRef = useRef<HTMLDivElement | null>(null)
  const phaseRef = useRef(0)

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
    setIsHovering(false)
  }

  // Автоматическое плавное движение слайдера, пока пользователь не взаимодействует
  useEffect(() => {
    if (isDragging || isHovering) return

    const id = window.setInterval(() => {
      // Плавная авто-анимация по синусоиде: от ~3% до ~97% без резких смен направления
      const amplitude = 47 // 50 ± 47 → 3–97
      const speed = 0.03

      phaseRef.current += speed
      const next = 50 + amplitude * Math.sin(phaseRef.current)

      setValue(next)
    }, 40)

    return () => window.clearInterval(id)
  }, [isDragging, isHovering])

  return (
    <section id="before-after" className="section section-animated before-after-section">
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
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={(event) => {
                setIsHovering(true)
                handleTouchStart(event)
              }}
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
                <img src="/images/terrace-before.jpg" alt={t('beforeAfter.beforeAlt')} />
              </div>
              <div
                className="before-after-image after-image"
                style={{ ['--split' as string]: `${value}%` }}
              >
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

            <p className="before-after-note">{t('beforeAfter.note')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

