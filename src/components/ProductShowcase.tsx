import './ProductShowcase.css'
import { useTranslation } from '../context/LanguageContext'

export function ProductShowcase() {
  const { t } = useTranslation()
  return (
    <section id="product" className="section section-animated product-section">
      <div className="container">
        <div className="product-layout">
          <div className="product-media">
            <div className="product-card">
              <div className="product-mist-layer" />
              <div className="product-terrace" />
              <div className="product-nozzles" />
            </div>
          </div>
          <div className="product-content">
            <h2 className="section-title">{t('product.title')}</h2>
            <p className="section-subtitle">{t('product.subtitle')}</p>
            <ul className="product-features">
              <li>{t('product.f1')}</li>
              <li>{t('product.f2')}</li>
              <li>{t('product.f3')}</li>
              <li>{t('product.f4')}</li>
              <li>{t('product.f5')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

